import type { Class } from '../../services/bot';

type SpellImageSize = 'small' | 'medium' | 'large';

export const getSpellImage = (name: string, size: SpellImageSize = 'medium'): string =>
  `https://wow.zamimg.com/images/wow/icons/${size}/spell_${name.replace(' ', '_').toLocaleLowerCase()}.jpg`;

export const getClassImage = (name: Class): string =>
  `https://www.pageofswords.com/wp-content/uploads/2022/11/world-of-warcraft-class-portrait-logo-image-symbol-icon-for-${name
    .replace(' ', '-')
    .toLocaleLowerCase()}-square.jpg)`;
