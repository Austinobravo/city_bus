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
import { FeedbackFormSchema } from "@/lib/schema/formSchema"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Loader2, Plus } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import PhoneInputWithCountrySelect from "react-phone-number-input"


const FeedbackForm = () => {
  const form = useForm<z.infer<typeof FeedbackFormSchema>>({
    resolver: zodResolver(FeedbackFormSchema),
    defaultValues: {
        details: "",
        file: "",
        firstName: "",
        lastName: "",
        email: "",
        town: "",
        address: "",
        phone: "",
    },
  })

  function onSubmit(data: z.infer<typeof FeedbackFormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  const isSubmitting = form.formState.isSubmitting

  const buyFrom = ["Online / Website", "Mobile App", "Bus Station", "Cash", "Through Agent","Others"]
  const paymentMethod = ["Credit Card", "Debit Card", "Bank Transfer", "Cash","Others"]
  const FeedbackReason = ["Overbooking", "Wrong date or time selected", "Accidental purchase", "Medical emergency", "Poor service or experience", "Others"]
  const ticketType = ["Single", "Round Trip", "Promo ticket", "Student", "Others"]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="border border-solid rounded-2xl border-gray-200 bg-gray-50/50 p-4 space-y-4">
            <div className="">
                <h3 className="font-medium text-gray-700 text-xl">Your Contact Details</h3>
                <div className="grid gap-x-4  lg:grid-cols-2 ">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel></FormLabel>
                             <FormControl>
                            <Input
                            {...field}
                            placeholder="First Name (Required)"
                            className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"
                            />
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
                        <FormLabel></FormLabel>
                        <FormControl>
                            <Input
                            {...field}
                            placeholder="Last Name (Required)"
                            className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"
                            />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                </div>
                <div className="grid gap-x-4  lg:grid-cols-2 ">
                    <FormField
                        control={form.control}
                        name="town"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel></FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                placeholder="Town / City (Optional)"
                                className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"
                                />

                            </FormControl>
                            <FormDescription>
                              
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                            <Input
                            {...field}
                            placeholder="Street address (Optional)"
                            className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"
                            />
                        </FormControl>
                        <FormDescription>
                            
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                </div>
                <div className="grid gap-x-4  lg:grid-cols-2 ">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="flex flex-col w-full">
                            <FormLabel></FormLabel>
                            <FormControl>
                            <PhoneInputWithCountrySelect international   defaultCountry={'NG'} style={{"fontSize": "0.9rem"}} placeholder="Enter number" {...field} className="bg-[#FCFCFC] text-gray-400 focus-visible:!ring-offset-0 focus-visible:!ring-0 focus:ring-0 focus:!ring-offset-0 focus-visible:border px-2 rounded-lg w-full min-h-18 border border-solid outline-none"/>
                
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
                        <FormLabel></FormLabel>
                        <FormControl>
                            <Input
                            type="email"
                            {...field}
                            placeholder="Email Address (Required)"
                            className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"
                            />
                        </FormControl>
                        <FormDescription>
                            
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                </div>
            </div>
            <div className="">
                <h3 className="font-medium text-gray-700 text-xl">Share your feedback with us (Required)</h3>
                    <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                           <Textarea
                            placeholder="Leave us a message"
                            className="h-40"
                            {...field}
                            />
                        </FormControl>
                        <FormDescription>
                            
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                        <Label htmlFor="file" className="cursor-pointer"><Plus /> Attach File</Label>
                        <FormControl>
                           <Input
                           type="file"
                           id="file"
                           className="hidden"
                            {...field}
                            />
                        </FormControl>
                        <FormDescription>
                            
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

            </div>
        <Button type="submit" className="min-h-14 bg-citybus-primary text-white w-full disabled:cursor-not-allowed " disabled={isSubmitting}>{isSubmitting ? <Loader2 className="animate-spin w-fit mx-auto" /> : "Send Message"}</Button>

        </div>

      </form>
    </Form>
  )
}

export default FeedbackForm
