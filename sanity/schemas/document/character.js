import { BsPersonSquare } from 'react-icons/bs'
import { ToNoRubyText } from '../../lib/ToNoRubyText'

export default {
  name: 'character',
  title: 'Character',
  icon: BsPersonSquare,
  type: 'document',
  fieldsets: [
    {
      name: 'name',
      title: 'Name',
    },
    {
      name: 'social',
      title: 'Social Media URLs',
    },
  ],
  fields: [
    {
      name: 'japaneseName',
      title: 'Japanese',
      type: 'string',
      fieldset: 'name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'englishName',
      title: 'English',
      type: 'string',
      fieldset: 'name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'englishName',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
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
      nameJP: 'japaneseName',
      nameEN: 'englishName',
      media: 'image',
    },
    prepare({ nameJP, nameEN, media }) {
      return {
        title: ToNoRubyText(nameJP),
        subtitle: ToNoRubyText(nameEN),
        media,
      }
    },
  },
}
