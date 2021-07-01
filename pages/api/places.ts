import Cors from 'cors';
import initMiddleware from '@libs/initMiddleware';
import axios from 'axios';

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  })
);

const searchURL = (searchString) =>
  `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}&input=${searchString}`;

export default async function handler(req, res) {
  await cors(req, res);
  const searchString = req.query.string || null;

  if (searchString) {
    const responseData = await axios.get(searchURL(searchString));
    res.json(responseData.data).status(200);
  }
  if (!searchString) {
    res.status(200);
  }
}
