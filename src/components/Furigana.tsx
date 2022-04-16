import React from 'react'
import { ToFuriganaList } from '../lib/ToFuriganaList'
import { useAppSelector } from '../redux/app/hooks'
import { selectShowFurigana } from '../redux/Dialog/dialogSlice'

type Props = {
  text: string
  className?: string
  furiOn?: boolean
}

function Furigana({ text, className, furiOn }: Props) {
  const showFurigana = useAppSelector(selectShowFurigana)
  const [nihongo, furigana, nihongoFalse, furiganaFalse] = ToFuriganaList(text)

  if (showFurigana || furiOn) {
    return (
      <span className={className}>
        {furigana.map((_, i) => (
          <React.Fragment key={i}>
            {furigana[i] ? (
              <ruby
                className={`${nihongoFalse[i] ? 'text-red-500' : 'text-black'}`}
              >
                {nihongo[i]}
                <rt
                  className={`${
                    furiganaFalse[i] ? 'text-red-500' : 'text-black'
                  }`}
                >
                  {furigana[i]}
                </rt>
              </ruby>
            ) : (
              <>
                {nihongoFalse[i] ? (
                  <span className="text-red-500">{nihongo[i]}</span>
                ) : (
                  nihongo[i]
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </span>
    )
  } else {
    return <p className={className}>{nihongo.join('')}</p>
  }
}

export default Furigana
