import {getDefaultCurrency} from '@/utils/getDefaultCurrency'

export const getDefaultData = () => {
  return {
    rates: {
      [getDefaultCurrency()]: 1
    }
  }
}
