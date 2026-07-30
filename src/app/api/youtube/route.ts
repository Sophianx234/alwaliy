import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache this route for 1 hour

export async function GET() {
  const channelId = 'UCLHtUNtO_mpI7q7dA3XRCmw';
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    const response = await fetch(feedUrl);
    if (!response.ok) throw new Error('Failed to fetch RSS feed');
    
    const xml = await response.text();
    
    // Very simple XML regex parsing to avoid adding dependencies
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const entries = [...xml.matchAll(entryRegex)];
    
    const videos = entries.map(entryMatch => {
      const entry = entryMatch[1];
      const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>(.*?)<\/title>/);
      
      return {
        id: videoIdMatch ? videoIdMatch[1] : null,
        title: titleMatch ? titleMatch[1] : 'Beautiful Recitation',
        description: "Experience the profound beauty of this recitation by Yaqub Alwaliy.",
        translation: "A beautiful recitation from the channel of Yaqub Alwaliy. Reflect upon the verses and find peace in the remembrance of Allah."
      };
    }).filter(v => v.id);

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching YouTube RSS", error);
    return NextResponse.json([], { status: 500 });
  }
}
