import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== "GET") return res.status(405).end()

    const {lat, long} = req.query

    try {
        const places = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=50000&keyword=${process.env.GOOGLE_MAPS_QUERY}&key=${process.env.GOOGLE_API_KEY}`)
      
        const data =  places.data.results.slice(0, 4)

        res.status(200).json(data)
    } catch(err) {
        res.status(403).json({ err })
    } 
}