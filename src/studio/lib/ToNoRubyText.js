export const ToNoRubyText = (text) => {
  if (!text) {
    return ''
  }
  // text = 'じゃあこれで_今度@こんど_こそ_本当@*ほんと_にお_別@わか_れだ'
  const textList = text.split('_')
  // textList = ['じゃあこれで','今度@こんど','こそ','本当@*ほんと','にお','別@わか','れだ']
  var fixedText = ''
  textList.forEach((element) => {
    if (element.indexOf('*@*') != -1) {
      fixedText += element.split('*@*')[0]
    } else if (element.indexOf('*@') != -1) {
      fixedText += element.split('*@')[0]
    } else if (element.indexOf('@*') != -1) {
      fixedText += element.split('@*')[0]
    } else if (element.indexOf('@') != -1) {
      fixedText += element.split('@')[0]
    } else {
      fixedText += element
    }
  })
  // fixedText = 'じゃあこれで今度こそ本当にお別れだ'
  return fixedText
}
