import Place from "@/pages/db/models/Place";
// import { places } from "../../../lib/db";
import dbConnect from "@/pages/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ message: "Method not allowed!" });
  }
  // response.status(200).json(places);
  return;
}
