import { createClient } from '@sanity/client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const client = createClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:"production",
    apiVersion:"v2024-12-31",
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

async function getProducts() {
  return await client.fetch(`
    *[_type == "product"] {
      _id,
      name,
      price,
      description,
      "imageUrl": image.asset->url
    }
  `)
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <Card key={product._id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-2">${product.price}</p>
              <p className="text-gray-600">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

