import React from 'react'
import { ToFuriganaList } from '../lib/ToFuriganaList'

type Props = {
  text: string
  furiOn: boolean
  className?: string
}

function Furigana({ text, furiOn, className }: Props) {
  const [nihongo, furigana] = ToFuriganaList(text)

  return (
    <>
      {furiOn ? (
        <ruby className={`${className}`}>
          {nihongo.map((_, i) => (
            <React.Fragment key={i}>
              {nihongo[i]} <rt>{furigana[i]}</rt>
            </React.Fragment>
          ))}
        </ruby>
      ) : (
        <>{nihongo.join('')}</>
      )}
    </>
  )
}

export default Furigana
