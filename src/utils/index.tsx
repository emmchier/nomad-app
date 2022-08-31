import { ActivitiesIcon, CoworkingIcon, GastroIcon } from '../components/ui/svg';
import { WifiIcon } from '../components/ui/svg/index';

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

export const getFamily = (name: string) => {
  switch (name) {
    case 'Urban':
      return 'Noto Sans';
    case 'Tribe':
      return 'Caveat';
    case 'Family':
      return 'JosefinSlab';
    default:
      return 'Gibson';
  }
};

export const getColor = (name: string) => {
  switch (name) {
    case 'Urban':
      return '#3D63A9';
    case 'Tribe':
      return '#ADC22F';
    case 'Family':
      return '#AA2275';
    default:
      return '#3D63A9';
  }
};

export const getServiceIcon = (name: string, color: string) => {
  switch (name) {
    case 'actividades':
      return <ActivitiesIcon color={color} />;
    case 'espacio-coworking':
      return <CoworkingIcon color={color} />;
    case 'gastronomia-vegana':
      return <GastroIcon color={color} />;
    case 'piscina' || 'piscina-climatizada':
      return <GastroIcon color={color} />;
    case 'habitaciones-vip':
      return <GastroIcon color={color} />;
    case 'wifi-gratis':
      return <WifiIcon color={color} />;
    case 'salon-de-eventos':
      return <WifiIcon color={color} />;
    default:
      return null;
  }
};
