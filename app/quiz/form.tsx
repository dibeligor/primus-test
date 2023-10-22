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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import Link from "next/link"
import { DialogClose } from "@radix-ui/react-dialog"
 
const FormSchema = z.object({
  q1:z.string({
    required_error: "You need to select an answer.",
  }),
  q2:z.string({
    required_error: "You need to select an answer.",
  }),
  q3:z.string({
    required_error: "You need to select an answer.",
  }),
  q4:z.string({
    required_error: "You need to select an answer.",
  }),
})

const quizItems = shuffleArray(quiz.map(item => ({
  ...item,
  choices: shuffleArray([...item.incorrectAnswers, item.correctAnswer])
})))

type QuizItem = {
  id:string,
  question:string,
  correctAnswer:string,
  incorrectAnswer:string,
  category:string,
  hint:string,
}
 
export function QuestionForm() {
  let[score, setScore] = useState(0)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    quizItems.forEach((quizItem:QuizItem) => {
      if (data[quizItem.id] === quizItem.correctAnswer) {
        setScore(score => score + 1)
      }
      console.log(data[quizItem.id], quizItem.correctAnswer, score)
    })

   
    
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  function resetScore(){
    setScore(0)
  }

 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {quizItems.map((quizItem, index) => (   
          <div key={quizItem.id}>
            <FormField
              control={form.control}
              name={quizItem.id}
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
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}  
            />
            <div className="h-2" />
            <Dialog >
              <DialogTrigger>
                <Button type="submit">Hint</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-left">
                    Security
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  <p className="pb-2"><span className="font-bold">Security </span>is the protection of property of all kinds of loss through theft, fraud, fire and other forms of damage, and waste. It is the protection of secret processes, financial data, sales projects and other information vital to a company’s interests against loss through what is described as industrial espionage, is also a security responsibility.</p>
                  <p className="pb-2"><span className="font-bold">Security and Protection System,</span> any of various means or devices designed to guard persons and property against a broad range of hazards, including crime, fire, accidents, espionage, sabotage, subversion, and attack.</p>
                  <p className="pb-2"><span className="font-bold">Physical Security System</span> - a barrier or system of barriers placed between the potential intruder and the matter to be protected. Protective device against hazards, threats, vulnerability and risks.</p>
                  <p><span className="font-bold">Security Survey</span> is a thorough on-site examination and analysis of a facility to determine what assets are present and their value; to evaluate the existing security program; to identify differences or excesses; to determine the protection needed; and to support recommendations to improve overall security.</p>

          </DialogDescription>
              </DialogContent>
            </Dialog>
                 
          </div>        
        ))}

        <Dialog>
          <DialogTrigger>
            <Button type="submit">Submit</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Your Score is {score} / {quizItems.length}
              </DialogTitle>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button onClick={resetScore} type="button" variant="secondary">
                  Try Again
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  )
}