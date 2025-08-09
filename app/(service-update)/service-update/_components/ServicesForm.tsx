"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FaLocationArrow } from "react-icons/fa"
import { X } from "lucide-react"
import { useState } from "react"

const FormSchema = z.object({
  search1: z.string().optional(),
//   search2: z.string().optional(),
})

export default function ServicesForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search1: "",
    //   search2: "",
    },
  })

  const [active, setActive] = useState<{ [key: string]: boolean }>({})

  const handleSingleSubmit = (name: keyof z.infer<typeof FormSchema>, value: string) => {
    toast(`Submitted ${name}`, {
      description: value || "(empty)",
    })
  }

  const handleClear = (name: keyof z.infer<typeof FormSchema>) => {
    form.setValue(name, "")
    setActive((prev) => ({ ...prev, [name]: false }))
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          toast("Full form submitted", {
            description: (
              <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                <code className="text-white">{JSON.stringify(data, null, 2)}</code>
              </pre>
            ),
          })
        })}
        className=" space-y-4"
      >
        {/* First Input */}
        <FormField
          control={form.control}
          name="search1"
          render={({ field }) => {
            const isChecked = active["search1"] || !!field.value
            return (
              <FormItem className="flex items-center gap-2 border border-solid bg-gray-100 rounded-lg px-2 min-h-14">
                <RadioGroup value={isChecked ? "checked" : ""}>
                  <RadioGroupItem value="checked" id="radio-search1" className="border-neutral-900 border-2"/>
                </RadioGroup>

                <FormControl>
                  <Input
                    placeholder="Search by location, bus route or description..."
                    {...field}
                    className="border-0 shadow-none focus-visible:ring-0 outline-none placeholder:text-gray-400"
                    onFocus={() => setActive((prev) => ({ ...prev, search1: true }))}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        setActive((prev) => ({ ...prev, search1: false }))
                      }
                    }}
                  />
                </FormControl>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="border p-2 rounded-full"
                    onClick={() => handleSingleSubmit("search1", field.value as string)}
                  >
                    <FaLocationArrow />
                  </button>

                  <button
                    type="button"
                    className="border p-1 rounded-full"
                    onClick={() => handleClear("search1")}
                  >
                    <X />
                  </button>
                </div>

                <FormMessage />
              </FormItem>
            )
          }}
        />
        <div className="flex gap-x-2 gap-y-4 items-center flex-wrap">
            <h3 className="text-xl font-medium text-gray-700">Quick Dates:</h3>
            <button className="bg-gray-100 rounded-lg font-medium text-gray-500 px-4 py-2">Today</button>
            <button className="bg-gray-100 rounded-lg font-medium text-gray-500 px-4 py-2">Tomorrow</button>
            <button className="bg-gray-100 rounded-lg font-medium text-gray-500 px-4 py-2">This Week</button>
        </div>

        {/* Second Input */}
        {/* <FormField
          control={form.control}
          name="search2"
          render={({ field }) => {
            const isChecked = active["search2"] || !!field.value
            return (
              <FormItem className="flex items-center gap-2 border border-solid bg-gray-100 rounded-lg px-2 min-h-14">
                <RadioGroup value={isChecked ? "checked" : ""}>
                  <RadioGroupItem value="checked" id="radio-search2" />
                </RadioGroup>

                <FormControl>
                  <Input
                    placeholder="Search 2..."
                    {...field}
                    className="border-0 shadow-none focus-visible:ring-0 outline-none"
                    onFocus={() => setActive((prev) => ({ ...prev, search2: true }))}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        setActive((prev) => ({ ...prev, search2: false }))
                      }
                    }}
                  />
                </FormControl>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="border p-2 rounded-full"
                    onClick={() => handleSingleSubmit("search2", field.value as string)}
                  >
                    <FaLocationArrow />
                  </button>

                  <button
                    type="button"
                    className="border p-1 rounded-full"
                    onClick={() => handleClear("search2")}
                  >
                    <X />
                  </button>
                </div>

                <FormMessage />
              </FormItem>
            )
          }}
        />

        <Button type="submit">Submit All</Button> */}
      </form>
    </Form>
  )
}
