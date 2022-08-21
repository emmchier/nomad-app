import type { NextApiRequest, NextApiResponse } from 'next';

import { Availability } from '../../../../interfaces/index';
import availableData from '../../../../data/hotels.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<Availability>) {
  res.status(200).json(availableData);
}
