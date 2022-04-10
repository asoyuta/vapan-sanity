import { MenuIcon } from '@heroicons/react/outline'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks'
import {
  selectDialog,
  toggleShowInfo,
  toggleShowSettings,
} from '../../../redux/Dialog/dialogSlice'
import { ChatInfo, ChatSettings } from '../../index'

function ChatHeader() {
  const dispatch = useAppDispatch()

  const dialog = useAppSelector(selectDialog)
  const { title } = dialog

  return (
    <div className="relative top-0 flex items-center justify-between bg-sky-900 p-2 text-white sm:px-6 lg:rounded-t-xl">
      <p className="truncate pr-2 text-lg font-light sm:text-xl">{title}</p>
      {/* Right */}
      <div className="flex items-center space-x-3 sm:space-x-10">
        <div
          onClick={() => dispatch(toggleShowInfo())}
          className="flex cursor-pointer items-center space-x-1"
        >
          <InformationCircleIcon className="h-6 w-6" />
          <p className="hidden sm:inline-block">Info</p>
        </div>
        <div
          onClick={() => dispatch(toggleShowSettings())}
          className="flex cursor-pointer items-center space-x-1"
        >
          <MenuIcon className="h-8 w-8" />
          <p className="hidden sm:inline-block">Settings</p>
        </div>
      </div>

      <ChatInfo />

      <ChatSettings />
    </div>
  )
}

export default ChatHeader
