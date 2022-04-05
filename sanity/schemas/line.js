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
      name: 'japaneseText',
      title: 'Japanese Text',
      type: 'string',
    },
  ],
  preview: {
    select: {
      // "これから_帰@かえ_ります"
      japaneseText: 'japaneseText',
      media: 'who.image',
    },
    prepare({ japaneseText, media }) {
      // ["これから","帰@かえ","ります"]
      const textList = japaneseText.split('_')
      var nihongo = ''
      textList.forEach((element) => {
        if (element.indexOf('@') != -1) {
          nihongo += element.split('@')[0]
        } else {
          nihongo += element
        }
      })
      return {
        title: nihongo,
        media,
      }
    },
  },
}
