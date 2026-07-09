export const formatCurrency = (amount: number, currency: 'INR' | 'USD' = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: currency === 'USD' ? 2 : 0,
  }).format(amount);
};
