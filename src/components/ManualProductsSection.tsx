import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const products = [
  {
    id: 1,
    image: "/product1.jpg",
    impactBadge: "Made from 12 Plastic Bottles",
    category: "Plastic • Home Decor",
    name: "Ganesha Incense Burner",
    rating: 4.8,
    reviews: 34,
    source: "Sourced from Jimbaran beach cleanups",
    price: "Rp 15.000",
    description:
      "Transform your space into a sanctuary of peace and spirituality with this beautifully crafted Lord Ganesha incense burner. Perfect for meditation, yoga, or simply unwinding after a long day, this piece combines divine symbolism with a calming, aromatic experience.",
  },
  // {
  //   id: 2,
  //   image: "/earrings.jpg",
  //   impactBadge: "Upcycled Glass Beads",
  //   category: "Glass • Accessories",
  //   name: "Coral Reef Drop Earrings",
  //   rating: 4.9,
  //   reviews: 52,
  //   source: "Recycled from Ubud restaurant glass waste",
  //   price: "Rp 95.000",
  //   description:
  //     "Elegant drop earrings crafted from meticulously sorted and refined glass waste, inspired by Bali’s marine life.",
  // },
  // {
  //   id: 3,
  //   image: "/basket.jpg",
  //   impactBadge: "Woven from Textile Scraps",
  //   category: "Fabric • Home Decor",
  //   name: "Sunrise Storage Basket",
  //   rating: 4.7,
  //   reviews: 19,
  //   source: "Fabric offcuts from Denpasar garment factories",
  //   price: "Rp 220.000",
  //   description:
  //     "A vibrant and functional storage basket hand-woven from fabric scraps, adding a touch of sustainable warmth to your home.",
  // },
  {
    id: 4,
    image: "/product2.jpg",
    impactBadge: "Made from 10 Plastic Bottles",
    category: "Plastic • Accessories",
    name: "Balinese Keychain",
    rating: 4.6,
    source: "Collected from Sanur coastal cleanups",
    price: "Rp 12.000",
    description:
      "An exquisite high-relief keychain featuring a traditional Indonesian figure. This piece beautifully blends cultural heritage with detailed artisanal craftsmanship.",
  },
];

const categories = ["All", "Bags", "Accessories", "Home Decor"];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${i <= Math.round(rating) ? "text-primary" : "text-muted"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>,
    );
  }
  return <div className="flex space-x-0.5">{stars}</div>;
};

export const ManualProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  const filteredProducts = products.filter(
    (product) =>
      activeCategory === "All" || product.category.includes(activeCategory),
  );

  return (
    <section className="bg-transparent py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4 block">
          Eco-Catalog
        </p>
        {/* Menggunakan font-display untuk judul utama */}
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Shop the Impact
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Each piece is handcrafted by local Balinese artisans using upcycled
          waste — turning environmental burden into beauty.
        </p>
      </div>

      <div className="flex items-center justify-center space-x-3 mb-12 max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-card rounded-2xl shadow-sm overflow-hidden group border border-border flex flex-col"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {product.impactBadge}
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  {product.category}
                </p>
                {/* Menggunakan font-display untuk nama produk */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {product.source}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-foreground">
                  {product.price}
                </span>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <span>Details</span>
                    </button>
                  </DialogTrigger>
                  {selectedProduct && (
                    <DialogContent className="sm:max-w-3xl p-6 rounded-3xl bg-card">
                      {/* Menggunakan font-display untuk judul di pop-up */}
                      <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-muted-foreground">
                        {selectedProduct.description}
                      </p>
                    </DialogContent>
                  )}
                </Dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
