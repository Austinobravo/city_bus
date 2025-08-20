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
import PhoneInput from 'react-phone-number-input'
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
 

const FormSchema = z.object({
  firstName: z.string().min(2, {
    error: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    error: "Last Name must be at least 2 characters.",
  }),
  town: z.string().optional(),
  street: z.string().optional(),
  phone: z.string().optional(),
  email: z.email().min(2, {
    error: "Email must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      town: "",
      street: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-black">First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"/>
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-black">Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"/>
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

      </div>
       <div className="grid lg:grid-cols-2 gap-4">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="!text-black">Email</FormLabel>
                    <FormControl>
                    <Input type="email" placeholder="you@company.com" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"/>
                    </FormControl>
                    <FormDescription>
                    
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="!text-black">Phone number</FormLabel>
                    <FormControl>
                    <PhoneInput international   defaultCountry={'NG'} style={{"fontSize": "0.9rem"}} placeholder="Enter number" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-0 focus:!ring-offset-0 focus-visible:border shadow border-[#C4C4C4] px-2 rounded-lg w-full min-h-18 outline-none"/>

                    </FormControl>
                    <FormDescription>
                    
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />

       </div>
        <div className="grid lg:grid-cols-2 gap-4">
            <FormField
                control={form.control}
                name="town"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="!text-black">Town/City</FormLabel>
                    <FormControl>
                    <Input placeholder="Owerri" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"/>
                    </FormControl>
                    <FormDescription>
                    
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="!text-black">Street Address</FormLabel>
                    <FormControl>
                    <Input placeholder="No 10A Naze..." {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"/>
                    </FormControl>
                    <FormDescription>
                    
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>
        <Button type="submit" className="min-h-14 bg-citybus-primary w-full disabled:cursor-not-allowed cursor-pointer disabled:opacity-50" disabled={isSubmitting}>{isSubmitting ? <div><Loader2  className="animate-spin "/></div> : "Save"}</Button>
      </form>
    </Form>
  )
}
