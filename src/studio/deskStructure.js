import S from '@sanity/desk-tool/structure-builder'

const deskStructure = () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['siteSettings'].includes(item.getId())
      ),
    ])

export default deskStructure
