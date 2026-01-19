// // /api/consultation.ts
// import { MongoClient } from "mongodb";
// import type { VercelRequest, VercelResponse } from "@vercel/node";
// import axios from "axios";

// let client: MongoClient | null = null;

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ message: "Method Not Allowed" });
//     }

//     try {
//         if (!client) {
//             client = new MongoClient(process.env.MONGODB_URI!);
//             await client.connect();
//         }

//         const db = client.db("onboarding");
//         const collection = db.collection("consultations");

//         await collection.insertOne({
//             ...req.body,
//             createdAt: new Date(),
//         });

//         return res.status(200).json({ success: true });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ success: false });
//     }
// }

// export async function submitConsultation(data: any) {
//     return axios.post("/api/consultation", data);
// }