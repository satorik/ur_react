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
  const dataUrl="https://yandex.ru"
  const dataHashtags="urgame"

  let textRes = ''

  Object.keys(results).forEach(key => {
    textRes = textRes+translation[key]+': '+results[key].map(out => out.name_rus).join(' и ')+'; '
  }) 

  const link = href+'?text='+encodeURIComponent(textRes)+';url='+encodeURIComponent(dataUrl)+';hashtags='+dataHashtags

  return link
}