import React from 'react'

type Props = {
  nihongo: string[]
  furigana: string[]
  furiOn: boolean
  className: string
}

function Furigana({ nihongo, furigana, furiOn, className }: Props) {
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
