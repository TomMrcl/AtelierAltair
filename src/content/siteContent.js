const siteContent = {
  header: {
    brandName: "ATELIER ALTAÏR",
    navItems: [
      { label: "Accueil", href: "#home" },
      { label: "Galerie", href: "#gallery" },
      { label: "Artiste", href: "#artist" },
      { label: "Tarifs & FAQ", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
  },

  banner: {
    title: "ATELIER ALTAÏR",
    subtitle: "Artiste tatoueur • Créations uniques • Art corporel d'exception",
    quote:
      "Chaque tatouage raconte une histoire, laissez-moi donner vie à la vôtre",
    ctaPrimary: { label: "Voir mes créations", href: "#gallery" },
    ctaSecondary: { label: "Prendre rendez-vous", href: "#booking" },
    backgroundImage:
      "https://images.unsplash.com/photo-1611324980068-0f4b88c92550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
  },

  gallery: {
    heading: "Galerie",
    subtitle:
      "Découvrez une sélection de mes créations, chaque œuvre étant unique et personnalisée",
    works: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1623792085620-1f3160a255e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        title: "Portrait réaliste",
        description: "Tatouage portrait noir et gris",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1628969454009-843d2369e964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        title: "Géométrie sacrée",
        description: "Motifs géométriques minimalistes",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1616315615552-698be1341774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        title: "Traditional",
        description: "Style old school classique",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1571855618158-f2ea615c339a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        title: "Fleurs colorées",
        description: "Tatouage floral en couleur",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1566644447159-3a93334d2b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        title: "Mandala",
        description: "Mandala intricate noir",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1662524520209-b5af0398a8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
        title: "Blackwork détaillé",
        description: "Travail à l'encre noire",
      },
    ],
  },

  artist: {
    heading: "L'Artiste",
    paragraphs: [
      "Passionnée par l'art corporel depuis plus de 8 ans, je transforme chaque idée en une œuvre d'art unique et personnelle. Mon approche allie technique précise et créativité artistique pour donner vie à vos projets les plus ambitieux.",
      "Spécialisée dans le réalisme noir et gris, les créations géométriques et les compositions florales, j'accorde une importance particulière à l'écoute et à la collaboration avec mes clients pour créer des pièces qui leur ressemblent.",
      "Chaque tatouage est une aventure créative partagée, un moment privilégié où l'art rencontre l'émotion. Mon studio, situé dans le cœur artistique de la ville, offre un environnement chaleureux et professionnel pour vivre cette expérience en toute sérénité.",
    ],
    quote:
      "L'art du tatouage, c'est graver l'éternité sur la peau, créer du permanent dans un monde éphémère.",
    quoteAuthor: "— Atelier Altaïr",
    stats: [
      { value: "8+", label: "ANNÉES D'EXPÉRIENCE" },
      { value: "500+", label: "CRÉATIONS RÉALISÉES" },
      { value: "100%", label: "SATISFACTION CLIENT" },
    ],
    video: {
      src: "/example-video.mp4",
      poster:
        "https://images.unsplash.com/photo-1611324980068-0f4b88c92550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      alt: "Vidéo de présentation de l'artiste en action",
    },
  },

  availability: {
    heading: "Disponibilités",
    subtitle:
      "Consultez mes disponibilités et contactez-moi pour réserver votre session",
    intro:
      "Pour réserver, contactez-moi directement via Instagram ou par message",
    instagramUrl: "https://www.instagram.com/atelieraltair/",
    contactScrollId: "contact",
    cards: [
      {
        title: "Consultation gratuite",
        text: "Chaque projet commence par une consultation pour discuter de vos idées et définir ensemble votre tatouage.",
      },
      {
        title: "Acompte requis",
        text: "Un acompte de 30% est demandé pour confirmer votre rendez-vous. Celui-ci est non remboursable.",
      },
    ],
  },

  pricing: {
    heading: "Tarifs & FAQ",
    subtitle:
      "Informations sur les tarifs et réponses aux questions fréquentes",
    pricingGrid: [
      {
        category: "Petit tatouage",
        description: "5-10cm, simple",
        price: "80-150€",
        duration: "1-2h",
      },
      {
        category: "Tatouage moyen",
        description: "10-20cm, détaillé",
        price: "150-300€",
        duration: "2-4h",
      },
      {
        category: "Grand tatouage",
        description: "+20cm, complexe",
        price: "300€+",
        duration: "4h+",
      },
      {
        category: "Tarif horaire",
        description: "Pour projets sur mesure",
        price: "80€/h",
        duration: "Variable",
      },
    ],
    faq: [
      {
        q: "Comment prendre rendez-vous ?",
        a: "Vous pouvez prendre rendez-vous via le calendrier ci-dessus ou en utilisant le formulaire de contact. Une consultation préalable est recommandée pour les projets importants.",
      },
      {
        q: "Quel est le processus de création ?",
        a: "Après notre première consultation, je crée un design personnalisé basé sur vos idées. Nous affinons ensemble le projet jusqu'à validation, puis nous planifions la session.",
      },
      {
        q: "Comment se déroule la séance ?",
        a: "Chaque séance commence par la préparation de la zone et l'application du transfert. Je vous explique chaque étape et m'assure de votre confort tout au long du processus.",
      },
      {
        q: "Quels sont les soins post-tatouage ?",
        a: "Je vous fournis une fiche de soins détaillée et les recommandations pour la cicatrisation (nettoyage doux, crème, éviter soleil/piscine).",
      },
    ],
  },

  creations: {
    heading: "Créations",
    subtitle:
      "Découvrez mes œuvres artistiques, réalisées en parallèle de mon travail de tatoueuse",
    artworks: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1596952895609-43ad513b46c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Tableau abstrait",
        description: "Peinture acrylique sur toile",
        medium: "Acrylique",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1734548775981-a1add95a5a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Illustration aquarelle",
        description: "Aquarelle délicate",
        medium: "Aquarelle",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1689478817953-ae664a714cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Sculpture moderne",
        description: "Création tridimensionnelle",
        medium: "Sculpture",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1758521232750-909a8b065963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Dessin artistique",
        description: "Crayon et encre",
        medium: "Dessin",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1740508905751-0e6573f7216f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Mixed media",
        description: "Techniques mixtes",
        medium: "Mixte",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1646936190308-6faef1ac893c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        title: "Décoration murale",
        description: "Art moderne décoratif",
        medium: "Décoration",
      },
    ],
  },

  atelier: {
    heading: "L’atelier",
    paragraphs: [
      "Je vous accueille dans un atelier privé, pensé comme un lieu calme, intime et propice à la création. Chaque projet est réalisé dans une atmosphère sereine, loin de l’agitation des studios traditionnels.",
      "Ce cadre me permet de prendre le temps nécessaire pour échanger, créer et tatouer dans les meilleures conditions possibles, en toute confidentialité.",
    ],
    notice: {
      title: "Atelier privé – sur rendez-vous uniquement",
      text: "L’atelier n’est pas ouvert au public. Merci de ne pas vous présenter sans rendez-vous préalable. Toute prise de contact se fait via le formulaire ou Instagram.",
    },
    badges: ["Hygiène stricte", "Confidentialité", "Ambiance calme"],
  },

  contact: {
    heading: "Contact",
    subtitle: "Parlons de votre projet de tatouage",
    info: {
      email: "contact@atelieraltair.fr",
      instagramHandle: "@atelieraltair",
      hours: [
        "Lundi - Samedi : 10h - 19h",
        "Dimanche : Fermé",
        "Sur rendez-vous uniquement",
      ],
    },
  },

  footer: {
    brandName: "ATELIER ALTAÏR",
    city: "Lyon, France",
    addressLines: ["123 Rue de l'Art", "69000 Lyon, France"],
    phone: "+33 6 12 34 56 78",
    email: "contact@atelieraltair.fr",
    descriptionLines: [
      "Artiste tatoueur passionnée",
      "Créations uniques et personnalisées",
    ],
    socials: {
      instagram: "https://www.instagram.com/atelieraltair/",
      facebook: "#",
      tiktok: "#",
    },
    legalLinks: {
      mentions: "#",
      privacy: "#",
      cgv: "#",
    },
  },
};

export default siteContent;
