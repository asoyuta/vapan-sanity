import ReactPlayer from 'react-player'

type Props = {
  url: string
}

function VideoPlayer({ url }: Props) {
  return (
    <div className="relative pt-[56.25%]">
      <ReactPlayer
        className="absolute top-0 left-0"
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default VideoPlayer
