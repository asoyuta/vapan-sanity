import Image from 'next/image'
import { urlFor } from '../../../../sanity'
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks'
import {
  proceedFirstPersonId,
  selectDialog,
  selectFirstPersonId,
  selectShowClip,
  selectShowFurigana,
  selectShowSettings,
  selectShowTranslation,
  toggleShowClip,
  toggleShowFurigana,
  toggleShowTranslation,
} from '../../../redux/Dialog/dialogSlice'
import Toggle from '../../UIkit/Toggle'

function ChatSettings() {
  const dispatch = useAppDispatch()

  const firstPersonId = useAppSelector(selectFirstPersonId)
  const showSettings = useAppSelector(selectShowSettings)
  const showTranslation = useAppSelector(selectShowTranslation)
  const showFurigana = useAppSelector(selectShowFurigana)
  const showClip = useAppSelector(selectShowClip)

  const dialog = useAppSelector(selectDialog)

  const { characters, clipUrl } = dialog

  return (
    <div
      className={`absolute top-14 right-2 z-10 flex flex-col items-center space-y-3 rounded-md bg-gray-50  p-3 text-black sm:top-16 sm:right-4 ${
        !showSettings && 'hidden'
      }`}
    >
      <p className="text-lg font-medium">Settings</p>
      <div className="flex flex-col items-end space-y-3">
        <div className="flex flex-shrink-0 items-center space-x-3 sm:space-x-5">
          <p className="text-base">1st Person</p>
          <div
            className="relative h-12 w-12 cursor-pointer rounded-full bg-gray-300"
            onClick={() => dispatch(proceedFirstPersonId())}
          >
            <Image
              className="rounded-full"
              src={urlFor(characters[firstPersonId].image).url()}
              layout="fill"
              objectFit="fill"
              alt="First Person Icon"
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
        {clipUrl && (
          <div className="flex space-x-3 sm:space-x-5">
            <p className="text-base">Clip</p>
            <Toggle
              toggled={showClip}
              onClick={() => dispatch(toggleShowClip())}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatSettings
