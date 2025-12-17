export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-wider" style={{fontFamily:"var(--font-serif)"}}>
          ATELIER ALTAÏR
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          {["Accueil","Galerie","Artiste","Tarifs & FAQ","Contact"].map((label,i)=>(
            <a key={i} href={["#home","#gallery","#artist","#pricing","#contact"][i]} className="hover:underline">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
