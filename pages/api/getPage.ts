// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//Defining end points, joining sanity with project

import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Page } from '../../typings';

const query = groq`
    *[_type == "page"][0]
`;

type Data = {
    page: Page
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const page : Page = await sanityClient.fetch(query)
  res.status(200).json({ page })
}
