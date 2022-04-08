type Image = {
  asset: {
    url: string
  }
}

export type Character = {
  japaneseName: string
  englishName: string
  image: Image
  slug: {
    current: string
  }
  twitterUrl: string
  youtubeUrl: string
}

type Line = {
  character: Character
  original: string
  translation: string
  description: string
}

export type Dialog = {
  _id: string
  title: string
  characters: Character[]
  originalUrl: string
  clipUrl: string
  lines: Line[]
}
