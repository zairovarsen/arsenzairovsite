// import { NextResponse, type NextRequest } from 'next/server';
import { getTopTracks } from 'lib/spotify';
import { TopTracks } from 'lib/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<TopTracks>) {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name
  }));

  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({tracks});
}
