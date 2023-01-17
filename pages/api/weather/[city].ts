// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CurrentWeather } from "openweather-api-node";

type Data = {
  currentWeather?: CurrentWeather;
};

// TODO: Add logic to get current weather by name
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json({});
}
