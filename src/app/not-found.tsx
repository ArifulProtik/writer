import MainHeader from '@/components/main/main-header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Writer',
  description: 'Page Not Found',
}

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <MainHeader />
        <div className="flex-1">
          <div className="flex flex-col items-center justify-center h-96">
            <h2 className='text-xl font-serif uppercase text-muted-foreground'>Page Not Found</h2>
            <h1 className='text-8xl font-bold text-muted-foreground font-serif'>404</h1>
            <h3 className='text-xl font-serif text-muted-foreground mt-6 mx-auto w-4/5 text-center'><span className='italic'>“In the beginning, there was nothing, which exploded.” </span> – Terry Pratchett</h3>
            <Link href='/' className='mt-12'>
              <Button variant={"default"}>Go Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
