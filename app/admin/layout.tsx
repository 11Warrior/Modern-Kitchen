import Navbar from "@/components/Navbar/Navbar";

export default function AdminLayout({children}: Readonly<{children : React.ReactNode}>) {
    return (
    <>
        <Navbar />
        <main className="admin-children">
            {children}
        </main>
    </>
    )
}