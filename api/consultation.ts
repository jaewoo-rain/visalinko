// api/consultation.ts
import { MongoClient } from "mongodb";
import type { VercelRequest, VercelResponse } from "@vercel/node";

let cachedClient: MongoClient | null = null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) return res.status(500).json({ message: "Missing MONGODB_URI" });

        if (!cachedClient) {
            cachedClient = new MongoClient(uri);
            await cachedClient.connect();
        }

        // ✅ URI에 /onboarding 넣었으면 db("onboarding") 생략 가능
        const db = cachedClient.db("onboarding");
        const collection = db.collection("consultations");

        const result = await collection.insertOne({
            ...req.body,
            createdAt: new Date(),
        });

        return res.status(200).json({ success: true, id: result.insertedId });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false });
    }
}
