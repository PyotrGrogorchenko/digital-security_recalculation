export const fetchCurrencyRate = async () => {
  const res = await fetch('https://cdn.cur.su/api/latest.json')
  const json = await res.json()
  return json
}

