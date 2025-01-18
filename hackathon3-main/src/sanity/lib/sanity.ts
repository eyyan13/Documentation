import {client} from "@/sanity/lib/client"

export async function getCars() {
  const cars = await client.fetch(`*[_type == "cars
    "]{
    name,
    type,
    specs,
    price,
    oldPrice,
    isFavorite,
    "image": image.asset->url
  }`)
  return cars
}

