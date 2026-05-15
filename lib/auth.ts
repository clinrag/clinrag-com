import { createHmac } from "crypto";

const SECRET = process.env.ADMIN_SECRET || "clinrag-admin-secret-2024";

export interface AdminToken {
  id: string;
  role: string;
  exp: number;
}

export function signToken(user: { id: string; role: string }): string {
  const payload: AdminToken = {
    ...user,
    exp: Date.now() + 24 * 60 * 60 * 1000,
  };
  const data = Buffer.from(JSON.stringify(payload));
  const sig = createHmac("sha256", SECRET).update(data).digest("hex");
  return `${data.toString("base64")}.${sig}`;
}

export function verifyToken(token: string): AdminToken | null {
  try {
    const [b64, sig] = token.split(".");
    const expectedSig = createHmac("sha256", SECRET).update(Buffer.from(b64, "base64")).digest("hex");
    if (sig !== expectedSig) return null;
    const payload: AdminToken = JSON.parse(Buffer.from(b64, "base64").toString());
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USER || "admin",
  password: process.env.ADMIN_PASS || "clinrag2024",
};
