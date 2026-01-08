import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function  AdminLayout({children}: Readonly<{children : React.ReactNode}>) {
    const {userId} = await auth();
    if (!userId) {
        redirect('/')
    }

    return (
    <>
        <Navbar />
        <main className="admin-children">
            {children}
        </main>
    </>
    )
}