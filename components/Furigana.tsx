import React from 'react'
import { ToFuriganaList } from '../lib/ToFuriganaList'

type Props = {
  text: string
  furiOn: boolean
  className?: string
}

function Furigana({ text, furiOn, className }: Props) {
  const [nihongo, furigana] = ToFuriganaList(text)

  if (furiOn) {
    return (
      <p className={className}>
        {furigana.map((_, i) => (
          <>
            {furigana[i] ? (
              <ruby>
                {nihongo[i]}
                <rt>{furigana[i]}</rt>
              </ruby>
            ) : (
              nihongo[i]
            )}
          </>
        ))}
      </p>
    )
  } else {
    return <p className={className}>{nihongo.join('')}</p>
  }
}

export default Furigana
