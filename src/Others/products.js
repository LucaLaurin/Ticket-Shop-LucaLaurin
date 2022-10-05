const products = [
  {
    id: 1,
    name: "Concierto",
    stock: 2000,
    cost: 6800,
    description: "Año a año #LollaAR se reafirma como la cita cultural más esperada por los argentinos. Por eso no sorprende que los fanáticos del festival hayan agotado las cinco instancias de preventa en tan solo unas pocas horas. ¡Los “Early Bird” y todos los tickets de preventa ya tienen dueños! La siguiente etapa de venta será tras el anuncio del lineup.",
    quantity: 1500,
    image: [
      "https://img.freepik.com/premium-psd/ticket-with-editable-color-mockup_149660-80.jpg?w=2000"
    ],
    sales: 0,
    categoryId: 1,
    reviews: []
  },
  {
    id: 12,
    name: "Teatro",
    stock: 100,
    cost: 3000,
    description: "El Teatro Colón presenta el ballet creado por John Cranko en 1965, basado en la novela Evgueny Oneguin de Alexander Pushkin, con música de la ópera de Tchaikovsky de 1879, arreglada y orquestada por Kurt-Heinz Stolze. Se trata de una obra que se incorporó al repertorio de las principales compañías del mundo y que interpretará el Ballet Estable junto a la Filarmónica de Buenos Aires. ",
    capacity: 1500,
    image: [
      "https://gitu.net/gituimg/free-psd-mockups-download/free-tickets-mockup-psd.jpg"
    ],
    sales: 0,
    categoryId: 2,
    brandId: 21,
    packingId: null,
    category: {
      name: "Teatro",
      id: 2
    },
    reviews: [
      {
        "comment": "",
        "rating": "4"
      }
    ]
  },
  {
    id: 13,
    name: "Evento",
    stock: 92,
    cost: 1450,
    description: "Forja Centro de Eventos anfitriona conciertos para una amplia gama de géneros de artistas como Belinda Gomez, habiendo dado la bienvenida a artistas como Ezequiel Arias, Themba, y Kollektiv Turmstrasse.",
    capacity: 750,
    image: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e1ffe888675889.5e4c0d5cb6051.jpg"
    ],
    sales: 0,
    categoryId: 3,
    brandId: 22,
    category: {
      name: "Forja",
      id: 3
    },
    reviews: []
  },
  {
    id: 14,
    name: "Fiestas",
    stock: 100,
    cost: 2500,
    description: "La Fiesta Nacional de la Cerveza es la versión argentina del Oktoberfest alemán. Se realiza cada mes de octubre desde 1963 en Villa General Belgrano, Córdoba. Este festival atrae a miles de turistas durante dos fines de semana consecutivos. ",
    capacity: 750,
    image: [
      "https://cdn.dribbble.com/users/4470607/screenshots/8525239/untitled-1_4x.jpg"
    ],
    sales: 0,
    categoryId: 4,
    brandId: 23,
    category: {
      name: "Oktoberfest",
      id: 4
    },
    reviews: []
  },
  
];

module.exports = {
  products,
}