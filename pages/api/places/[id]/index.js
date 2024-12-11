// import { places } from "../../../../lib/db.js";
import Place from "@/db/models/Place.js";
import dbConnect from "@/db/connect.js";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.findById(id);
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ message: "Method not allowed!" });
  }

  // const place = places.find((place) => place.id === id);

  // if (!place) {
  //   response.status(404).json({ status: "Not found" });
  //   return;
  // }

  // response.status(200).json(place);
}
