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
import { LostPropertyFormSchema } from "@/lib/schema/formSchema"
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


const LostPropertyForm = () => {
  const form = useForm<z.infer<typeof LostPropertyFormSchema>>({
    resolver: zodResolver(LostPropertyFormSchema),
    defaultValues: {
        location: "",
        destination: "",
        time: "",
        date: undefined,
        busNumber: "",
        ticketNumber: "",
        lostItem: "Phone",
        brand: "",
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

  function onSubmit(data: z.infer<typeof LostPropertyFormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  const isSubmitting = form.formState.isSubmitting

  const lostProperty = ["Phone", "Laptop", "Document", "ID Card", "Credit/Debit Card", "Medication", "Purse / Wallet", "Clothing", "Keys", "Bags", "Umbrella", "Others"]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="border border-solid rounded-2xl border-gray-200 bg-gray-50/50 p-4 space-y-4">
            <div className="">
                <h3 className="font-medium text-gray-700 text-xl">When and Where</h3>
                <div className="grid gap-x-4  lg:grid-cols-2 ">
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel></FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && " bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18"
                                    )}
                                    >
                                    {field.value ? (
                                        format(field.value, "PPP")
                                    ) : (
                                        <span>Date (Required)</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                    }
                                    captionLayout="dropdown"
                                />
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                              
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                            <Input
                            type="time"
                            id="time-picker"
                            step="1"
                            {...field}
                            placeholder="Time (Required)"
                            // defaultValue="10:30:00"
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
                        name="location"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel></FormLabel>
                             <FormControl>
                            <Input
                            {...field}
                            placeholder="Location (Required)"
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
                    name="destination"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                            <Input
                            {...field}
                            placeholder="Destination (Required)"
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
                <h3 className="font-medium text-gray-700 text-xl">The Bus</h3>
                <div className="grid gap-x-4  lg:grid-cols-2 ">
                    <FormField
                        control={form.control}
                        name="busNumber"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel></FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                placeholder="Registration / CBT number (Optional)"
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
                    name="ticketNumber"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                            <Input
                            {...field}
                            placeholder="Ticket number (Optional)"
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
                <h3 className="font-medium text-gray-700 text-xl">Your Lost Item</h3>
                <div className="grid gap-x-4  lg:grid-cols-2 ">
                    <FormField
                        control={form.control}
                        name="lostItem"
                        render={({ field }) => (
                            <FormItem className="flex flex-col w-full">
                            <FormLabel></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl className="w-full">
                            <SelectTrigger className="bg-[#FCFCFC] text-gray-400 focus-visible:ring-0 min-h-18 ">
                                <SelectValue placeholder="Select the lost item" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {lostProperty.map((property) => (
                                    <SelectItem key={property} value={property} className="hover:!bg-citybus-primary hover:!text-white">{property}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                            <FormDescription>
                              
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                            <Input
                            {...field}
                            placeholder="Brand (Optional)"
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
                <h3 className="font-medium text-gray-700 text-xl">Describe your item in full details (Required)</h3>
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
                            multiple
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
        </div>
      </form>
    </Form>
  )
}

export default LostPropertyForm
