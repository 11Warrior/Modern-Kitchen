import { SignInButton, SignOutButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
    return (
        <nav className='w-full m  h-16 px-7 py-2 flex items-center justify-between bg-background/90 backdrop-blur-md border-border/60'>
            <Link href={'/'} className='flex gap-2 items-center'>
                <Image width={60} height={50} src={'/logo.png'} alt='' className='object-cover' />
                <h1 className='font-semibold text-1.5xl'>Modern Kitchen</h1>
            </Link>

            <div className='hidden md:flex items-center gap-9'>
                <a href="#" className='text-muted-foreground hover:text-muted'>
                    How it works
                </a>
                <a href="#" className='text-muted-foreground hover:text-muted'>
                    Pricing
                </a>
                <a href="#" className='text-muted-foreground hover:text-muted'>
                    About
                </a>
            </div>

            <div className='flex gap-1'>
                <SignInButton mode='modal'>
                    <Button ><span className='text-[0.8vw] '>Sign In</span></Button>
                </SignInButton>
                <SignOutButton >
                    <Button variant="outline"><span className='text-[0.8vw] '>Sign Out</span></Button>
                </SignOutButton>

            </div>
        </nav>
    )
}

export default Navbar