import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Topbar (){

    // const router = useRouter();

    // const handleSignOut =()=>{
    //     router.push("/sign-in")
    // }

    return(
        <nav className="bg-[#121417] z-30 flex w-full justify-between items-center py-5 md:px-11 px-4 absolute">
            <Link href="/">
                <p className="text-white text-xl sm:text-3xl md:mx-11"> Chatter</p>
            </Link>
            <div>
                <div className="block cursor-pointer md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div >
                                <img src="assets/logout.svg" alt="logout" width={24} height={24} />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}