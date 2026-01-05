import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Calendar } from 'lucide-react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '../ui/table'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useChangeStatus } from '@/hooks/use-meetings'

export function StatusBadgeComponent(status: string) {
    switch (status) {
        case "CONFIRMED":
            return (<Badge className='bg-blue-100 text-blue-800 hover:bg-blue-100 text-xl'>
                CONFIRMED
            </Badge>)

        case "COMPLETED":
            return <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xl">
                COMPLETED
            </Badge>;

        default:
            return <Badge>Error in state</Badge>
    }
}

const RecentAppointments = ({ meetings }: any) => {
    console.log(meetings);

    const changeStatusMutation = useChangeStatus();

    function handleToggleAppointmentStatus(meetingId: string, status: string) {
        const statusToUpdateTo = status === "CONFIRMED" ? "COMPLETED" : "CONFIRMED"

        changeStatusMutation.mutate({
            meetingId,
            statusToUpdateTo
        },
            {
                onSuccess: (updatedMeeting) => {
                    console.log("Status Updated for meeting: ", updatedMeeting);
                },
                onError: (error) => {
                    console.log("Error while updating status");
                    console.error(error);
                }
            })

    }


    return (
        <section className=' px-20 py-10'>
            <Card className='w-full '>
                <CardHeader>
                    <CardTitle className='flex gap-3 items-center'>
                        <div className='size-10'>
                            <Calendar className='size-full text-primary' />
                        </div>
                        <h1 className='text-5xl'>Recent Appointments</h1>
                    </CardTitle>
                    <CardDescription className='text-2xl'>
                        Monitor and Manager your Appointments.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='border rounded-lg p-3'>
                        <Table className=''>
                            {/* <TableCaption>Manage your appointments.</TableCaption> */}
                            <TableHeader className='text-2xl border-b'>
                                <TableRow>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Chef</TableHead>
                                    <TableHead>Date & Time</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody >
                                {meetings.map((meetingInfo: any) => {
                                    const meetingDate = new Date(meetingInfo?.date);
                                    return (
                                        <TableRow key={meetingInfo?.id}>
                                            <TableCell>
                                                <h1 className='text-2xl'>{meetingInfo?.client?.FirstName} {meetingInfo?.client?.LastName}</h1>
                                                <p className='text-muted-foreground text-xl'>{meetingInfo?.client?.email}</p>
                                            </TableCell>
                                            <TableCell>
                                                <h1 className='text-2xl'>Chef. {meetingInfo?.chef?.name}</h1>
                                            </TableCell>
                                            <TableCell>
                                                <h1 className='text-2xl'> {meetingDate.toDateString()}</h1>
                                                <p className='text-muted-foreground text-2xl'>{meetingInfo?.time}</p>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleToggleAppointmentStatus(meetingInfo?.id, meetingInfo?.status)}
                                                    className="h-6 px-2"
                                                >
                                                    {StatusBadgeComponent(meetingInfo?.status)}
                                                </Button>
                                            </TableCell>
                                        </TableRow>)
                                })}
                            </TableBody>
                        </Table>

                    </div>

                </CardContent>
            </Card>
        </section>
    )
}

export default RecentAppointments