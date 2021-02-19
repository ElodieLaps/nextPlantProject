// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export const token : string  = "E_3Wy2VspiI0ykCPxVnll0ha1x5XEBGbSavaOgaCwOI";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}

/*(async () => {
  const response = await axios.get(`https://trefle.io/api/v1/plants?token=${token}`);
  const json = await response.json();
  console.log(json);
})();*/
