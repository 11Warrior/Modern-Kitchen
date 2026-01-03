"use client"

import React, { Key, useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { ChefHatIcon, Edit, MailIcon, Phone, PlusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useAddChefs, useGetChefs, useUpdateChefs } from '@/hooks/use-chefs'
import { Chef, Gender } from '@prisma/client'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'

export type MeetingTypeWithCount = Chef & {
    meetingCount: number
}

const ChefManagementPanel = () => {
    const { data: chefs = [] } = useGetChefs();

    const addChefMutation = useAddChefs();
    const updateChefMutation = useUpdateChefs();

    const [values, setValue] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "MALE" as Gender,
        speciality: "",
        isActive: true
    });

    const handleAdd = () => {
        addChefMutation.mutate(values);
        // console.log(addChefMutation);
        // console.log(values);
        setValue({
            name: "",
            email: "",
            phone: "",
            gender: Gender.MALE,
            speciality: "",
            isActive: true
        })
    }

    const handleUpdate = () => {
        updateChefMutation.mutate(values);
        // console.log(updateChefMutation);
        // console.log(values);

        setValue({
            name: "",
            email: "",
            phone: "",
            gender: Gender.MALE,
            speciality: "",
            isActive: true
        })
    }

    return (
        <section className='w-full h-full rounded-4xl bg-zinc-700 p-1'>
            <Card>
                <CardHeader className='w-full h-[20vh] px-3 py-10'>
                    <CardContent className='flex justify-between'>
                        <div className='space-y-1'>
                            <div className='flex gap-2 justify-center items-center'>
                                <ChefHatIcon className='size-15' />
                                <h1 className='text-[2vw]'>Chef Management</h1>
                            </div>
                            <div>
                                <h2 className='text-2xl text-muted-foreground '>Mange all your chefs in one interface.</h2>
                            </div>

                        </div>
                        {/** Adding chef */}
                        <div className='flex items-center justify-center'>
                            <Dialog>
                                <form>
                                    <DialogTrigger asChild>
                                        <Button className='p-5'>
                                            <span><PlusIcon /></span>
                                            Add Chef
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Add Chef</DialogTitle>
                                            <DialogDescription>
                                                Add proper details for adding chefs.
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="grid gap-4">
                                            <div className="grid gap-4 grid-cols-2">
                                                <Label htmlFor="name-1">Name</Label>
                                                <Input id="name-1" name="name" placeholder="John Doe" value={values.name} onChange={(e) => setValue({ ...values, name: e.target.value })} />

                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" name="email" placeholder='jdoe@gmail.com' value={values.email} onChange={(e) => setValue({ ...values, email: e.target.value })} />
                                            </div>

                                            <div className='grid grid-cols-2 gap-2'>
                                                <div className='flex gap-4 w-[9vw]'>
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <Input id="name-1" name="phone" type='text' className='no-spinner' maxLength={10} value={values.phone} onChange={(e) => setValue({ ...values, phone: e.target.value })} />
                                                </div>
                                                <div className='flex gap-4'>
                                                    <Label htmlFor="name-1">Gender</Label>
                                                    <Select value={values.gender} onValueChange={(value) => setValue({ ...values, gender: value as Gender })}>
                                                        <SelectTrigger className=''>
                                                            <SelectValue placeholder="Enter the gender" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>Gender</SelectLabel>
                                                                <SelectItem value="MALE">MALE</SelectItem>
                                                                <SelectItem value="FEMALE">FEMALE</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="grid gap-4 grid-cols-2">
                                                    <div className='flex gap-4 w-[9vw]'>
                                                        <Label htmlFor="spec">Speciality</Label>
                                                        <Input id="spec" name="spec" placeholder="Continental" value={values.speciality} onChange={(e) => setValue({ ...values, speciality: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div className='grid gap-4 grid-cols-2'>
                                                    <div className='flex gap-4'>
                                                        <Label htmlFor="name-1">Active/Inactive</Label>
                                                        <Select value={values.isActive ? "active" : "inactive"} onValueChange={(value) => setValue({ ...values, isActive: value === "active" ? true : false })}>
                                                            <SelectTrigger className=''>
                                                                <SelectValue placeholder="Active/Inactive" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectGroup>
                                                                    <SelectLabel>Active</SelectLabel>
                                                                    <SelectItem value='active'>Active</SelectItem>
                                                                    <SelectItem value='inactive'>Inactive</SelectItem>
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button disabled={values.name === "" && values.email === "" && values.phone === ""} onClick={() => handleAdd()}>Add</Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </form>
                            </Dialog>
                        </div>
                    </CardContent>
                </ CardHeader>

                {/* <hr className='decoration-1' /> */}
                {chefs.map((chef: Chef, key: Key) => (
                    <div className='flex justify-between py-5 px-10 bg-zinc-700/30 ' key={key}>
                        <div className='flex gap-5 '>
                            <img src={chef.profileImage} alt='chef1-image' className='rounded-full' width={100} height={100} loading='lazy' />
                            <div className='space-y-2'>
                                <h1 className='text-[1vw]'>Chef. {chef.name}</h1>
                                <div className='flex gap-2 text-muted-foreground'>
                                    <h2>{chef.speciality}</h2>
                                    <div className='rounded-lg bg-[#372F4B] px-2'>
                                        <p>{chef.gender}</p>
                                    </div>
                                </div>
                                <div className='flex gap-3 text-muted-foreground'>
                                    <div className='flex gap-2 items-center justify-center'>
                                        <MailIcon size={15} /> <h2>{chef.email}</h2>
                                    </div>

                                    <div className='flex gap-2 items-center justify-center'>
                                        <Phone size={15} /> <h2>{chef.phone}</h2>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='flex gap-5 items-center justify-center'>
                            <div className='flex flex-col justify-center'>
                                {/**{chef.meetingCount} to be fixed later */}
                                <h1 className='text-center text-2xl'>{chef.meetingCount}</h1>
                                <h1 className='text-2xl text-muted-foreground'>Meetings</h1>
                            </div>

                            <div>
                                <h1 className='rounded-lg bg-emerald-500 px-2 py-1 ' >{chef.isActive === true ? "Active" : "Inactive"}</h1>
                            </div>

                            {/** Updating chef */}

                            <div className='flex gap-5 items-center justify-center '>
                                <Dialog>
                                    <form>
                                        <DialogTrigger asChild>
                                            <Button className='p-5 flex items-center justify-center gap-2' variant={'outline'}>
                                                <Edit className='size-5' />
                                                <h1 className='text-xl'>Edit</h1>
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Update Chef</DialogTitle>
                                                <DialogDescription>
                                                    Update your chef here. <br /> Put the email of the chef whoose detail you want to change.
                                                </DialogDescription>
                                            </DialogHeader>

                                            <div className="grid gap-4">
                                                <div className="grid gap-4 grid-cols-2">
                                                    <Label htmlFor="name-1">Name</Label>
                                                    <Input id="name-1" name="name" placeholder="John Doe" value={values.name} onChange={(e) => setValue({ ...values, name: e.target.value })} />

                                                    <Label htmlFor="email">Email</Label>
                                                    <Input id="email" name="email" placeholder="johndoe@gmail.com" value={values.email} onChange={(e) => setValue({ ...values, email: e.target.value })} />
                                                </div>

                                                <div className='grid grid-cols-2 gap-2'>
                                                    <div className='flex gap-4 w-[9vw]'>
                                                        <Label htmlFor="phone">Phone</Label>
                                                        <Input id="name-1" name="phone" type='text' className='no-spinner' maxLength={10} value={values.phone} onChange={(e) => setValue({ ...values, phone: e.target.value })} />
                                                    </div>
                                                    <div className='flex gap-4'>
                                                        <Label htmlFor="name-1">Gender</Label>
                                                        <Select value={values.gender} onValueChange={(value) => setValue({ ...values, gender: value as Gender })}>
                                                            <SelectTrigger className=''>
                                                                <SelectValue placeholder="Enter the gender" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectGroup>
                                                                    <SelectLabel>Gender</SelectLabel>
                                                                    <SelectItem value="MALE">MALE</SelectItem>
                                                                    <SelectItem value="FEMALE">FEMALE</SelectItem>
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>

                                                    <div className="grid gap-4 grid-cols-2">
                                                        <div className='flex gap-4 w-[9vw]'>
                                                            <Label htmlFor="spec">Speciality</Label>
                                                            <Input id="spec" name="spec" placeholder="Continental" value={values.speciality} onChange={(e) => setValue({ ...values, speciality: e.target.value })} />
                                                        </div>
                                                    </div>

                                                    <div className='grid gap-4 grid-cols-2'>
                                                        <div className='flex gap-4'>
                                                            <Label htmlFor="name-1">Active/Inactive</Label>
                                                            <Select value={values.isActive ? "active" : "inactive"} onValueChange={(value) => setValue({ ...values, isActive: value === "active" ? true : false })}>
                                                                <SelectTrigger className=''>
                                                                    <SelectValue placeholder="Active/Inactive" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Active</SelectLabel>
                                                                        <SelectItem value='active'>Active</SelectItem>
                                                                        <SelectItem value='inactive'>Inactive</SelectItem>
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button disabled={values.name === "" && values.email === "" && values.phone === ""} onClick={() => handleUpdate()}>
                                                        Update
                                                    </Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </form>
                                </Dialog>

                            </div>

                        </div>
                    </div>
                ))}

            </Card>

            {/* <AddChefDialogueBox /> */}
        </section>
    )
}

export default ChefManagementPanel