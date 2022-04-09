type Image = {
  asset: {
    url: string
  }
}

export type Character = {
  japaneseName: string
  englishName: string
  japaneseShortName: string
  englishShortName: string
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
  _createdAt: string
  title: string
  mainImage: Image
  description: string
  characters: Character[]
  originalUrl: string
  clipUrl: string
  lines: Line[]
  slug: {
    current: string
  }
}
