"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { vapi } from '@/lib/vapi'
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const CallWidget = () => {
    const [callStarted, setCallStarted] = useState(false);

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [connecting, setConnecting] = useState(false);


    const messageContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages])

    const { user, isLoaded } = useUser();
    // console.log(user)

    useEffect(() => {
        function handleCallStart() {
            // console.log("Vapi Call Started");
            setCallStarted(true);
            setConnecting(false);
        }

        function handleCallEnd() {
            // console.log("Vapi Call Ended");
            setCallStarted(false);
            setConnecting(false);
            setIsSpeaking(false);
        }

        function handleSpeechStarted() {
            // console.log("Vapi Speech Started");
            setIsSpeaking(true)
        }

        function handleSpeechEnd() {
            // console.log("Vapi Speech Ended");
            setIsSpeaking(false)
        }

        function handleError() {
            // console.log("Vapi Error Received");
        }

        function handleConnecting() {
            // console.log("Connecting...");
            setConnecting(true);
            setIsSpeaking(false);
            setCallStarted(false);
        }

        function handleMessage(payload: any) {
            if (payload.type === "transcript" && payload.transcriptType === "final") {
                const newMessage = { content: payload.transcript, role: payload.role };
                setMessages((prev) => [...prev, newMessage]);
            }
            // console.log("Vapi Message Received:", payload);
        }

        vapi.on("call-start", handleCallStart)
            .on("message", handleMessage)
            .on("call-start-progress", handleConnecting)
            .on("call-end", handleCallEnd)
            .on("speech-start", handleSpeechStarted)
            .on("speech-end", handleSpeechEnd)
            .on("error", handleError)

        return () => {
            vapi.off("call-start", handleCallStart);
            vapi.off("call-start-progress", handleConnecting);
            vapi.off("call-end", handleCallEnd);
            vapi.off("speech-start", handleSpeechStarted);
            vapi.off("speech-end", handleSpeechEnd);
            vapi.off("error", handleError);
        }

    }, [])

    async function toggleCall() {
        if (callStarted) await vapi.stop();
        else {
            try {
                setMessages([]);
                vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!);
                setConnecting(false);
            } catch (error) {
                console.error("Error starting the call:", error);
            }
        }
    }

    return (
        <div className=' max-w-full h-full'>
            <h1 className='text-center text-5xl'>Talk to Your <span className='text-primary'> AI CHEF ASSISTANT</span></h1>
            <p className='text-center text-muted-foreground text-3xl'>Have voice conversation with our AI Chef Assistant for cooking tips and guidance.</p>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 mb-8 gap-2 h-[50vh]  justify-items-center mt-7'>

                <Card className='w-[90%]  justify-center items-center'>
                    <div className='size-50 rounded-full bg-linear-to-br from-primary/90 to-primary/10 flex items-center justify-center p-1 outline-2 outline-primary'>
                        <Image src={'/logo.png'} alt='logo' width={200} height={200} />
                    </div>

                    <div className='space-y-2 '>
                        <h1 className='text-4xl'>Modern Kitchen AI</h1>

                        <div className='flex items-center justify-center'>
                            <div className='flex gap-2 bg-background/30 outline-2 outline-amber-100 rounded-3xl  px-7  items-center w-fit '>
                                <div className={`size-2 rounded-full   ${callStarted ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground'}`} />
                                <p>{!callStarted ? "Waiting..." : isSpeaking ? "Speaking..." : "Listening..."}</p>
                            </div>
                        </div>
                    </div>

                </Card>

                <Card className='w-[90%]  justify-center items-center'>
                    <div className='size-50 rounded-full bg-linear-to-br from-primary/90 to-primary/10 flex items-center justify-center  outline-2 outline-primary overflow-hidden'>
                        {isLoaded && (
                            <Image src={user?.imageUrl} alt='logo' width={100} height={100} className='w-full h-full object-contain' />
                        )}
                    </div>

                    <div className='space-y-2 '>
                        <h1 className='text-4xl text-center'>You</h1>

                        <div className='flex items-center justify-center'>
                            <div className='flex gap-2 bg-background/30 outline-2 outline-amber-100 rounded-3xl  px-5  items-center  w-fit '>
                                <div className={`size-2 rounded-full   ${callStarted ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground'}`} />
                                <p>{!callStarted
                                    ? 'Ready...'
                                    : isSpeaking ?
                                        "Listening..."
                                        : "Speaking..."}
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className='messages w-full flex items-center justify-center'>
                {messages.length !== 0 && (
                    <div
                        ref={messageContainerRef}
                        className="w-full bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 mb-8 h-64 overflow-y-auto transition-all duration-300 scroll-smooth"
                    >
                        <div className="space-y-3">
                            {messages.map((msg, index) => (
                                <div key={index} className="message-item animate-in fade-in duration-300">
                                    <div className="font-semibold text-xs text-muted-foreground mb-1">
                                        {msg.role === "assistant" ? "ModernKitchen AI" : "You"}:
                                    </div>
                                    <p className="text-foreground">{msg.content}</p>
                                </div>
                            ))}

                            {!callStarted && (
                                <div className="message-item animate-in fade-in duration-300">
                                    <div className="font-semibold text-xs text-primary mb-1">System:</div>
                                    <p className="text-foreground">Call ended. Thank you for using DentWise AI!</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

            </div>

            <div className='w-full flex justify-center items-center'>
                <Button className={`w-[10vw] text-2xl p-1 ${callStarted && ' hover:bg-red-500/80'}`} disabled={connecting} onClick={() => toggleCall()}> {
                    connecting
                        ? "Connecting..."
                        : callStarted
                            ? "End Call"
                            : "Start Call"
                }
                </Button>
            </div>

        </div>
    )
}

export default CallWidget