"use client"

import { sidebarLinks } from "@/constants";
import { SignedIn } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LeftSidebar() {

    const pathname = usePathname();
    const router = useRouter()

    const handleSignOut = () => {
        router.push("/sign-in")
    }

    return (
        <section className="h-screen bg-[#121417] flex flex-col justify-between max-md:hidden">
            <div className="mt-[150px]">
                {sidebarLinks.map((link) => {

                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route

                    return (
                        <div className=" px-[20px] lg:px-[30px] xl:px-[50px]">
                            <Link href={link.route} key={link.label} className={` flex items-center gap-5 px-5 py-5 my-3 ${isActive && `bg-violet-600 rounded-xl`}`} >
                                <img
                                    src={link.imgURL} alt={link.label} width={24} height={24} className="min-w-[24px] min-h-[24px]"
                                />
                                <p className="text-white max-lg:hidden max">{link.label}</p>
                            </Link>
                        </div>
                    )
                }
                )}
            </div>
            <div className="">
                <SignedIn>
                    <SignOutButton>
                        <div className="flex items-center justify-center gap-5 max-md:hidden mb-11 xl:mr-9 lg:mr-3" onClick={handleSignOut}>
                            <img src="assets/logout.svg" alt="logout" width={24} height={24} className="cursor-pointer" onClick={handleSignOut}/>
                            <p className="text-white cursor-pointer max-lg:hidden" >Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    )
}
