import { ToNoRubyText } from '../../lib/ToNoRubyText'

export default {
  name: 'line',
  type: 'object',
  fieldsets: [
    {
      name: 'text',
      title: 'Text',
    },
  ],
  fields: [
    {
      name: 'character',
      title: 'Character',
      type: 'reference',
      to: [{ type: 'character' }],
    },
    {
      name: 'original',
      title: 'Original',
      type: 'string',
      fieldset: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'translation',
      title: 'Translation',
      type: 'string',
      fieldset: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],

  preview: {
    select: {
      original: 'original',
      translation: 'translation',
      media: 'character.image',
    },
    prepare({ original, translation, media }) {
      return {
        title: ToNoRubyText(original),
        subtitle: ToNoRubyText(translation),
        media,
      }
    },
  },
}
