import Navbar from '@/components/Navbar/Navbar'
import { PricingTable } from '@clerk/nextjs';
import { CrownIcon } from 'lucide-react';

const Pro = async () => {
  return (
    <>
      <Navbar />
      <section className='min-h-screen px-20 pt-10 '>
        <div className='w-full h-[30vh] bg-linear-to-br from-primary/80 to-primary/10   rounded-lg p-7'>

          <div className='h-full  flex justify-between'>

            <div className='  flex flex-col space-y-5'>
              <div className='w-[9vw] h-[3vh] bg-background rounded-full flex gap-3 items-center px-4'>
                <div className='w-2 h-2 rounded-full bg-accent-foreground animate-pulse'></div>
                <p>Upgrade to pro</p>
              </div>
              <div className='space-y-2 text-white'>
                <h1 className='text-6xl' >Unlock Premium AI Chef Support.</h1>

                <p className='text-4xl text-background/50'>Get unlimited AI meetings, advanced features, and priority support to take your cooking to the next level.</p>
              </div>
            </div>

            <div className=' right flex items-center justify-end'>
              <div className=' size-46 p-8 rounded-full bg-primary/30 flex items-center justify-center border border-black'>
                <CrownIcon size={"100%"}  color='#7033ff' />
              </div>
            </div>

          </div>
        </div>

        <div>
          <div className='flex items-center justify-center '>
            <div className='flex flex-col space-y-1 items-center justify-center pt-10'>
              <h1 className='text-7xl'>Choose Your Plan</h1>
              <p className='text-center text-3xl text-muted-foreground/40'>Select your plan for cooking assistance preferences. All plans include  <br /> secure acess and bank-level encryption.</p>
            </div>
          </div>

          <div className='mt-20'>
            <PricingTable  appearance={{ variables: { colorBackground: 'white' } }} newSubscriptionRedirectUrl='/admin/pro'  />
          </div>
        </div>

      </section>
    </>
  )
}

export default Pro