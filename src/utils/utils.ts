export function formattedCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formattedDate(value: Date) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(value));
}
