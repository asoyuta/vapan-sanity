import Image from 'next/image'
import PortableText from 'react-portable-text'
import { Furigana, NaturalImage } from '../..'
import { urlFor } from '../../../../sanity'

type Props = {
  content: object[]
}

function LinePortableText({ content }: Props) {
  return (
    <PortableText
      content={content}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      serializers={{
        normal: (props: any) => <p className="text-base" {...props} />,
        h1: (props: any) => (
          <h1 className="my-5 text-3xl font-bold" {...props} />
        ),
        h2: (props: any) => (
          <h2 className="my-5 text-2xl font-bold" {...props} />
        ),
        h4: (props: any) => (
          <h4 className="my-5 text-lg font-bold" {...props} />
        ),
        li: ({ children }: any) => (
          <li className="ml-4 list-disc">{children}</li>
        ),
        strong: ({ children }: any) => (
          <strong className="text-bold">{children}</strong>
        ),
        em: ({ children }: any) => (
          <em className="font-semibold text-gray-600">{children}</em>
        ),
        furigana: ({ children }: any) => <Furigana text={children[0]} furiOn />,
        link: ({ href, children }: any) => (
          <a href={href} className="underline hover:opacity-80">
            {children}
          </a>
        ),
      }}
    />
  )
}

export default LinePortableText
