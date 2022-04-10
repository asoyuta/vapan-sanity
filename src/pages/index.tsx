import type { GetServerSideProps } from 'next'
import Image from 'next/image'
import { sanityClient, urlFor } from '../../sanity'
import { Dialog } from '../../typing'

import logo from '../public/logo.webp'
import { useRouter } from 'next/router'

import { ClockIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'

type Props = {
  dialogs: Dialog[]
}

const Home = ({ dialogs }: Props) => {
  const router = useRouter()

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-gradient-to-tl from-sky-700 to-sky-50">
      {/* logo / h:w = 1 : 4.12 */}
      <div className="relative h-[60px] w-[248px] cursor-pointer sm:h-[40px] sm:w-[165px] lg:h-[200px] lg:w-[824px]">
        <Image src={logo} layout="fill" objectFit="fill" alt="Logo" />
      </div>

      <main>
        <div className="space-y-2">
          {dialogs.map(
            ({ title, _createdAt, mainImage, slug, characters }, i) => (
              <div
                onClick={() => router.push(`/dialog/${slug.current}`)}
                className="flex cursor-pointer space-x-2 rounded-md bg-white p-3 shadow-lg"
                key={i}
              >
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image
                    src={urlFor(mainImage).url()}
                    layout="fill"
                    objectFit="fill"
                    alt="Main Image"
                  />
                </div>
                <div className="space-y-1">
                  <p className="mb-1 text-lg font-medium">{title}</p>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="h-5 w-5" />
                    <p className="text-sm font-light">
                      {_createdAt.split('T')[0]}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserIcon className="h-5 w-5" />
                    {characters.map(({ englishShortName }, i) => (
                      <p key={i} className="text-sm font-light underline">
                        {englishShortName}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
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
      _createdAt,
      title,
      mainImage {
        asset
      },
      description,
      characters[]->{
        englishShortName
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
