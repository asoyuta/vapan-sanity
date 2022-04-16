export const ToFuriganaList = (text: string) => {
  // text = '_本当@*ほんと_にお_別@わか_れだ'
  const textList = text.split('_')
  // textList = ['本当@*ほんと','にお','別@わか','れだ']
  var kanjiTextList: string[] = []
  var furiganaTextList: string[] = []
  var kanjiFalseList: string[] = []
  var furiganaFalseList: string[] = []
  textList.forEach((element) => {
    // element = '本当@*ほんと' | 'にお' | '別@わか' | 'れだ'
    if (element.indexOf('*@*') != -1) {
      kanjiTextList.push(element.split('*@*')[0])
      furiganaTextList.push(element.split('*@*')[1])
      kanjiFalseList.push('*')
      furiganaFalseList.push('*')
    } else if (element.indexOf('*@') != -1) {
      kanjiTextList.push(element.split('*@')[0])
      furiganaTextList.push(element.split('*@')[1])
      kanjiFalseList.push('*')
      furiganaFalseList.push('')
    } else if (element.indexOf('@*') != -1) {
      kanjiTextList.push(element.split('@*')[0])
      furiganaTextList.push(element.split('@*')[1])
      kanjiFalseList.push('')
      furiganaFalseList.push('*')
    } else if (element.indexOf('@') != -1) {
      kanjiTextList.push(element.split('@')[0])
      furiganaTextList.push(element.split('@')[1])
      kanjiFalseList.push('')
      furiganaFalseList.push('')
    } else {
      kanjiTextList.push(element)
      furiganaTextList.push('')
      kanjiFalseList.push('')
      furiganaFalseList.push('')
    }
  })
  // kanjiTextList    = ['本当',   'にお', '別',  'れだ']
  // furiganaTextList = ['ほんと', '',    'わか', ''   ]
  // kanjiFalseList =   ['',      '',    '',    ''   ]
  // kanjiFalseList =   ['*',     '',    '',    ''   ]
  return [kanjiTextList, furiganaTextList, kanjiFalseList, furiganaFalseList]
}
