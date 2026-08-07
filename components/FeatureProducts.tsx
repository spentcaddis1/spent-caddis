export default function FeatureProducts() {
  const products = [
    {
      name: "Premium Dry Fly Hooks",
      price: "$9.99",
      image: "/logos 2.png",
    },
    {
      name: "GSP Thread",
      price: "$5.99",
      image: "/logos 3.png",
    },
    {
      name: "CDC Feathers",
      price: "$14.99",
      image: "/logos 4.png",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Products
        </h2>

        <p className="text-center text-gray-500 text-xl mb-16">
          Quality materials trusted by fly tyers everywhere.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {product.name}
                </h3>

                <p className="text-green-700 font-bold text-2xl mt-3">
                  {product.price}
                </p>

                <button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}