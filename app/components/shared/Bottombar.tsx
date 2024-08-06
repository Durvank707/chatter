"use client"

import { sidebarLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BottomSidebar() {
    
    const pathname = usePathname()

    return (
        <section className="fixed inset-x-0 bottom-0 bg-[#121417] z-10 max-md:flex md:hidden">
            <div className="flex justify-between w-full">
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

                    return (
                        <div className="flex-1 px-2 py-2" key={link.label}>
                            <Link href={link.route} className={`flex flex-col items-center justify-center gap-2 ${isActive && `bg-violet-600 rounded-xl`}`}>
                                <img
                                    src={link.imgURL} alt={link.label} width={24} height={24} className=" min-w-[24px]  min-h-[24px] "
                                />
                                <p className="text-white text-xs">{link.label}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
