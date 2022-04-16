import { ToNoRubyText } from '../../lib/ToNoRubyText'
import { ToFuriganaList } from '../../lib/ToFuriganaList'
import React from 'react'

const furiganaIcon = () => {
  return (
    <ruby>
      漢<rt>かん</rt>
    </ruby>
  )
}

const furiganaRender = ({ children }) => {
  const [nihongo, furigana, nihongoFalse, furiganaFalse] = ToFuriganaList(
    children.props.text.text
  )

  return (
    <span>
      <span style={{ backgroundColor: '#F5F5F5', display: 'block' }}>
        {children}
      </span>
      <span style={{ backgroundColor: '#DCDCDC', display: 'block' }}>
        {furigana.map((_, i) => (
          <React.Fragment key={i}>
            {furigana[i] ? (
              <ruby style={{ color: `${nihongoFalse[i] ? 'red' : 'black'}` }}>
                {nihongo[i]}
                <rt style={{ color: `${furiganaFalse[i] ? 'red' : 'black'}` }}>
                  {furigana[i]}
                </rt>
              </ruby>
            ) : (
              <>
                {nihongoFalse[i] ? (
                  <span style={{ color: 'red' }}>{nihongo[i]}</span>
                ) : (
                  nihongo[i]
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </span>
    </span>
  )
}

const line = {
  title: 'Line',
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
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              {
                title: 'Furigana',
                value: 'furigana',
                blockEditor: {
                  icon: furiganaIcon,
                  render: furiganaRender,
                },
              },
            ],
            annotations: [
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
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
        media: media,
      }
    },
  },
}

export default line
