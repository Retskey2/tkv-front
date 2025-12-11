export const formatNumberAmount = (value: string | number, max: number) => {
  if (value === undefined || value === null) return '';

  const raw = value.toString().replace(',', '.');
  const num = Number(raw);

  if (!isNaN(num) && num > max) {
    return Math.floor(max).toLocaleString('de-DE');
  }

  const [integerPart, decimalPart] = raw.split('.');
  const intFormatted = Number(integerPart).toLocaleString('de-DE');

  if (decimalPart !== undefined) {
    const decimals = decimalPart.slice(0, 2);
    return `${intFormatted},${decimals}`;
  }

  return intFormatted;
};
