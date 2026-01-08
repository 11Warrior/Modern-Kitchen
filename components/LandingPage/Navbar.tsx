"use client"
import { SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
    const { user, isLoaded, isSignedIn } = useUser();

    // console.log(user, isLoaded, isSignedIn)
    return (
        <>
            {!isLoaded && <LoadingPage />}
            <nav className='w-full m  h-16 px-7 py-2 flex items-center justify-between bg-background backdrop-blur-md border-border/60'>
                {/* {!isLoaded && (
                <LoadingPage />
            )} */}
                <Link href={'/'} className='flex gap-2 items-center'>
                    <div className='size-8 overflow-hidden rounded-full bg-linear-to-br from-primary/90 to-primary/10 flex items-center justify-center outline-2 outline-primary'>
                        <Image src={'/logo.png'} alt='logo' width={500} height={500} className='size-full' />
                    </div>
                    <h1 className='font-semibold text-1.5xl '> <span className='text-primary'> Modern </span> Kitchen</h1>
                </Link>

                <div className='hidden md:flex items-center gap-9'>
                    <a href="#explore" className='text-muted-foreground hover:text-primary'>
                        How it works
                    </a>
                    <a href="#pricing" className='text-muted-foreground hover:text-primary'>
                        Pricing
                    </a>
                    <a href="#" className='text-muted-foreground hover:text-primary'>
                        About
                    </a>

                    {!isSignedIn ? (
                        <SignUpButton mode="modal">
                            <a className='text-muted-foreground hover:text-primary cursor-pointer'>
                                Dashboard
                            </a>
                        </SignUpButton>
                    ) : (
                        <a href="/admin" className='text-muted-foreground hover:text-primary cursor-pointer'>
                            Dashboard
                        </a>
                    )}

                </div>

                {
                    isSignedIn && isLoaded ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="hidden lg:flex flex-col items-end">
                                    <span className="text-sm font-medium text-foreground">
                                        {user?.firstName} {user?.lastName}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {user?.emailAddresses?.[0]?.emailAddress}
                                    </span>
                                </div>

                                <UserButton />
                            </div>
                        </div>
                    ) :
                        <SignInButton >
                            <Button variant={'default'}>Sign In</Button>
                        </SignInButton>
                }

            </nav >
        </>
    )
}

export const LoadingPage = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Loader */}
            <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-14 h-14 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                <p className="text-sm text-muted-foreground tracking-wide">
                    Loading page…
                </p>
            </div>

        </div>
    )
}


export default Navbar