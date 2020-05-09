const translation = {
  'character': 'Персонажи',
  'genre': 'Жанр',
  'raiting': 'Рейтинг',
  'trop': 'Троп',
  'location': 'Место',
  'noun': 'Слово',
}

export const getShareUrl = (results) => {

  const href="https://twitter.com/intent/tweet"
  const dataUrl="https://ur.a-gon.ru"
  const dataHashtags="urgame"

  let textRes = ''

  Object.keys(results).forEach((key, idx) => {
    textRes = textRes+translation[key]+': '+results[key].map(out => out.name_rus).join(' и ')
    if (idx !== (results.length-1)) {
      textRes = textRes+', '
    }
  }) 

  if (textRes.substr(textRes.length -2, 2) === ', ') textRes = textRes.substr(0, textRes.length-2)

  const link = href+'?text='+encodeURIComponent(textRes)+'&hashtags='+dataHashtags+'&url='+encodeURIComponent(dataUrl)

  return link
}