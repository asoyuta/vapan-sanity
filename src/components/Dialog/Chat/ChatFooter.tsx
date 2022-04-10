import {
  PlusIcon,
  CameraIcon,
  PhotographIcon,
  MicrophoneIcon,
} from '@heroicons/react/outline'

function ChatFooter() {
  return (
    <div className="top-0 flex justify-between bg-slate-600 p-2 text-white lg:rounded-b-xl">
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
  )
}

export default ChatFooter
