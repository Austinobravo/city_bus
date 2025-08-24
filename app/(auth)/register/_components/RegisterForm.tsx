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
  userName: z.string().min(2, {
    message: "User Name must be at least 2 characters.",
  }),
  address: z.string().optional(),
  email: z.email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  confirmPassword: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})

const passwordRules = [
{ label: "Make it at least 12 characters", test: (pwd: string) => pwd.length >= 12 },
{ label: "Add uppercase letters", test: (pwd: string) => /[A-Z]/.test(pwd) },
{ label: "Add lowercase letters", test: (pwd: string) => /[a-z]/.test(pwd) },
{ label: "Add numbers", test: (pwd: string) => /\d/.test(pwd) },
]

const getPasswordStrength = (password: string) => {
  let score = passwordRules.reduce((acc, rule) => acc + (rule.test(password) ? 1 : 0), 0)

  const levels = [
    { label: "Weak", color: "bg-red-500" },
    { label: "Good", color: "bg-yellow-500" },
    { label: "Strong", color: "bg-blue-500" },
    { label: "Excellent", color: "bg-green-600" },
  ]

  return { score, ...levels[score - 1] || { label: "Weak", color: "bg-red-500" } }
}



export default function RegisterForm() {
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            userName: "",
            address: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
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
const [strength, setStrength] = React.useState<{ score: number, label: string, color: string }>({
    score: 0,
    label: "Weak",
    color: "bg-gray-300"
  })
  const [unmetRules, setUnmetRules] = React.useState(passwordRules)

  const passwordValue = form.watch("password")

  React.useEffect(() => {
    if (passwordValue) {
      setStrength(getPasswordStrength(passwordValue))
      setUnmetRules(passwordRules.filter(rule => !rule.test(passwordValue)))
    } else {
      setStrength({ score: 0, label: "Weak", color: "bg-gray-300" })
      setUnmetRules(passwordRules)
    }
  }, [passwordValue])

  const isSubmitting = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-black">User Name</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"/>
              </FormControl>
              <FormDescription>
              
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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

      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
            <FormItem>
                <FormLabel className="!text-black">Street address (Optional)</FormLabel>
                <FormControl>
                <Input placeholder="Street Address" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"/>
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
      <div className="flex not-lg:flex-col gap-4 items-start w-full">
       <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
        <FormItem className="lg:basis-1/2">
            <FormLabel className="!text-black">Password</FormLabel>
            <FormControl>
                <div className='flex items-center border pr-1 rounded-md'>
                    <Input type={showPassword ? 'text' : 'password'} placeholder='Password...' {...field} className='!bg-transparent min-h-18 border-0 focus-visible:!ring-offset-0 focus-visible:!ring-0' />
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
             {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-3 rounded-md mt-3">
            <div
              className={`h-3 rounded-md transition-all duration-300 ${strength.color}`}
              style={{ width: `${(strength.score / 4) * 100}%` }}
            />
          </div>
          <h2 className="text-gray-700 text-sm mt-1">
            Password Strength: <span className="font-semibold">{strength.label}</span>
          </h2>
           {/* Recommendations (only unmet rules remain) */}
          {unmetRules.length > 0 && (
            <>
              <h3 className="font-medium mt-2">Recommendation to make your password stronger</h3>
              <ul className="marker:text-citybus-primary list-inside list-disc text-gray-700 text-sm space-y-2">
                {unmetRules.map((rule, i) => (
                  <li key={i}>{rule.label}</li>
                ))}
              </ul>
            </>
          )}
        </FormItem>
        )}
    />
       <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
        <FormItem className="lg:basis-1/2 w-full">
            <FormLabel className="!text-black">Confirm Password</FormLabel>
            <FormControl>
                <div className='flex items-center border pr-1 h-18 rounded-md'>
                    <Input type={showConfirmPassword ? 'text' : 'password'} placeholder='Password...' {...field} className='!bg-transparent h-18 border-0 focus-visible:!ring-offset-0 focus-visible:!ring-0' />
                    <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ?
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
            <div className="">
                <Button type="submit" className="min-h-14 bg-citybus-primary w-full disabled:cursor-not-allowed cursor-pointer disabled:opacity-50" disabled={isSubmitting}>{isSubmitting ? <div><Loader2  className="animate-spin "/></div> : "Create Account"}</Button>

            </div>
        </FormItem>
        )}
    />

      </div>
      </form>
    </Form>
  )
}
