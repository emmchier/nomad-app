import type { NextApiRequest, NextApiResponse } from 'next';

import footerData from '../../../data/footer.json';
import { FooterTypes } from '../../../interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse<FooterTypes>) {
  res.status(200).json(footerData);
}
