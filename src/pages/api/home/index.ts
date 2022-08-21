import type { NextApiRequest, NextApiResponse } from 'next';

import homeData from '../../../data/home.json';
import { PageTypes } from '../../../interfaces/index';

export default function handler(req: NextApiRequest, res: NextApiResponse<PageTypes>) {
  res.status(200).json(homeData);
}
