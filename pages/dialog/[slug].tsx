import { GetServerSideProps } from 'next'
import { sanityClient } from '../../sanity'
import { Dialog } from '../../typing'
import { ChatScreen } from '../../components'

type Props = {
  dialog: Dialog
}

function DialogDetail({ dialog }: Props) {
  const { title, lines, characters } = dialog

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-700 to-sky-300 lg:flex lg:items-center">
      <ChatScreen title={title} lines={lines} characters={characters} />
    </div>
  )
}

export default DialogDetail

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `
    *[_type == "dialog" && slug.current == $slug][0]{
      _id,
      title,
      characters[]->{
        japaneseName,
        englishName,
        image {
          asset
        },
        slug {
          current
        },
        twitterUrl,
        youtubeUrl,
      },
      originalUrl,
      clipUrl,
      lines[]{
        character->{
          japaneseName,
          englishName,
          image {
            asset
          },
        },
        original,
        translation,
        description
      }
    }
  `

  const dialog = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!dialog) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      dialog,
    },
  }
}
