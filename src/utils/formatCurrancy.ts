const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrancy(number: number | undefined) {
  if (!number) {
    return;
  }
  return CURRENCY_FORMATTER.format(number);
}
