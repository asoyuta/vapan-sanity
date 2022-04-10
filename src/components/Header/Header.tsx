import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '../../public/logo.webp'

function Header() {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between bg-white px-3 py-3 shadow-md sm:px-5 sm:py-5 lg:px-10">
      {/* 1 : 4.12 */}
      <div
        onClick={() => router.push('/')}
        className="relative h-[30px] w-[124px] cursor-pointer sm:h-[40px] sm:w-[165px] lg:h-[50px] lg:w-[206px]"
      >
        <Image src={logo} layout="fill" objectFit="fill" alt="Logo" />
      </div>
    </header>
  )
}

export default Header
