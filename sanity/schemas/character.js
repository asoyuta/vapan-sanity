export default {
  name: 'character',
  title: 'Character',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'multilingualText',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
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

  preview: {
    select: {
      title: 'slug.current',
      media: 'image',
    },
  },
}
