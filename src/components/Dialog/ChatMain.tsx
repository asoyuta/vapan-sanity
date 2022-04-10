import { urlFor } from '../../../sanity'
import { Character, Line } from '../../../typing'
import { useAppSelector } from '../../redux/app/hooks'
import { selectFirstPersonId } from '../../redux/Dialog/dialogSlice'
import FirstLine from './FirstLine'
import SecondLine from './SecondLine'
import ThirdLine from './ThirdLine'

type Props = {
  lines: Line[]
  characters: Character[]
}

function ChatMain({ lines, characters }: Props) {
  const firstPersonId = useAppSelector(selectFirstPersonId)
  var previousName = 'DEFAULT'

  return (
    <div className="h-[calc(100vh-96px)] overflow-scroll bg-sky-400 px-3 pb-5 scrollbar-hide sm:px-5 lg:h-[calc(90vh-144px)]">
      {lines.map(({ character, original, translation, description }, i) => {
        if (character) {
          const isFirst =
            character.englishName === characters[firstPersonId].englishName
          const showIcon = !(previousName === character.englishName)

          previousName = character.englishName

          if (isFirst) {
            return (
              <FirstLine
                key={i}
                name={character.englishName}
                icon={urlFor(character.image).url()}
                original={original}
                translation={translation}
                description={description}
                showIcon={showIcon}
              />
            )
          } else {
            return (
              <SecondLine
                key={i}
                name={character.englishName}
                icon={urlFor(character.image).url()}
                original={original}
                translation={translation}
                description={description}
                showIcon={showIcon}
              />
            )
          }
        } else {
          previousName = 'DEFAULT'

          return (
            <ThirdLine
              key={i}
              original={original}
              translation={translation}
              description={description}
            />
          )
        }
      })}
    </div>
  )
}

export default ChatMain
