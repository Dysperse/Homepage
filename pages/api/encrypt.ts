import Base64 from "crypto-js/enc-base64";
import hmacSHA512 from "crypto-js/hmac-sha512";

export default function handler(req: any, res: any) {
  // dw we're not stupid 😜
  const password = "1234";
  const hmacDigest = Base64.stringify(
    hmacSHA512(req.query.data.substring(0, 500), password)
  );

  res.status(200).json(hmacDigest);
}
