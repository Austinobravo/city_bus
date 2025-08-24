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
import { TbEyeClosed } from "react-icons/tb"
import { ImEye } from "react-icons/im"
import React from "react"
import { Separator } from "../ui/separator"
import Link from "next/link"
 

const FormSchema = z.object({
  userName: z.string().min(2, {
    message: "User Name must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})

export default function LoginForm() {
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userName: "",
      password: "",
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
    <div className="space-y-4">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <h3 className="text-xl font-semibold">Log in</h3>
        <Separator className="bg-citybus-primary"/>
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-black"></FormLabel>
              <FormControl>
                <Input placeholder="User Name" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-11"/>
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                <FormItem className="lg:basis-1/2">
                    <FormLabel className="!text-black"></FormLabel>
                    <FormControl>
                        <div className='flex items-center border pr-1 rounded-md'>
                            <Input type={showPassword ? 'text' : 'password'} placeholder='Password...' {...field} className='!bg-transparent min-h-11 border-0 focus-visible:!ring-offset-0 focus-visible:!ring-0' />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ?
                                <TbEyeClosed className='cursor-pointer size-6'/>
                                :
                                <ImEye className='cursor-pointer size-6'/>
                                }
        
                            </span>
                            
                        </div>
                    </FormControl>
                    <FormDescription>
                    
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
        <Button type="submit" className="min-h-14 bg-citybus-primary w-full disabled:cursor-not-allowed cursor-pointer disabled:opacity-50" disabled={isSubmitting}>{isSubmitting ? <div><Loader2  className="animate-spin "/></div> : "Log in"}</Button>
      </form>
    </Form>
    <div className="space-y-4 w-full">
      <div className="w-full text-center">
        <Link href="/forgot-password" className="text-center font-semibold underline mx-auto underline-offset-4 text-citybus-primary w-fit">Forgot your password</Link>

      </div>
      <Separator className="bg-[#CCCCCC]"/>
      <Link href="/register" className="w-full">
        <Button variant={'outline'} className="border-citybus-primary cursor-pointer font-medium text-lg text-citybus-primary w-full min-h-14">Register</Button>
      </Link>
    </div>

    </div>
  )
}
