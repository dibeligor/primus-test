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
 
const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
})


 
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
        {quiz.map((item, index) => (   
            <div>
                <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel>{index +1 }. {item.question}</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                        >
                            {item.incorrectAnswers.map((choice, index) => (
                                <FormItem className="flex items-center space-x-3 space-y-0">
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