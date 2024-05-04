import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const res = await req.json();
    const index = res.index;
    if (typeof index !== "number" || index < 0 || index > 6) {
      throw new Error("Invalid index");
    }

    const t: any = await kv.get("keys");
    const obj = { ...t, [index]: t[index] + 1 };
    await kv.set("keys", obj);
    console.log(obj);

    return Response.json(obj);
  } catch (e: any) {
    console.error(e);
    return Response.json({ error: e }, { status: 500 });
  }
}
