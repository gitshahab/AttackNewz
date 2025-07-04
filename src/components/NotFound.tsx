import Link from 'next/link'

type Prop = {
  msgText: string
}

const NotFound = ({msgText}: Prop) => {
  return (
    <div className='flex items-center justify-center min-h-screen max-w-7xl mx-auto text-center flex-col'>
        <h3 className='font-mono text-2xl text-gold'>{msgText}</h3>
        <Link href="/" className="text-sm font-mono hover:underline hover:text-gold my-6 inline-block">
        ← Back to Home
        </Link>
    </div>
  )
}

export default NotFound