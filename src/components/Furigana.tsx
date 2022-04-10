import { ToFuriganaList } from '../lib/ToFuriganaList'
import { useAppSelector } from '../redux/app/hooks'
import { selectShowFurigana } from '../redux/Dialog/dialogSlice'

type Props = {
  text: string
  className?: string
}

function Furigana({ text, className }: Props) {
  const showFurigana = useAppSelector(selectShowFurigana)
  const [nihongo, furigana] = ToFuriganaList(text)

  if (showFurigana) {
    return (
      <p className={className}>
        {furigana.map((_, i) => (
          <>
            {furigana[i] ? (
              <ruby>
                {nihongo[i]}
                <rt>{furigana[i]}</rt>
              </ruby>
            ) : (
              nihongo[i]
            )}
          </>
        ))}
      </p>
    )
  } else {
    return <p className={className}>{nihongo.join('')}</p>
  }
}

export default Furigana
