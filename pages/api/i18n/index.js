import es from '../../../i18n/es';
import en from '../../../i18n/en';

export default function content(req, res) {
  const data = {
    es,
    en,
  };
  res.status(200).json(data);
}
