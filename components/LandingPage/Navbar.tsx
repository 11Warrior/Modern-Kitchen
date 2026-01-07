"use client"
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { currentUser } from '@clerk/nextjs/server'

const Navbar = () => {
    const { user, isLoaded, isSignedIn } = useUser();
    // console.log(user, isLoaded, isSignedIn)
    return (
        <nav className='w-full m  h-16 px-7 py-2 flex items-center justify-between bg-background backdrop-blur-md border-border/60'>
            <Link href={'/'} className='flex gap-2 items-center'>
                <div className='size-8 overflow-hidden rounded-full bg-linear-to-br from-primary/90 to-primary/10 flex items-center justify-center outline-2 outline-primary'>
                    <Image src={'/logo.png'} alt='logo' width={500} height={500} className='size-full' />
                </div>
                <h1 className='font-semibold text-1.5xl'>Modern Kitchen</h1>
            </Link>

            <div className='hidden md:flex items-center gap-9'>
                <a href="#explore" className='text-muted-foreground hover:text-muted'>
                    How it works
                </a>
                <a href="#pricing" className='text-muted-foreground hover:text-muted'>
                    Pricing
                </a>
                <a href="#" className='text-muted-foreground hover:text-muted'>
                    About
                </a>
            </div>

            {isSignedIn && isLoaded ? (
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

        </nav>
    )
}

export default Navbar