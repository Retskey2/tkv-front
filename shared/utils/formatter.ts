export const formatNumberAmount = (value: string | number, max: number) => {
  if (value === undefined || value === null) return '';
  const [integerPart, decimalPart] = value.toString().replace(',', '.').split('.');
  const intNum = Math.min(Number(integerPart), Math.floor(max)); // ограничение по целой части
  const intFormatted = intNum.toLocaleString('de-DE'); // точки как разделитель тысяч
  if (decimalPart !== undefined) {
    const decimals = decimalPart.slice(0, 2);
    return `${intFormatted},${decimals}`;
  }
  return intFormatted;
};
