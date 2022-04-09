import { urlFor } from '../../../sanity'
import { ChatFooter, ChatHeader, ChatMain } from '..'
import { Character, Line } from '../../../typing'
import { useAppDispatch } from '../../redux/app/hooks'
import { setCharactersNumber } from '../../redux/Dialog/dialogSlice'

type Props = {
  title: string
  lines: Line[]
  characters: Character[]
}

function ChatScreen({ title, lines, characters }: Props) {
  const dispatch = useAppDispatch()
  dispatch(setCharactersNumber(characters.length))

  return (
    <div className="mx-auto lg:h-[90vh] lg:w-[1024px] lg:rounded-3xl lg:bg-slate-800 lg:px-6 lg:py-6">
      <ChatHeader title={title} characters={characters} />

      <ChatMain lines={lines} characters={characters} />

      <ChatFooter />
    </div>
  )
}

export default ChatScreen
