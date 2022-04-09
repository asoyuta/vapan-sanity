type Props = {
  toggled: boolean
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

function Toggle({ toggled, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`relative m-auto h-6 w-12 cursor-pointer rounded-full ${
        toggled ? 'bg-lime-500' : 'bg-gray-400'
      }`}
    >
      <div
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-all duration-300 ease-in-out ${
          toggled && 'translate-x-6'
        }`}
      />
    </div>
  )
}

export default Toggle
