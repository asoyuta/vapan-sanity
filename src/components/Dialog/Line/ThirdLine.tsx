import { ChevronDoubleDownIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useAppSelector } from '../../../redux/app/hooks'
import { selectShowTranslation } from '../../../redux/Dialog/dialogSlice'
import Furigana from '../../Furigana'

type Props = {
  original: string
  translation: string
  description: string
}

function ThirdLine({ original, translation, description }: Props) {
  const showTranslation = useAppSelector(selectShowTranslation)
  const [descOpen, setDescOpen] = useState(false)

  return (
    <div className="flex justify-center">
      <div className="mx-5 mt-5 flex flex-col items-center rounded-xl bg-sky-500 px-4 py-2 text-white sm:py-4">
        <Furigana text={original} className="text-base sm:text-lg" />
        {showTranslation && (
          <p className="text-sm sm:text-base">{translation}</p>
        )}
        {description && (
          <div className="mt-1 flex flex-col">
            <div className={`flex justify-center`}>
              <div
                className={`rounded-full bg-sky-600 p-1 ${
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
              <p className={`rounded-md bg-sky-600 p-2 text-sm sm:text-base`}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ThirdLine
