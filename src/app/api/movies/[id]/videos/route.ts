import { NextResponse } from 'next/server';
import axios from 'axios';

interface Video {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    try {
        // Ensure params are properly awaited
        const { id } = await params;

        if (!id) {
            return NextResponse.json(
                { error: 'Movie ID is required' },
                { status: 400 }
            );
        }

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
            params: {
                api_key: process.env.TMDB_API_KEY,
            }
        });

        // Filter for YouTube trailers and teasers
        const videos = response.data.results.filter((video: Video) =>
            video.site === 'YouTube' &&
            (video.type === 'Trailer' || video.type === 'Teaser')
        );

        return NextResponse.json(videos);
    } catch (error) {
        console.error('Error fetching movie videos:', error);
        return NextResponse.json(
            { error: 'Failed to fetch movie videos' },
            { status: 500 }
        );
    }
} 