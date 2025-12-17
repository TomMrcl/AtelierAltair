const items = [
  "https://images.unsplash.com/photo-1623792085620-1f3160a255e2?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1628969454009-843d2369e964?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616315615552-698be1341774?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571855618158-f2ea615c339a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566644447159-3a93334d2b6f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1662524520209-b5af0398a8b3?q=80&w=1200&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32" style={{background:"#F4F8F5"}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl mb-4" style={{color:"#2F5640",fontFamily:"var(--font-serif)"}}>
            Galerie
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez une sélection de mes créations, chacune unique et personnalisée.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl border hover:shadow-lg transition-shadow">
              <img src={src} alt={`tattoo-${i}`} className="w-full h-full object-cover aspect-square" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
