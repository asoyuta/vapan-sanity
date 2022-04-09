import { urlFor } from '../../../sanity'
import { Character } from '../../../typing'
import Toggle from '../UIkit/Toggle'
import { MenuIcon } from '@heroicons/react/outline'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks'
import {
  proceedFirstPersonId,
  selectFirstPersonId,
  selectShowFurigana,
  selectShowSettings,
  selectShowTranslation,
  toggleShowFurigana,
  toggleShowSettings,
  toggleShowTranslation,
} from '../../redux/Dialog/dialogSlice'

type Props = {
  title: string
  characters: Character[]
}

function ChatHeader({ title, characters }: Props) {
  const dispatch = useAppDispatch()

  const firstPersonId = useAppSelector(selectFirstPersonId)
  const showSettings = useAppSelector(selectShowSettings)
  const showTranslation = useAppSelector(selectShowTranslation)
  const showFurigana = useAppSelector(selectShowFurigana)

  return (
    <div className="relative top-0 flex items-center justify-between bg-sky-900 p-2 text-white sm:px-6 lg:rounded-t-xl">
      <p className="truncate pr-2 text-lg font-light sm:text-xl">{title}</p>
      {/* Right */}
      <div className="flex cursor-pointer items-center space-x-1">
        <MenuIcon
          onClick={() => dispatch(toggleShowSettings())}
          className="h-8 w-8"
        />
      </div>
      {/* Settings */}
      <div
        className={`absolute top-14 right-2 z-50 flex flex-col items-end space-y-3 rounded-md bg-white p-3 text-black opacity-95 sm:top-16 sm:right-4 ${
          !showSettings && 'hidden'
        }`}
      >
        <div className="flex flex-shrink-0 items-center space-x-3 sm:space-x-5">
          <p className="text-base">1st Person</p>
          <div
            className="relative h-12 w-12 cursor-pointer rounded-full bg-gray-300"
            onClick={() => dispatch(proceedFirstPersonId())}
          >
            <img
              className="rounded-full"
              src={urlFor(characters[firstPersonId].image).url()}
            />
          </div>
        </div>

        <div className="flex space-x-3 sm:space-x-5">
          <p className="text-base">Translation</p>
          <Toggle
            toggled={showTranslation}
            onClick={() => dispatch(toggleShowTranslation())}
          />
        </div>
        <div className="flex space-x-3 sm:space-x-5">
          <p className="text-base">Furigana</p>
          <Toggle
            toggled={showFurigana}
            onClick={() => dispatch(toggleShowFurigana())}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
