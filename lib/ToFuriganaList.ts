export const ToFuriganaList = (text: string) => {
  const textList = text.split('_')
  var kanjiTextList: string[] = []
  var furiganaTextList: string[] = []
  textList.forEach((element) => {
    if (element.indexOf('@') != -1) {
      kanjiTextList.push(element.split('@')[0])
      furiganaTextList.push(element.split('@')[1])
    } else {
      kanjiTextList.push(element)
      furiganaTextList.push('')
    }
  })

  return [kanjiTextList, furiganaTextList]
}
