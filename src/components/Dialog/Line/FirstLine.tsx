import { ChevronDoubleDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useState } from 'react'
import { LinePortableText } from '../..'
import { useAppSelector } from '../../../redux/app/hooks'
import { selectShowTranslation } from '../../../redux/Dialog/dialogSlice'
import Furigana from '../../Furigana'

type Props = {
  name: string
  icon: string
  original: string
  translation: string
  description: object[]
  showIcon: boolean
}

function FirstLine({
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
    <div className={`flex flex-row-reverse ${showIcon ? 'mt-5' : 'mt-2'}`}>
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

      <div className={`mr-2 flex flex-col items-end sm:mr-4`}>
        {/* Name */}
        {showIcon && (
          <p
            className={`'mr-1 mt-1 mb-0.5 text-sm text-lime-300 sm:mt-3 sm:mr-3 sm:text-lg`}
          >
            {name}
          </p>
        )}

        {/* Speech Bubble */}
        <div
          className={`rounded-xl bg-lime-300 p-4 ${
            showIcon && 'rounded-tr-none'
          }`}
        >
          <div className="flex flex-col items-end text-center">
            <div className="flex flex-col items-center">
              <Furigana text={original} className=" text-base sm:text-lg" />
              {showTranslation && translation && (
                <p className="pt-2 text-sm sm:text-base">{translation}</p>
              )}
            </div>
          </div>
          {description && (
            <div className="flex flex-col pt-2">
              <div className={`flex justify-end`}>
                <div
                  className={`mr-4 rounded-full bg-lime-500 p-1 ${
                    descOpen && 'rounded-b-none'
                  } `}
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
                <div className="rounded-md bg-lime-500 p-2">
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

export default FirstLine
