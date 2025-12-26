import Navbar from '@/components/Navbar/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CrownIcon, Lock, LockIcon, MicIcon } from 'lucide-react'
import Link from 'next/link'

const FeatureLocked = () => {
    return (
        <>
            <Navbar />
            <div className='px-20 pt-10'>
                <div className='w-full h-[30vh] bg-linear-to-br from-primary/80 to-primary/10 rounded-lg p-7'>
                    <div className='h-full  flex justify-between'>
                        <div className='  flex flex-col space-y-5'>
                            <div className='w-[10vw] h-[3vh] bg-primary rounded-full flex gap-3 items-center p-5'>
                                <Lock color='black' />
                                <p className='text-black'>Locked Feature</p>
                            </div>
                            <div className='space-y-2 text-white'>
                                <h1 className='text-6xl' >Upgrade Your Plan To Acess AI Voice Assistance</h1>
                                <p className='text-4xl text-background/50'>Upgrade to AI Basic or AI Pro to unlock unlimited voice consultations with our AI Chef Assistant.</p>
                            </div>
                        </div>

                        <div className=' right flex items-center justify-end'>
                            <div className=' size-46 p-8 rounded-full  flex items-center bg-primary/40  justify-center border border-black'>
                                <MicIcon size={"100%"} color='#6033ff' />
                            </div>
                        </div>

                    </div>
                </div>

                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 max-w-2xl mx-auto mt-10">
                    <CardContent className="relative p-8 text-center">
                        <div className="w-20 h-20 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <LockIcon className="w-10 h-10 text-primary" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Upgrade Required</h3>
                        <p className="text-muted-foreground mb-6">
                            The voice assistant feature is available to AI Pro and AI Basic subscribers. Get
                            instant dental advice through natural voice conversations.
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3 justify-center">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">24/7 voice consultations</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">Professional dental guidance</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">Instant pain relief advice</span>
                            </div>
                        </div>

                        <Link href="/admin/pro">
                            <Button className="w-full bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <CrownIcon className="mr-2 h-5 w-5" />
                                Upgrade to Pro
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>

        </>

    )
}

export default FeatureLocked