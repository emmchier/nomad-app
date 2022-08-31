import type { NextApiRequest, NextApiResponse } from 'next';

import availableData from '../../../../data/hotels.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.status(200).json(availableData);
}
