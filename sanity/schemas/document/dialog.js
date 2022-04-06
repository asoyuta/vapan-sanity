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
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
    },
    {
      name: 'dialogText',
      title: 'Dialog Text',
      type: 'array',
      of: [
        {
          type: 'line',
        },
      ],
    },
  ],
}
