import type { NextApiRequest, NextApiResponse } from 'next';

import { NavLink } from '../../../interfaces/index';
import navLinks from '../../../data/nav.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<NavLink[]>) {
  res.status(200).json(navLinks);
}
