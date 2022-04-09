import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components'
import { sanityClient } from '../../sanity'
import { Dialog } from '../../typing'

import logo from '../public/logo.webp'
import { useRouter } from 'next/router'

type Props = {
  dialogs: Dialog[]
}

const Home = ({ dialogs }: Props) => {
  const router = useRouter()

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-tl from-sky-700 to-sky-50">
      {/* 1 : 4.12 */}
      <div className="relative h-[60px] w-[248px] cursor-pointer sm:h-[40px] sm:w-[165px] lg:h-[200px] lg:w-[824px]">
        <Image src={logo} layout="fill" objectFit="fill" />
      </div>

      <main>
        <div className="m-5 space-y-2">
          {dialogs.map(({ title, slug }, i) => (
            <div
              onClick={() => router.push(`/dialog/${slug.current}`)}
              className="cursor-pointer rounded-md bg-white p-5 shadow-lg"
              key={i}
            >
              <h1 className="font-medium ">{title}</h1>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
    *[_type == "dialog"]{
      _id,
      title,
      characters[]->{
        image {
          asset
        }
      },
      slug {
        current
      }
    }
  `

  const dialogs = await sanityClient.fetch(query)

  return {
    props: {
      dialogs,
    },
  }
}
