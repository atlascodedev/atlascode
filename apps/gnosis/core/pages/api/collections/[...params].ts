import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const API_BASE_URL = `${process.env.CLOUD_FUNCTION_BASE_URL}/collections/entries`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    console.log(req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  } else if (req.query.params.length < 1) {
    return res.status(400).json({ error: 'Invalid request format' });
  } else {
    const params = req.query.params;

    try {
      switch (params.length) {
        case 1: {   
          const request = await axios.get(`${API_BASE_URL}/${params[0]}`);

          return res.status(200).json({ data: request.data });
        }
        case 2: {
          const request = await axios.get(
            `${API_BASE_URL}/${params[0]}/${params[1]}`
          );

          return res.status(200).json({ data: request.data });
        }

        default: {
          return res.status(400).json({ error: 'Invalid request' });
        }
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
