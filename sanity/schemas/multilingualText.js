export default {
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
          description: 'hello',
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
          if (!text) {
            return {
              text: '',
              media,
            }
          }
          const textList = text.split('_')
          var fixedText = ''
          textList.forEach((element) => {
            if (element.indexOf('@') != -1) {
              fixedText += element.split('@')[0]
            } else {
              fixedText += element
            }
          })
          return {
            title: fixedText,
            media,
          }
        },
      },
    },
  ],
}
