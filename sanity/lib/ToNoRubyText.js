export const ToNoRubyText = (text) => {
  if (!text) {
    return ''
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
  return fixedText
}
