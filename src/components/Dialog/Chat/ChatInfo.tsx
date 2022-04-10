import Image from 'next/image'
import { urlFor } from '../../../../sanity'
import { useAppSelector } from '../../../redux/app/hooks'
import { selectDialog, selectShowInfo } from '../../../redux/Dialog/dialogSlice'
import { ExternalLinkIcon } from '@heroicons/react/outline'

function ChatInfo() {
  const showInfo = useAppSelector(selectShowInfo)
  const dialog = useAppSelector(selectDialog)

  const { mainImage, title, description, originalUrl, clipUrl, characters } =
    dialog

  return (
    <div
      className={`absolute top-14 right-2 z-20 flex max-h-[calc(100vh-112px)] w-[calc(100%-16px)] max-w-sm flex-col overflow-scroll rounded-md bg-gray-50 p-3 text-black shadow-2xl scrollbar-hide sm:top-16 sm:right-4 sm:max-h-[calc(100vh-128px)] lg:max-h-[calc(90vh-176px)] ${
        !showInfo && 'hidden'
      }`}
    >
      <div className="flex justify-center">
        <div className="relative h-[360px] w-[360px] rounded-md">
          <Image
            className="rounded-md"
            src={urlFor(mainImage).url()}
            layout="fill"
            objectFit="contain"
            alt="Main Image"
          />
        </div>
      </div>

      <p className="my-1 text-xl font-medium sm:text-2xl">{title}</p>

      <p className="my-2 sm:text-lg">{description}</p>

      {(originalUrl || clipUrl) && (
        <div className="my-2 flex items-center space-x-2 text-sm text-gray-600 sm:text-base">
          <ExternalLinkIcon className="h-4 w-4 sm:h-6 sm:w-6" />
          {originalUrl && (
            <a href={originalUrl} className="underline">
              Original Stream
            </a>
          )}
          {clipUrl && (
            <a href={clipUrl} className="underline">
              Video Clip
            </a>
          )}
        </div>
      )}

      <div className="mt-2 flex flex-col items-center rounded-md bg-blue-300 px-1 pb-2 pt-1">
        <p className="text-lg font-semibold text-sky-900">Characters</p>
        <div className="flex space-x-2 scrollbar-hide">
          {characters.map(({ image }, i) => (
            <div
              key={i}
              className="relative h-20 w-20 rounded-lg border-2 border-sky-500 bg-sky-300 sm:h-32 sm:w-32"
            >
              <Image
                className="rounded-lg"
                src={urlFor(image).url()}
                layout="fill"
                objectFit="fill"
                alt="Character Icon"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatInfo
