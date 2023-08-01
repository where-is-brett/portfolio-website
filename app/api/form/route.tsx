import { NextResponse } from 'next/server';


const endpoint = "https://tt02xe5583.execute-api.us-east-2.amazonaws.com/dev/contact";
const apiKey = process.env.CONTACT_FORM_API_KEY as string;

export async function POST(req: Request, res: Response) {

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
            body: JSON.stringify(req.body),
        });
        if (response.ok) {
            const data = await response.json();
            return NextResponse.json({ data: data }, { status: 200 })
        } 
    } catch (error) {
        return NextResponse.json({ error: `An error occurred: ${error}` }, { status: 500 })
    }
}
