export function formatLocaleCurrency({
  amount,
  currency,
  locale,
}: {
  amount: number | string;
  currency: string;
  locale: string;
}) {
  amount = Number(amount);

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}
