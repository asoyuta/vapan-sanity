import { urlFor } from '../../../../sanity'
import { useAppSelector } from '../../../redux/app/hooks'
import {
  selectDialog,
  selectFirstPersonId,
  selectShowClip,
} from '../../../redux/Dialog/dialogSlice'
import FirstLine from '../Line/FirstLine'
import SecondLine from '../Line/SecondLine'
import ThirdLine from '../Line/ThirdLine'

function ChatMain() {
  const firstPersonId = useAppSelector(selectFirstPersonId)
  const dialog = useAppSelector(selectDialog)
  const { lines, characters } = dialog

  const showClip = useAppSelector(selectShowClip)

  var previousName = 'DEFAULT'

  return (
    <div
      className={`overflow-scroll bg-sky-400 px-3 pb-5 scrollbar-hide sm:px-5 ${
        showClip
          ? 'h-[calc(100vh-96px-56.25vw)] sm:h-[calc(100vh-464px)] lg:h-[calc(90vh-512px)]'
          : 'h-[calc(100vh-96px)] lg:h-[calc(90vh-144px)]'
      }`}
    >
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
