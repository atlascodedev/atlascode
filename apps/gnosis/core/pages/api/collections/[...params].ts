import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const API_BASE_URL = `${process.env.CLOUD_FUNCTION_BASE_URL}/collections/entries`;
const API_SECRET = `${process.env.CLOUD_FUNCTION_API_KEY}`;

const requestHasSecret = (queryObject: NextApiRequest['query']) =>
  Object.keys(queryObject).includes('secret');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  } else if (!requestHasSecret(req.query)) {
    return res
      .status(400)
      .json({ error: 'Request did not include required secret' });
  } else if (requestHasSecret(req.query) && req.query.secret !== API_SECRET) {
    return res
      .status(401)
      .json({ error: 'Invalid API key, the request is unauthorized' });
  } else if (req.query.params.length < 1) {
    return res.status(400).json({ error: 'Invalid request format' });
  } else {
    const params = req.query.params as string[];

    try {
      const request = await axios.get(`${API_BASE_URL}/${params.join('/')}`);

      return res.status(200).json({
        data: request.data,
      });
    } catch (error) {
      return res.status(500).json({
        error: {
          code: error.code,
          error: error.message,
        },
      });
    }
  }
}
