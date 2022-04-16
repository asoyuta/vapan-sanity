import { IoLanguage } from 'react-icons/io5'

const language = {
  name: 'language',
  title: 'Language',
  icon: IoLanguage,
  type: 'document',
  fields: [
    {
      name: 'languageName',
      title: 'Language Name',
      type: 'string',
    },
    {
      name: 'languageCode',
      title: 'Language Code',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}

export default language
