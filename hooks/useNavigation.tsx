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
                    href: "/plan-journey"
                },
                {
                    title: "Trip Tracker",
                    href: "/track"
                },
                {
                    title: "Routes & Stops",
                    href: ""
                },
                {
                    title: "Saved Locations",
                    href: "/favorites"
                },
                {
                    title: "View Timetable",
                    href: "/timetable"
                },
            ]
        },
        {
            name: "Buy Tickets",
            href: "/buy-tickets",
            active: pathname.startsWith("/buy-tickets"),
            children: [
                {
                    title: "Buy for self",
                    href: "/see-all-tickets"
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
                    href: "faqs"
                },
                {
                    title: "Contact Us",
                    href: "contact-us"
                },
                {
                    title: "Accessibility",
                    href: "accessibility"
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

