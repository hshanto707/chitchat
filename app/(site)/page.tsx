import Image from 'next/image'
import AuthForm from './components/AuthForm'
import Logo from '@/public/assets/images/Logo'
import LogoFull from '@/public/assets/images/LogoFull'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg: px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LogoFull />
        {/* <Image src="/assets/images/logo.png" height="48" width="48" alt='logo' className='mx-auto' /> */}
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-600">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  )
}
