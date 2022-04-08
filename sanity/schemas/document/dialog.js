import { BiConversation } from 'react-icons/bi'

export default {
  name: 'dialog',
  title: 'Dialog',
  icon: BiConversation,
  type: 'document',
  fieldsets: [
    {
      name: 'videoUrls',
      title: 'Video URLs',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'originalUrl',
      title: 'Original Video',
      type: 'url',
      fieldset: 'videoUrls',
    },
    {
      name: 'clipUrl',
      title: 'Clip Video',
      type: 'url',
      fieldset: 'videoUrls',
    },
    {
      name: 'characters',
      title: 'Characters',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'character' },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lines',
      title: 'Lines',
      type: 'array',
      of: [
        {
          type: 'line',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
