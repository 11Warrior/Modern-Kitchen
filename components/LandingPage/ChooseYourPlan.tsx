"use client"

import { SignIn, SignUpButton, useUser } from '@clerk/nextjs'
import { CheckCircleIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const ChooseYourPlan = () => {
    const { isSignedIn } = useUser();

    return (
        <section className='w-full px-20 py-10 horizontal-section overflow-hidden' id='pricing'>
            <div className='space-y-30'>
                <div className='text-center leading-30'>
                    <h1 className='text-[8vw] text-primary'>
                        Choose Your Plan
                    </h1>
                    <p className='text-[2vw] text-muted-foreground px-60 leading-10'>Book appointments for free. Upgrade to get ModernKitchen AI assistant to guide you in your cookings.</p>
                </div>

                <div className='grid  lg:grid-cols-3 max-w-7xl gap-10 mx-auto'>

                    <div className="relative group">
                        <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">Free</h3>
                                    <div className="flex items-end gap-1">
                                        <span className="text-4xl font-bold">$0</span>
                                        <span className="text-muted-foreground mb-1">/month</span>
                                    </div>
                                    <p className="text-muted-foreground">Essential dental appointment booking</p>
                                </div>
                                {!isSignedIn ? (
                                    <SignUpButton mode="modal">
                                        <Button className="w-full mb-8 py-3 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
                                            Get Started Free
                                        </Button>
                                    </SignUpButton>
                                ) : (
                                    <Link href={'/admin/pro'}>
                                        <Button className="w-full py-3 mb-8 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
                                            Get Started Free
                                        </Button>
                                    </Link>
                                )}

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Unlimited appointment booking</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Find Chefs in your area</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Basic text chat support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Appointment reminders</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative group bg-fuchsia-400/5 w-full h-full -top-15 rounded-lg outline-2 outline-primary'>
                        <h1 className='absolute -top-7 left-[50%] transform  -translate-x-[50%] rounded-full bg-primary text-black px-3 py-1 text-xl z-10'>
                            Most Popular
                        </h1>
                        <div className='relative bg-lienar-to-br from-card/95 to-card/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20 scale-105 space-y-6 '>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold">AI Basic</h3>
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-bold">$9</span>
                                    <span className="text-muted-foreground mb-1">/month</span>
                                </div>
                                <p className="text-muted-foreground">AI assitance + Booking </p>
                            </div>

                            {!isSignedIn ? (
                                <SignUpButton mode="modal">
                                    <Button className="w-full mb-8 py-3 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
                                        Upgrade to AI Basic
                                    </Button>
                                </SignUpButton>
                            ) : (
                                <Link href={'/admin/pro'}>
                                    <Button className="w-full py-3 mb-8 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
                                        Upgrade to AI Basic
                                    </Button>
                                </Link>
                            )}

                            <div className='space-y-4'>
                                <div className='flex gap-3 items-start'>
                                    <CheckCircleIcon className='size-5 text-primary mt-0.5 shrink-0' />
                                    <span className='text-sm'>Everything in free.</span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                    <span className="text-sm">10 AI voice calls per month</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                    <span className="text-sm">AI cooking guidance & advice</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                    <span className="text-sm">Personalized guidance</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                    <span className="text-sm">Priority support</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                    <span className="text-sm">Call history & recordings</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="relative group">
                        <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">AI Pro</h3>
                                    <div className="flex items-end gap-1">
                                        <span className="text-4xl font-bold">$19</span>
                                        <span className="text-muted-foreground mb-1">/month</span>
                                    </div>
                                    <p className="text-muted-foreground">Unlimited AI consultations.</p>
                                </div>

                                {!isSignedIn ? (
                                    <SignUpButton mode="modal">
                                        <Button className="w-full mb-8 py-3 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
                                            Upgrade to AI Pro
                                        </Button>
                                    </SignUpButton>
                                ) : (
                                    <Link href={'/admin/pro'}>
                                        <Button className="w-full py-3 mb-8 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
                                            Upgrade to AI Pro
                                        </Button>
                                    </Link>
                                )}

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Everything in AI Basic</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Unlimited AI voice calls</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Advanced AI cooking analysis</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Personalized plans with variety of features</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">24/7 priority AI support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Meeting management platform</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ChooseYourPlan