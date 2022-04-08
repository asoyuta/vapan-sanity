import { urlFor } from '../../sanity'
import {
  MenuIcon,
  PlusIcon,
  CameraIcon,
  PhotographIcon,
  MicrophoneIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'
import { FirstLine, SecondLine, ThirdLine, Toggle } from '../../components'
import { Character, Line } from '../../typing'

type Props = {
  title: string
  lines: Line[]
  characters: Character[]
}

function ChatScreen({ title, lines, characters }: Props) {
  const [firstPersonId, setFirstPersonId] = useState(0)
  const [settingOpen, setSettingOpen] = useState(false)
  const [furiOn, setFuriOn] = useState(true)
  const [tranOn, setTranOn] = useState(true)

  var previousName = 'DEFAULT'

  return (
    <div>
      {/* Top */}
      <div className="relative top-0 flex items-center justify-between bg-sky-900 p-2 text-white">
        <p className="truncate pr-2 text-lg font-light">{title}</p>
        {/* Right */}
        <div className="flex cursor-pointer items-center space-x-1">
          <MenuIcon
            onClick={() => setSettingOpen(!settingOpen)}
            className="h-8 w-8"
          />
        </div>
        {/* Settings */}
        <div
          className={`absolute top-14 right-2 z-50 flex flex-col items-end space-y-1 rounded-md bg-white p-3 text-black opacity-95 ${
            !settingOpen && 'hidden'
          }`}
        >
          <div className="flex flex-shrink-0 items-center space-x-3">
            <p>1st Person</p>
            <div
              className="relative h-12 w-12 rounded-full bg-gray-300"
              onClick={() =>
                setFirstPersonId(
                  (prevState) => (prevState + 1) % characters.length
                )
              }
            >
              <img
                className="rounded-full"
                src={urlFor(characters[firstPersonId].image).url()}
              />
            </div>
          </div>

          <div className="flex space-x-3">
            <p>Translation</p>
            <Toggle toggled={tranOn} onClick={() => setTranOn(!tranOn)} />
          </div>
          <div className="flex space-x-3">
            <p>Furigana</p>
            <Toggle toggled={furiOn} onClick={() => setFuriOn(!furiOn)} />
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="h-[calc(100vh-96px)] overflow-scroll bg-sky-400 px-3 scrollbar-hide">
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
                  furiOn={furiOn}
                  tranOn={tranOn}
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
                  furiOn={furiOn}
                  tranOn={tranOn}
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
                furiOn={furiOn}
                tranOn={tranOn}
              />
            )
          }
        })}

        <div className="my-5 flex items-center">
          <p className="mx-auto inline-block rounded-md bg-blue-400 p-2 text-center text-sm text-white sm:px-4 sm:text-base">
            Conversation ends here...
          </p>
        </div>
      </div>

      {/* Decolation */}
      <div className="top-0 flex justify-between bg-slate-600 p-2 text-white">
        {/* Left */}
        <div className="flex space-x-1">
          <PlusIcon className="h-8 w-8" />
          <CameraIcon className="h-8 w-8" />
          <PhotographIcon className="h-8 w-8" />
        </div>

        <div className="mx-2 flex flex-grow items-center rounded-xl bg-gray-500">
          <p className="pl-4 text-gray-200">Aa</p>
        </div>

        {/* Right */}
        <div>
          <MicrophoneIcon className="h-8 w-8" />
        </div>
      </div>
    </div>
  )
}

export default ChatScreen
