"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {quiz} from '@/lib/data.js' 
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import shuffleArray from '@/utils/shuffleArray'
 
const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
})

const quizItems = shuffleArray(quiz.map(item => ({
  ...item,
  choices: shuffleArray([...item.incorrectAnswers, item.correctAnswer])
})))

console.log(quizItems)
 
export function QuestionForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
 
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {quizItems.map((quizItem, index) => (   
            <div key={quizItem.id}>
                <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel>{index +1 }. {quizItem.question}</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                        >
                            {quizItem.choices.map((choice:string, index:number) => (
                                <FormItem key={index} className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value={choice} />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                        {choice}
                                    </FormLabel>
                                </FormItem>
                            ) )}
                        
                    </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        
        />
            </div>     
            
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}