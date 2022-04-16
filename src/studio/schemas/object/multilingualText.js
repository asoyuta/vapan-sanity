import { ToNoRubyText } from '../../lib/ToNoRubyText'

const multilingualText = {
  name: 'multilingualText',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'language',
          title: 'Language',
          type: 'reference',
          to: [{ type: 'language' }],
        },
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
      ],

      preview: {
        select: {
          text: 'text',
          media: 'language.image',
        },
        prepare({ text, media }) {
          return {
            title: ToNoRubyText(text),
            media,
          }
        },
      },
    },
  ],
}

export default multilingualText
