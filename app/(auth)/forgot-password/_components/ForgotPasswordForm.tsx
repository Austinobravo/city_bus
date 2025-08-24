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
import { Eye, EyeOff, Loader2 } from "lucide-react"
import React from "react"
import { ImEye } from "react-icons/im";
import { TbEyeClosed } from "react-icons/tb";

const FormSchema = z.object({
  username_email: z.string().min(2, {
    message: "This field is mandatory.",
  }),
})




export default function ForgotPasswordForm() {
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username_email: "",
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
        <FormField
          control={form.control}
          name="username_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-black"></FormLabel>
              <FormControl>
                <Input placeholder="Username or email adddress" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"/>
              </FormControl>
              <FormDescription className="text-gray-700">
              Password reset instructions will be sent to your registered email address
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="">
            <Button type="submit" className="min-h-14 bg-citybus-primary w-full disabled:cursor-not-allowed cursor-pointer disabled:opacity-50" disabled={isSubmitting}>{isSubmitting ? <div><Loader2  className="animate-spin "/></div> : "Submit"}</Button>
        </div>
      </form>
    </Form>
  )
}
