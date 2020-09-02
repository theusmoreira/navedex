const formatedDate = (value: string): string => {
  const date = new Date(value);
  return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};

export default formatedDate;
