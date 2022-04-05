export default {
  name: 'dialog',
  title: 'Dialog',
  type: 'document',
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
      title: 'Original URL',
      type: 'url',
    },
    {
      name: 'clipUrl',
      title: 'Clip URL',
      type: 'url',
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
          type: 'document',
          fields: [
            {
              name: 'who',
              title: 'Who',
              type: 'reference',
              to: [{ type: 'character' }],
            },
            {
              name: 'japaneseText',
              title: 'Japanese Text',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
