"use client"
import React from 'react'
import { useGetAvailableChefs } from '@/hooks/use-meetings'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { MapPinIcon, PhoneIcon, StarIcon } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { setChef, setCurrentStep } from '@/redux/features/BookChefs/BookChefsSlice'

type PropTypes = {
    dispatch: Function,
    currStep: number,
    chefId: string
}


const SelectChef = ({ dispatch, currStep, chefId }: PropTypes) => {
    const { data, isLoading } = useGetAvailableChefs();

    return (
        <section className='space-y-10'>
            <h1 className='text-4xl'>Choose Your Chef</h1>
            <div className='w-fit  grid grid-cols-1 md:grid-cols-2 mb-8 gap-10 '>
                {data?.map((chef) => (
                    <Card key={chef.id} className={`px-3 py-6 ${chef.id === chefId && 'outline-2 outline-primary'}`} onClick={() => dispatch(setChef(chef.id))}>
                        <CardHeader className='flex gap-4'>
                            <div className='size-24 rounded-full  outline-2 outline-primary flex items-center justify-center overflow-hidden'>
                                {
                                    chef.profileImage && (
                                        <img src={chef.profileImage} alt='' className='w-full h-full object-cover' loading='lazy' />
                                    )
                                }
                            </div>
                            <div>
                                <CardTitle className='text-3xl'>Chef. {chef.name}</CardTitle>
                                <CardDescription>
                                    <h1 className='text-xl text-primary'>{chef.speciality}</h1>

                                    <div className="flex items-center gap-2 mt-2 text-lg">

                                        <div className="flex items-center gap-1">
                                            <StarIcon className="w-5 h-5 fill-amber-400 text-amber-400" />
                                            <span className="font-medium">5</span>
                                        </div>
                                        <span className="text-muted-foreground">
                                            ({chef.meetingCount} appointments)
                                        </span>
                                    </div>
                                </CardDescription>
                            </div>

                        </CardHeader>

                        <CardContent className='space-y-5 text-2xl'>
                            <div className="flex items-center gap-2  text-muted-foreground">
                                <MapPinIcon className="w-7 h-7" />
                                <span>Modern Kitchen</span>
                            </div>
                            <div className="flex items-center gap-2  text-muted-foreground">
                                <PhoneIcon className="w-7 h-7" />
                                <span>{chef.phone}</span>
                            </div>
                            <p className=" text-muted-foreground">
                                {chef.bio || "Experienced chefs providing professional guidance for any cullinary you want to prepare."}
                            </p>
                            <Badge variant="outline" className='py-1 px-3 text-xl text-primary'>Licensed Professional</Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {!isLoading &&
                (
                    <div className=' flex justify-end '>
                        <Button className='text-3xl px-5 py-6 text-black' onClick={() => dispatch(setCurrentStep(currStep + 1))} disabled={chefId === ""} >
                            Proceed to Date & Time Selection
                        </Button>
                    </div>
                )}

        </section >
    )
}

export default SelectChef