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
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const FormSchema = z.object({
  search: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function FaqForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
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
    <div className="bg-gray-50 p-4 rounded-lg space-y-2 my-6">
      <h2 className="text-gray-700 text-2xl font-medium">How can we help you today?</h2>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
                <FormItem className="flex gap-2 items-center border bg-white w-full px-4 py-2 rounded-sm">
                <FormLabel> <Search /></FormLabel>
                <FormControl>
                    <Input placeholder="Search for topic or keyword..." {...field}  className="shadow-none border-0 focus-visible:ring-0 ring-0 outline-0"/>
                </FormControl>
                <FormDescription>
                
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            
        </form>
        </Form>

    </div>
  )
}
