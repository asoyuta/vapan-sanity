import Image from 'next/image'
import { useState } from 'react'

type Props = {
  src: string
  width: number
  className?: string
}

const NaturalImage = ({ src, width, className }: Props) => {
  const [ratio, setRatio] = useState(16 / 9) // default to 16:9

  return (
    <Image
      src={src}
      width={width}
      height={width / ratio}
      layout="fixed"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
      alt="image"
      className={className}
    />
  )
}

export default NaturalImage
