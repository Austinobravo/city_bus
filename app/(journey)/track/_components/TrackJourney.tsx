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
  type: z.enum(["departure", "arrival"], {
    error: "You need to select a notification type.",
  }),
  search: z.string()
})

export default function TrackAJourneyForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        type: "departure",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
         <FormField
            control={form.control}
            name="type"
            render={({ field }) => {
                const options = [
                { value: "departure", label: "Departure" },
                { value: "arrival", label: "Arrival" },
                ];

                return (
                <FormItem className="space-y-3">
                    <FormLabel className="text-gray-700 font-semibold text-xl">Track Journey</FormLabel>
                    <FormControl>
                    <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-col gap-2"
                    >
                        {options.map((opt) => (
                        <Label
                            key={opt.value}
                            htmlFor={opt.value}
                            className={`flex items-center bg-gray-100 justify-between gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                            field.value === opt.value
                                ? "text-neutral-900"
                                : "text-gray-400"
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <FormControl>
                                    <RadioGroupItem value={opt.value} id={opt.value} />
                                </FormControl>
                                <FormLabel htmlFor={opt.value} className="cursor-pointer">
                                {opt.label}
                                </FormLabel>
                            </div>
                            <div className="border border-solid size-7 p-1 flex justify-center items-center rounded-full">
                                <FaLocationArrow className="" />
                            </div>
                        </Label>
                        ))}
                    </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                );
            }}
            />
        <div className="flex items-center w-full">
         <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel></FormLabel>
              <FormControl>
                <Input placeholder="Search Stop" {...field} className="min-h-14 w-full !rounded-r-none"/>
              </FormControl>
              <FormDescription>
            
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size={"icon"} className="text-white bg-citybus-primary !rounded-l-none min-h-14"><Search /></Button>

        </div>
      </form>
    </Form>
  )
}
