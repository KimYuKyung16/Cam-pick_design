export const removeSpace = (value: string): string  => {
  const regex = /\s/g;

  return value.replace(regex, '');
}