const currencies = [
  'USD', // American Dollar
  'EUR', // European Euro
  'JPY', // Japanese Yen
  'GBP', // British Pound
  'CHF', // Swiss Franc
  'CAD', // Canadian Dollar
  'AUD', // Australian Dollar
  'HKD', // Hong Kong Dollar
  'CNY', // Chinese Yen
  'INR', // Indian Rupee
]

const currencyToLanguageId = {
  USD : 'en-US',
  EUR : 'de-DE',
  JPY : 'ja-JP',
  GBP : 'en-GB',
  CHF : 'fr-CH',
  CAD : 'en-CA',
  AUD : 'en-AU',
  HKD : 'zh-HK',
  CNY : 'zh-CN',
  INR : 'hi-IN'
}

const formatCurrency = (currency, value) => {
  const languageId = currencyToLanguageId[currency];
  console.log(currency);
  return new Intl.NumberFormat(languageId, { style: 'currency', currency }).format(value);
}

export { currencies, formatCurrency };

