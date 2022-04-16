import Image from 'next/image'
import { useState } from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/solid'
import Furigana from '../../Furigana'
import { useAppSelector } from '../../../redux/app/hooks'
import { selectShowTranslation } from '../../../redux/Dialog/dialogSlice'
import { LinePortableText } from '../..'

type Props = {
  name: string
  icon: string
  original: string
  translation: string
  description: object[]
  showIcon: boolean
}

function SecondLine({
  name,
  icon,
  original,
  translation,
  description,
  showIcon,
}: Props) {
  const showTranslation = useAppSelector(selectShowTranslation)
  const [descOpen, setDescOpen] = useState(false)

  return (
    <div className={`flex ${showIcon ? 'mt-5' : 'mt-2'}`}>
      {/* Image */}
      <div
        className={`relative h-12 w-12 flex-shrink-0 rounded-full sm:h-20 sm:w-20 ${
          showIcon && 'bg-white'
        }`}
      >
        {showIcon && (
          <Image
            className="rounded-full"
            src={icon}
            layout="fill"
            objectFit="cover"
            alt="Character Icon"
          />
        )}
      </div>

      <div className={`ml-2 flex flex-col items-start sm:ml-4`}>
        {/* Name */}
        {showIcon && (
          <p
            className={`mt-1 mb-0.5 ml-1 text-sm text-white sm:mt-3 sm:ml-3 sm:text-lg`}
          >
            {name}
          </p>
        )}

        {/* Speech Bubble */}
        <div
          className={`rounded-xl bg-white p-4 ${showIcon && 'rounded-tl-none'}`}
        >
          <div className="flex flex-col items-start text-center">
            <div className="flex flex-col items-center">
              <Furigana text={original} className="text-base sm:text-lg" />
              {showTranslation && translation && (
                <p className="pt-2 text-sm sm:text-base">{translation}</p>
              )}
            </div>
          </div>
          {description && (
            <div className="mt-2 flex flex-col">
              <div className={`flex justify-start`}>
                <div
                  className={`rounded-full bg-gray-300 p-1 ${
                    descOpen && 'rounded-b-none'
                  } ml-4 bg-gray-300`}
                >
                  <ChevronDoubleDownIcon
                    onClick={() => setDescOpen(!descOpen)}
                    className={`h-5 w-5 cursor-pointer duration-150 ${
                      descOpen && 'rotate-180'
                    }`}
                  />
                </div>
              </div>
              {descOpen && (
                <div className="rounded-md bg-gray-300 p-2">
                  <LinePortableText content={description} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SecondLine
