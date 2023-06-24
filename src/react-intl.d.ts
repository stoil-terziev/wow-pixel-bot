import { en } from './intl';

declare global {
  namespace FormatjsIntl {
    interface IntlConfig {
      locale: 'en';
    }
    interface Message {
      ids: keyof typeof en;
    }
  }
}
