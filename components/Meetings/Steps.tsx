import { ChevronRightIcon } from 'lucide-react'
import React from 'react'

const Steps = ({ currStep }: { currStep: number }) => {
    return (
        <div className='flex items-center gap-4 mb-4'>
            {["Select Chef", "Choose Date & Time", "Confirm"].map((step, index) => (
                <div key={index} className='flex items-center gap-4 mb-4'>
                    <div className={`size-10  rounded-full flex items-center justify-center ${index + 1 <= currStep ? 'bg-primary' : 'bg-muted'}`}>
                        {index + 1}
                    </div>
                    <p className={`text-muted-foreground ${index + 1 <= currStep && 'text-white'}`}>{step}</p>
                    <ChevronRightIcon className={`text-muted-foreground ${index + 1 <= currStep && 'text-white'}`} />
                </div>
            ))}

        </div>
    )
}

export default Steps