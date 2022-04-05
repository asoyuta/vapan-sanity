export default {
  name: 'character',
  title: 'Character',
  type: 'document',
  fields: [
    {
      name: 'englishName',
      title: 'English Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'englishName',
        maxLength: 96,
      },
    },
    {
      name: 'japaneseName',
      title: 'Japanese Name',
      type: 'object',
      fields: [
        {
          name: 'kanjiText',
          title: 'Kanji Text',
          type: 'string',
        },
        {
          name: 'furiganaText',
          title: 'Furigana Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
    },
    {
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
    },
  ],
}
