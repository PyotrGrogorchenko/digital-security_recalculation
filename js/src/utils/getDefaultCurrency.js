import countryToCurrency from 'country-to-currency'

export const getDefaultCurrency = () => {
  const locale = new Intl.NumberFormat().resolvedOptions().locale
  const country = locale.split('-')[1] ?? 'RU'
  return countryToCurrency[country]
}
