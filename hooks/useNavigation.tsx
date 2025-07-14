import { usePathname } from "next/navigation"
import React from "react"
export const useNavigation = () => {
    const pathname = usePathname()
    const navLinks = React.useMemo(() => [
        {
            name: "Plan your Journey",
            href: "/",
            active: pathname === "/",
            children: [
                {
                    title: "Journey planner",
                    href: ""
                },
                {
                    title: "Trip Tracker",
                    href: ""
                },
                {
                    title: "Routes & Stops",
                    href: ""
                },
                {
                    title: "Saved Locations",
                    href: ""
                },
            ]
        },
        {
            name: "Buy Tickets",
            href: "/buys-tickets",
            active: pathname.startsWith("/buys-tickets"),
            children: [
                {
                    title: "Buy for self",
                    href: ""
                },
                {
                    title: "Buy for others",
                    href: ""
                },
            ]
        },
        {
            name: "Promos & Offers",
            href: "/promos-and-offers",
            active: pathname.startsWith("/promos-and-offers")
        },
        {
            name: "Service Update",
            href: "/service-update",
            active: pathname.startsWith("/service-update")
        },
         {
            name: "Help & Support",
            href: "/help-and-support",
            active: pathname.startsWith("/help-and-support"),
            children: [
                {
                    title: "FAQS",
                    href: ""
                },
                {
                    title: "Contact Us",
                    href: ""
                },
                {
                    title: "Accessibility",
                    href: ""
                },
                {
                    title: "Safety & Security",
                    href: ""
                },
            ]
        },
        
    ], [pathname])
    return navLinks
}

