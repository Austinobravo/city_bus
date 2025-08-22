"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { FaLocationArrow } from "react-icons/fa"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

const FormSchema = z.object({
  search: z.string()
})

export default function TrackBusNumberForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        search: ""
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-green-50/50 p-4">
        <h3 className="font-semibold text-xl text-gray-700">Track bus number</h3>
        <div className="flex items-center w-full">
         <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel></FormLabel>
              <FormControl>
                <Input placeholder="Enter bus number" {...field} className="min-h-14 w-full !rounded-r-none"/>
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size={"icon"} className="text-white bg-citybus-primary !rounded-l-none min-h-14"><Search /></Button>

        </div>
        <h4 className="text-citybus-primary">Can be found on your ticket and your timetable email.</h4>
      </form>
    </Form>
  )
}
