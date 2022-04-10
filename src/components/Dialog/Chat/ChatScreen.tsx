import { ChatFooter, ChatHeader, ChatMain, VideoPlayer } from '../..'
import { useAppSelector } from '../../../redux/app/hooks'
import { selectDialog, selectShowClip } from '../../../redux/Dialog/dialogSlice'

function ChatScreen() {
  const dialog = useAppSelector(selectDialog)
  const { clipUrl } = dialog

  const showClip = useAppSelector(selectShowClip)

  return (
    <div className="mx-auto lg:h-[90vh] lg:w-[1024px] lg:rounded-3xl lg:bg-slate-800 lg:px-6 lg:py-6">
      <ChatHeader />

      <div
        className={`flex w-full justify-center bg-gradient-to-b from-sky-900 to-sky-400 ${
          showClip && 'sm:pb-2'
        }`}
      >
        <div className={`w-[640px] ${!showClip && 'hidden'}`}>
          {clipUrl && <VideoPlayer url={clipUrl} />}
        </div>
      </div>

      <ChatMain />

      <ChatFooter />
    </div>
  )
}

export default ChatScreen
