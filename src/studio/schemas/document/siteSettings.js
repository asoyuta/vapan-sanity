const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
    },
  ],
}

export default siteSettings
