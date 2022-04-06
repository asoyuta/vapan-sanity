import { ToNoRubyText } from '../../lib/ToNoRubyText'

export default {
  name: 'line',
  type: 'object',
  fields: [
    {
      name: 'who',
      title: 'Who',
      type: 'reference',
      to: [{ type: 'character' }],
    },
    {
      name: 'lineText',
      title: 'Line Text',
      type: 'multilingualText',
    },
  ],

  preview: {
    select: {
      text1: 'lineText[0].text',
      text2: 'lineText[1].text',
      media: 'who.image',
    },
    prepare({ text1, text2, media }) {
      return {
        title: ToNoRubyText(text1),
        subtitle: ToNoRubyText(text2),
        media,
      }
    },
  },
}
