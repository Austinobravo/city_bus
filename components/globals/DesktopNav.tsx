"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, CircleCheckIcon, CircleHelpIcon, CircleIcon, CircleUser, CreditCard, Settings, ShoppingCart, Star } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useNavigation } from "@/hooks/useNavigation"
import { cn } from "@/lib/utils"
import LoginForm from "./LoginForm"
import { Separator } from "../ui/separator"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function DesktopNav() {
    const navLinks = useNavigation()
  return (
    <div className="flex justify-between gap-2 text-[#194185] w-full px-7 py-5 shadow">
        <Link href="/">
        <figure className="flex gap-2">
            <Image src={`/logo.png`} alt="logo" width={200} height={200} priority className="size-6" />
            <figcaption className="font-plus-jakarta-sans font-semibold text-xl whitespace-nowrap">City Bus Transit</figcaption>
        </figure>
        </Link>
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {navLinks.map((link) => (
        <NavigationMenuItem key={link.name}>
          {link.children && link.children?.length >= 1?
          <>
          <NavigationMenuTrigger
           className="hover:border-b-2 rounded-b-none border-solid border-[#194185]">
            {link.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[200px]">
                {link.children.map((child) => (
                    <li key={child.title}>
                        <NavigationMenuLink asChild>
                        <Link href={child.href} className="text-[#194185] font-semibold">{child.title}</Link>
                        </NavigationMenuLink>
                    </li>

                ))}
            </ul>
          </NavigationMenuContent>

          </>
          :
          <NavigationMenuLink asChild className={cn("hover:border-b-2 !rounded-b-none border-solid border-[#194185]",navigationMenuTriggerStyle()) }>
            <Link href={link.href}>{link.name}</Link>
          </NavigationMenuLink>
          }
        </NavigationMenuItem>

        ))}

      </NavigationMenuList>
    </NavigationMenu>
    <div className="flex gap-2 items-center">
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 group">
            <span>English</span>
        <ChevronDown className="size-4 transition-all duration-200 ease-in-out group-data-[state=open]:rotate-180"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-[#194185] font-semibold">
            <DropdownMenuItem>Igbo</DropdownMenuItem>
            <DropdownMenuItem>Pidgin</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    {/* <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center py-2 gap-2 whitespace-nowrap group text-sm text-white rounded-lg px-2 bg-[#194185]">
        <CircleUser className="w-4 h-4" />
        <span>My Account</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-[#194185] font-semibold">
        <Link href="/account"> 
          <DropdownMenuItem className="cursor-pointer"><CircleUser className="w-4 h-4 mr-2" /> Manage Account</DropdownMenuItem>
        </Link>
        <Link href="/favorites">
        <DropdownMenuItem className="cursor-pointer"><Star className="w-4 h-4 mr-2" /> Favorites</DropdownMenuItem>
        </Link>
        <Link href="/wallet">
        <DropdownMenuItem className="cursor-pointer"><CreditCard className="w-4 h-4 mr-2" /> Wallets</DropdownMenuItem>
        </Link>
        <Link href="/profile">
        <DropdownMenuItem className="cursor-pointer"><Settings className="w-4 h-4 mr-2" /> Settings</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu> */}
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center py-2 gap-2 whitespace-nowrap group text-sm text-white rounded-lg px-2 bg-[#194185]">
        <CircleUser className="w-4 h-4" />
        <span>Sign Up</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-[#194185] font-semibold min-w-sm p-4">
        <LoginForm />
      </DropdownMenuContent>
    </DropdownMenu>

    <Link href="/cart">
    <Button className="cursor-pointer" variant={"outline"} size={'icon'} ><ShoppingCart /></Button>
    </Link>
    </div>

    </div>
  )
}

