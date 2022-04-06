import { BsPersonSquare } from 'react-icons/bs'

export default {
  name: 'character',
  title: 'Character',
  icon: BsPersonSquare,
  type: 'document',
  fieldsets: [
    {
      name: 'social',
      title: 'Social Media URLs',
    },
  ],
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'multilingualText',
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
      fieldset: 'social',
    },
    {
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
      fieldset: 'social',
    },
  ],

  preview: {
    select: {
      title: 'slug.current',
      media: 'image',
    },
  },
}
