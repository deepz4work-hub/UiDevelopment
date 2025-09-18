const products = [
  { id:1, name: "Wireless Headphones", price: "$59.99" },
  { id:2, name: "Smart Watch", price: "$129.99" },
  { id:3, name: "Gaming Mouse", price: "$39.99" },
  { id:4, name: "Mechanical Keyboard", price: "$89.99" },
  { id:5, name: "4K Monitor", price: "$399.99" },
  { id:6, name: "Bluetooth Speaker", price: "$49.99" },
]

export default function Home(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(p=>(
          <div key={p.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition">
            <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center rounded">📦</div>
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-600">{p.price}</p>
            <button className="mt-2 bg-yellow-400 px-4 py-2 rounded text-black font-semibold hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
