import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "../components/shared/Topbar";
import LeftSidebar from "../components/shared/LeftSidebar";
import BottomSidebar from "../components/shared/Bottombar";
import RightSidebar from "../components/shared/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Chatter",
    description: "Simple chatting app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Topbar/>

                    <main className="flex">
                        <LeftSidebar/>

                        <section className="flex min-h-screen flex-1 flex-col items-center bg-[#000000] px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
                            <div>
                                {children}
                            </div>
                        </section>

                        <RightSidebar/>
                    </main>

                    <BottomSidebar/>
                </body>
            </html>
        </ClerkProvider>
    );
}
