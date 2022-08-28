export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // separate accent from letter
    .replace(/[\u0300-\u036f]/g, '') // remove all separated accents
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/&/g, '-and-') // replace & with 'and'
    .replace(/[^\w\-]+/g, '') // remove all non-word chars
    .replace(/\-\-+/g, '-'); // replace multiple '-' with single '-'
};

export const unslugify = (text: string) => {
  var words = text.split('-');
  return words.map((word: string) => word.toLowerCase()).join(' ');
};

export const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
