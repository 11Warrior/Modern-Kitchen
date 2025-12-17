import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Calendar, Clock, User, User2, UserCheck, Users, UserStarIcon } from 'lucide-react'

interface statusProps {
  totalChefs: number,
  activeChefs: number
  totalMeetings: number
  completedMeetings: number
}


const AdminStatus = ({
  totalChefs,
  activeChefs,
  totalMeetings,
  completedMeetings
}: statusProps) => {
  return (
    <section className='status'>
      <div className='w-full h-[30vh]  flex items-center justify-between gap-10'>
        <Card className='w-full h-full bg-zinc-800 rounded-4xl hover:border-primary border-primary/20'>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="size-30 bg-linear-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                <Users  className='size-15'/>
              </div>
              <div>
                <div className="text-5xl font-bold">{totalChefs}</div>
                <div className="text-lg text-muted-foreground">Total Chefs</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='w-full h-full bg-zinc-800 rounded-4xl hover:border-primary border-primary/20'>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="size-30 bg-linear-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                <UserCheck className="size-15" />
              </div>
              <div>
                <div className="text-5xl font-bold">{activeChefs}</div>
                <div className="text-lg text-muted-foreground">Active Chefs</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='w-full h-full bg-zinc-800 rounded-4xl hover:border-primary border-primary/20'>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="size-30 bg-linear-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                <Calendar className="size-15" />
              </div>
              <div>
                <div className="text-5xl font-bold">{totalMeetings}</div>
                <div className="text-lg text-muted-foreground">Total Meetings</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='w-full h-full bg-zinc-800 rounded-4xl hover:border-primary border-primary/20'>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="size-30 bg-linear-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="size-15" />
              </div>
              <div>
                <div className="text-5xl font-bold">{completedMeetings}</div>
                <div className="text-lg text-muted-foreground">Completed Meetings</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </section>
  )
}

export default AdminStatus