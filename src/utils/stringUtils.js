export const parseNameWithOptions = (text) => text
  .split('"')
  .map((option) => option.trim())
  .filter((option) => option.length > 0);
