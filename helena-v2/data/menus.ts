export type Locale = "fr" | "en";

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type MenuTab = {
  id: "business-lunch" | "a-la-carte" | "discovery";
  label: string;
  blurb: string;
  note?: string;
  sections?: MenuSection[];
};

export type MenusPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  tabs: MenuTab[];
};

export const menusContent: Record<Locale, MenusPageContent> = {
  fr: {
    eyebrow: "Menus",
    title: "Nos menus",
    intro:
      "Tous nos menus s'inspirent des traditions portugaises. Chef Helena et son équipe vous proposent une cuisine à la fois savoureuse et moderne.\n\nNos ingrédients proviennent d'agricultures et de pêches responsables et locales, ce qui vous assure des produits d'une fraîcheur absolue dans votre assiette, peu importe la saison.",
    tabs: [
      {
        id: "business-lunch",
        label: "Lunch d’affaires",
        blurb:
          "L'heure du lunch au Helena, c'est un menu spécialement élaboré pour notre clientèle d'affaires. Convivial et abordable, notre table d'hôte du midi est servie dans une atmosphère qui favorise les échanges.\n\nAccompagnez votre repas d'un délicieux vin au verre Portugais et vous serez en «business».",
        note:
          "Table d'hôte 2 services incluant un choix de soupe ou salade et un plat principal (viande, poisson, spécialité portugaise)\n\n39$ par personne, ajoutez un dessert pour seulement 10$",
      },
      {
        id: "a-la-carte",
        label: "À la carte",
        blurb:
          "Seuls nos plus grands classiques se retrouvent sur le menu à la carte.\n\nVous y trouverez des repas parfaitement maitrisés qui font notre réputation depuis plus de 10 ans.\n\nLe plus difficile sera d'y faire votre choix.",
        sections: [
          {
            title: "Sopas & Saladas",
            items: [
              {
                name: "Salada de espargos",
                description:
                  "Asperges, amandes, fromage São Jorge & serrano, vinaigrette à l’érable",
                price: "25",
              },
              {
                name: "Bife de filé mignon com molho de sardinhas",
                description:
                  "Carpaccio de boeuf, vinaigrette aux sardines, sardines, câpres, chips de serrano, croûtons",
                price: "25",
              },
              {
                name: "Salada Helena",
                description:
                  "Salade composée du moment avec les arrivages de saison",
                price: "25",
              },
              {
                name: "Prato de Presunto Serrano",
                description: "Assiette de jambon serrano",
                price: "24",
              },
              {
                name: "Caldo Verde",
                description:
                  "Soupe portugaise avec pommes de terre, kale et chouriço",
                price: "12",
              },
            ],
          },
          {
            title: "Tapas Quentes",
            items: [
              {
                name: "Pasteis de bacalhau (4)",
                description: "Croquettes de morue & aïoli au piri-piri",
                price: "16",
              },
              {
                name: "Polvo grelhado",
                description:
                  "Pieuvre grillée, espuma de pommes de terre, poivrons & olives",
                price: "30",
              },
              {
                name: "Filetes de sardinhas assadas",
                description:
                  "Filet de sardines grillées, nage d’épinards, huile de tomates épicée et tapenade de tomate",
                price: "22",
              },
              {
                name: "Lulas & camarão grelhado",
                description:
                  "Tagliatelle de calmars & crevettes grillées dans sa sauce à l’ail",
                price: "28",
              },
              {
                name: "Vieiras salteadas",
                description:
                  "Pétoncles U-10, foie gras poêlé, purée d’artichauts et chips de serrano",
                price: "30",
              },
            ],
          },
          {
            title: "Peixes",
            items: [
              {
                name: "Bacalhau à Gomes de Sá",
                description:
                  "Effiloché de morue salée, pommes de terre, copeaux de jaune d’oeuf fumé, huile de persil, blancs d’oeufs durs",
                price: "44",
              },
              {
                name: "Bacalhau preto do Alaska",
                description:
                  "Morue noire d’Alaska servie avec légumes du moment, sauce au safran du Québec",
                price: "50",
              },
              {
                name: "Prato do pescador para 2 pessoas",
                description:
                  "Fruits de mer grillés pour 2 personnes. Pétoncles U-10, calmars, pieuvre, crevette géante, moules, palourdes, sauce à l’ail & piri-piri",
                price: "140",
              },
              {
                name: "Arrivages du marché & du Portugal",
                price: "Prix du marché",
              },
            ],
          },
          {
            title: "Carnes",
            items: [
              {
                name: "Lombo de vaca grelhado",
                description:
                  "Filet mignon de boeuf, croûte de champignons, polenta à la truffe, sauce porto & échalotes",
                price: "65",
              },
              {
                name: "Sela de borrego",
                description:
                  "Carré d'agneau du Québec grillé, légumes du soleil, caviar d’aubergine et sauce à la sauge",
                price: "65",
              },
              {
                name: "Naco de carne com assa para 2 pessoas",
                description:
                  "Tomahawk: Côte de boeuf Angus AAA grillée, servi pour 2 personnes",
                price: "Prix du marché",
              },
            ],
          },
          {
            title: "Vegetarianos",
            items: [
              {
                name: "Arroz com truffas",
                description:
                  "Riz infusé aux champignons, poêlée de champignons sauvages, truffe et fromage São Jorge",
                price: "42",
              },
            ],
          },
        ],
      },
      {
        id: "discovery",
        label: "Formule découverte",
        blurb:
          "Explorez les délices de la cuisine portugaise à travers notre menu découverte. Des saveurs riches qui vous transporteront de la mer aux montagnes et où chaque plat dévoile l'essence vibrante du Portugal. Laissez-vous guider par ce voyage gastronomique.",
        note:
          "Repas 9 services composé de tapas, d'entrées, d'un plat de poissons, d'un plat de viande et d'un dessert.\n\nÀ partir de 100$ par personne, accord mets-vin + 60$ par personne",
      },
    ],
  },
  en: {
    eyebrow: "Menus",
    title: "Our menus",
    intro:
      "All our menus are inspired by Portuguese traditions. Chef Helena and her team offer a cuisine that is both tasty and modern.\n\nOur ingredients are sourced from responsible, local farms and fisheries, meaning always the freshest products in your plate, no matter the season.",
    tabs: [
      {
        id: "business-lunch",
        label: "Business lunch",
        blurb:
          "Helena's lunchtime menu is specially designed for our business clientele. Convivial and affordable, our lunchtime table d'hôte is served in an atmosphere that encourages conversation.\n\nPair your meal with a delicious Portuguese wine by the glass for the perfect lunch.",
        note:
          "2-course table d'hôte including a choice of soup or salad and a main course (meat, fish, Portuguese specialty)\n\n$39 per person, add a dessert for only $10",
      },
      {
        id: "a-la-carte",
        label: "À la carte menu",
        blurb:
          "Only our greatest classics are featured on the à la carte menu.\n\nYou'll find perfectly mastered meals that have made our reputation for over 10 years.\n\nThe hardest part will be choosing",
        sections: [
          {
            title: "Sopas & Saladas",
            items: [
              {
                name: "Salada de espargos",
                description:
                  "Asparagus, almonds, cheese & Serrano, maple vinaigrette",
                price: "25",
              },
              {
                name: "Salada Helena",
                description: "Salad of the moment with arrivals",
                price: "25",
              },
              {
                name: "Bife de filé mignon com molho de sardinhas",
                description:
                  "Filet mignon carpaccio served cold with sardines sauce, capers and mustard leaves",
                price: "25",
              },
              {
                name: "Prato de Presunto Serrano",
                description: "Serrano ham platter",
                price: "24",
              },
              {
                name: "Caldo verde",
                description:
                  "Portuguese soup with potatoes, pork chouriço, kale & olive oil",
                price: "12",
              },
            ],
          },
          {
            title: "Tapas Quentes",
            items: [
              {
                name: "Pasteis de bacalhau (4)",
                description: "Cod fritters, aïoli & piri-piri sauce",
                price: "16",
              },
              {
                name: "Polvo grelhado",
                description: "Grilled octopus, potatoes espuma, olives and peppers",
                price: "30",
              },
              {
                name: "Filetes de sardinhas assadas",
                description:
                  "Grilled sardine fillet, spinach nage, spicy tomato oil and tomato tapenade",
                price: "22",
              },
              {
                name: "Lulas & camarão grelhado",
                description:
                  "Tagliatelle of squid & grilled shrimp in garlic sauce",
                price: "28",
              },
              {
                name: "Vieiras salteadas",
                description:
                  "U-10 scallops, pan-fried foie gras, artichoke purée and serrano chips",
                price: "30",
              },
            ],
          },
          {
            title: "Peixes",
            items: [
              {
                name: "Bacalhau à Gomes de Sá",
                description:
                  "Shredded salted cod, potatoes, smoked egg yolk shavings, parsley oil, hard-boiled egg whites",
                price: "44",
              },
              {
                name: "Bacalhau preto do Alaska",
                description:
                  "Alaskan black cod served with seasonal vegetables, Quebec saffron sauce",
                price: "50",
              },
              {
                name: "Prato do pescador para 2 pessoas",
                description:
                  "Grilled seafood for 2: octopus, calamari, scallops, clams, mussels & shrimps. Garlic sauce & piri-piri.",
                price: "140",
              },
              {
                name: "Catch of the day from Portugal",
                price: "Market price",
              },
            ],
          },
          {
            title: "Carnes",
            items: [
              {
                name: "Lombo de vaca grelhado",
                description:
                  "Grilled beef filet mignon, vegetables, potatoes & mushroom sauce",
                price: "65",
              },
              {
                name: "Sela de borrego",
                description: "Quebec rack of lamb, herb crust, porto sauce",
                price: "65",
              },
              {
                name: "Naco de carne com assa para 2 pessoas",
                description: "Tomahawk: Grilled AAA Angus prime rib. Served for 2 people",
                price: "Market price",
              },
            ],
          },
          {
            title: "Vegetarianos",
            items: [
              {
                name: "Arroz com truffas",
                description:
                  "Rice infused with mushrooms, pan-fried wild mushrooms, truffle and São Jorge cheese",
                price: "42",
              },
            ],
          },
        ],
      },
      {
        id: "discovery",
        label: "Discovery menu",
        blurb:
          "Explore the delights of Portuguese cuisine with our discovery menu. Rich flavors that will transport you from the sea to the mountains, where each dish reveals the vibrant essence of Portugal. Let yourself be guided on a gastronomic journey.",
        note:
          "9-course meal featuring tapas, appetizers, a fish dish, meat course and dessert.\n\nFrom $100 per person, wine pairing + $60 per person",
      },
    ],
  },
};
