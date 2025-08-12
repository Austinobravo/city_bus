"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { HomeHeroFormSchema } from "@/lib/schema/formSchema"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { ArrowDownUp, Clock4, X } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FaLocationArrow } from "react-icons/fa"
import React from "react"


export default function HomeHeroForm() {

      // 1. Define your form.
  const form = useForm<z.infer<typeof HomeHeroFormSchema>>({
    resolver: zodResolver(HomeHeroFormSchema),
    defaultValues: {
        from: "",
        to: "",
        passenger: "1",
        time: "",
        date: undefined,
    },
  })

      // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof HomeHeroFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  // ...

  
    const [active, setActive] = React.useState<{ [key: string]: boolean }>({})
  
    const handleSingleSubmit = (name: keyof z.infer<typeof HomeHeroFormSchema>, value: string) => {
      toast(`Submitted ${name}`, {
        description: value || "(empty)",
      })
    }
  
    const handleClear = (name: keyof z.infer<typeof HomeHeroFormSchema>) => {
      form.setValue(name, "")
      setActive((prev) => ({ ...prev, [name]: false }))
    }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="space-y-3 relative">
         <FormField
                  control={form.control}
                  name="from"
                  render={({ field }) => {
                    const isChecked = active["from"] || !!field.value
                    return (
                      <FormItem className="flex items-center gap-2 border border-solid bg-gray-100 rounded-lg px-2 min-h-14">
                        <RadioGroup value={isChecked ? "checked" : ""}>
                          <RadioGroupItem value="checked" id="radio-from" className="border-neutral-900 border-2"/>
                        </RadioGroup>
        
                        <FormControl>
                          <Input
                            placeholder="e.g Douglas Road"
                            {...field}
                            className="border-0 shadow-none focus-visible:ring-0 outline-none placeholder:text-gray-400"
                            onFocus={() => setActive((prev) => ({ ...prev, from: true }))}
                            onBlur={(e) => {
                              if (!e.target.value) {
                                setActive((prev) => ({ ...prev, from: false }))
                              }
                            }}
                          />
                        </FormControl>
        
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="border p-2 rounded-full"
                            onClick={() => handleSingleSubmit("from", field.value as string)}
                          >
                            <FaLocationArrow />
                          </button>
        
                          <button
                            type="button"
                            className="border p-1 rounded-full"
                            onClick={() => handleClear("from")}
                          >
                            <X />
                          </button>
                        </div>
        
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
         <FormField
                  control={form.control}
                  name="to"
                  render={({ field }) => {
                    const isChecked = active["to"] || !!field.value
                    return (
                      <FormItem className="flex items-center gap-2 border border-solid bg-gray-100 rounded-lg px-2 min-h-14">
                        <RadioGroup value={isChecked ? "checked" : ""}>
                          <RadioGroupItem value="checked" id="radio-to" className="border-neutral-900 border-2"/>
                        </RadioGroup>
        
                        <FormControl>
                          <Input
                            placeholder="e.g World Bank Road"
                            {...field}
                            className="border-0 shadow-none focus-visible:ring-0 outline-none placeholder:text-gray-400"
                            onFocus={() => setActive((prev) => ({ ...prev, to: true }))}
                            onBlur={(e) => {
                              if (!e.target.value) {
                                setActive((prev) => ({ ...prev, to: false }))
                              }
                            }}
                          />
                        </FormControl>
        
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="border p-2 rounded-full"
                            onClick={() => handleSingleSubmit("to", field.value as string)}
                          >
                            <FaLocationArrow />
                          </button>
        
                          <button
                            type="button"
                            className="border p-1 rounded-full"
                            onClick={() => handleClear("to")}
                          >
                            <X />
                          </button>
                        </div>
        
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
                <div className="bg-white rounded-full shadow absolute bottom-10 right-24 p-2">
                  <ArrowDownUp />
                </div>

        </div>

        <div className="flex not-lg:flex-wrap gap-x-5 items-center">
              <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel></FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " font-normal bg-gray-200 w-full flex items-center justify-center min-h-14 rounded-2xl",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
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
                    <FormItem className="w-full">
                    <FormLabel></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <div className="flex bg-gray-200 rounded-md items-center px-2 w-full min-h-14">
                            <Clock4 className="opacity-50 size-4" />
                            <SelectTrigger className="border-0 flex-1">
                                <SelectValue placeholder="Now" />
                            </SelectTrigger>

                            </div>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                        <SelectItem value="m@support.com">m@support.com</SelectItem>
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
                name="passenger"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormLabel></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                        <FormControl >
                        <SelectTrigger className="w-full min-h-14">
                            <SelectValue placeholder="How many passengers?" className="w-full"/>
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="1">1 Passenger</SelectItem>
                        <SelectItem value="2">2 Passengers</SelectItem>
                        <SelectItem value="3">1 Passengers</SelectItem>
                        <SelectItem value="4">1 Passengers</SelectItem>
                        <SelectItem value="5">5+ Passengers</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormDescription>
                       
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
        </div>
        <Button type="submit" className="bg-citybus-primary text-white min-h-14 w-full my-2">Plan your Journey</Button>
      </form>
    </Form>
  )
}