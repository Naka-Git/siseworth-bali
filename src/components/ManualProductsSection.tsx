import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Data produk dengan urutan terbaru (Handmade di atas, Eco-Plastic di bawah)
const products = [
  {
    id: 1,
    image: "/ganci-butterfly.jpeg",
    impactBadge: "Handmade",
    category: "Handmade • Keychains",
    name: "Ganci Butterfly",
    source: "Warna Ceria, Hati Bahagia",
    price: "Rp 2.500",
    description:
      "Ganci berbahan bulu lembut dengan bentuk kupu-kupu yang lucu dan penuh warna. Cocok untuk menghiasi tas, kunci, atau hadiah spesial untuk orang tersayang! Ringan, praktis, dan nyaman disentuh.",
  },
  {
    id: 2,
    image: "/ganci-mutt.jpeg",
    impactBadge: "Handmade",
    category: "Handmade • Keychains",
    name: "Ganci Muttt",
    source: "Warna Ceria, Hati Bahagia",
    price: "Rp 4.000",
    description:
      "Ganci berbahan bulu lembut dengan warna cerah yang bikin hari-harimu makin menyenangkan! Didesain agar ringan, praktis mudah dibawa, dan pastinya nyaman disentuh.",
  },
  {
    id: 3,
    image: "/ganci-jellyfish.jpeg",
    impactBadge: "Handmade with Love",
    category: "Handmade • Keychains",
    name: "Ganci Jelly Fish",
    source: "Manis • Lembut • Unik",
    price: "Rp 7.000",
    description:
      "Hadirkan gemerlap di setiap langkahmu dengan Ganci Jelly Fish. Memiliki desain unik berbentuk ubur-ubur yang manis dan lembut. Sangat cocok dijadikan hadiah spesial.",
  },
  {
    id: 4,
    image: "/ganci-cerrystar.jpeg",
    impactBadge: "Handmade with Love",
    category: "Handmade • Keychains",
    name: "Ganci Cerry Star",
    source: "Manis • Lembut • Unik",
    price: "Rp 8.000",
    description:
      "Perpaduan bentuk bintang dan ceri yang manis dalam satu gantungan kunci yang lembut. Desain uniknya siap menemani setiap langkahmu dengan gemerlap yang menawan.",
  },
  {
    id: 5,
    image: "/bloom-pot.jpeg",
    impactBadge: "Bisa Req Warna",
    category: "Handmade • Home Decor",
    name: "Bloom Pot",
    source: "Bunga indah, hati bahagia.",
    price: "Mulai Rp 25.000",
    description:
      "Bunga handmade yang dibuat dengan detail dan penuh cinta. Anda bisa request bunga dan warna sesuai keinginan. Sangat cocok untuk hadiah atau sekadar menghiasi ruanganmu agar terasa segar dan elegan. Pengemasan aman dan rapi.",
  },
  {
    id: 6,
    image: "/orchid-bloom-vase.jpeg",
    impactBadge: "Bisa Req Warna",
    category: "Handmade • Home Decor",
    name: "Orchid Bloom Vase",
    source: "Cantik alami, hadirkan kehangatan.",
    price: "Mulai Rp 35.000",
    description:
      "Anggrek handmade berkualitas yang dirangkai indah dalam vas. Hadirkan kehangatan di setiap sudut ruanganmu. Anda juga bisa request warna bunga sesuai keinginan. Pilihan tepat untuk kado berkesan.",
  },
  {
    id: 7,
    image: "/bloom-bag.jpeg",
    impactBadge: "Banyak Pilihan",
    category: "Handmade • Gifts",
    name: "Bloom Bag",
    source: "Keindahan dalam momen spesial.",
    price: "Rp 5.000 - 12.000",
    description:
      "Hadirkan keindahan bunga dalam setiap momen spesialmu dengan Bloom Bag. Praktis, tidak mudah layu, tahan lama, dan hadir dalam berbagai pilihan warna cantik. Harga sangat terjangkau!",
  },
  {
    id: 8,
    image: "/product1.jpg",
    impactBadge: "12 Plastic Bottles",
    category: "Eco-Plastic • Home Decor",
    name: "Ganesha Incense Burner",
    source: "Sourced from Jimbaran beach cleanups",
    price: "Rp 15.000",
    description:
      "Transform your space into a sanctuary of peace and spirituality with this beautifully crafted Lord Ganesha incense burner. Perfect for meditation, yoga, or simply unwinding after a long day, this piece combines divine symbolism with a calming, aromatic experience.",
  },
  {
    id: 9,
    image: "/product2.jpg",
    impactBadge: "10 Plastic Bottles",
    category: "Eco-Plastic • Keychains",
    name: "Balinese Keychain",
    source: "Collected from Sanur coastal cleanups",
    price: "Rp 12.000",
    description:
      "An exquisite high-relief keychain featuring a traditional Indonesian figure. This piece beautifully blends cultural heritage with detailed artisanal craftsmanship.",
  },
];

const categories = ["All", "Keychains", "Home Decor", "Gifts", "Eco-Plastic"];

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
          Our Collection
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Handcrafted with Love
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Setiap produk dibuat dengan detail dan penuh cinta untuk menghadirkan
          keindahan di keseharian Anda — sekaligus menjaga kelestarian
          lingkungan kita.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-card rounded-3xl shadow-sm overflow-hidden group border border-border flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                {product.impactBadge}
              </span>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-2">
                  {product.category}
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                  {product.source}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                <span className="text-lg font-bold text-foreground">
                  {product.price}
                </span>

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center justify-center bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      Detail
                    </button>
                  </DialogTrigger>

                  {selectedProduct && (
                    <DialogContent className="sm:max-w-2xl p-0 rounded-3xl bg-card overflow-hidden border-0">
                      <div className="grid md:grid-cols-2">
                        <div className="aspect-[3/4] md:aspect-auto md:h-full bg-muted">
                          <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <span className="text-xs text-primary font-semibold uppercase tracking-widest mb-2 block">
                            {selectedProduct.category}
                          </span>
                          <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                            {selectedProduct.name}
                          </h2>
                          <span className="inline-block bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full mb-6 w-fit">
                            {selectedProduct.price}
                          </span>
                          <p className="text-muted-foreground leading-relaxed">
                            {selectedProduct.description}
                          </p>
                        </div>
                      </div>
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
