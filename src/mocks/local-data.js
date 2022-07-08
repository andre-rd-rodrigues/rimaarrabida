const program = {
  date: "QUIT 21 OUT",
  program: [
    {
      hour: "08:00 - 9:00",
      event: ["Abertura do Secretariado"],
      speakers: undefined
    },
    {
      hour: "09:00 - 10:00",
      event: [
        "Sessão Plenária - Que dor de cabeça! - Highlights sobre Cefaleias"
      ],
      speakers: ["Palestrante: Drª Andreia Costa"]
    },
    {
      hour: "10:00 - 12:00",
      event: [
        "Mesa Redonda",
        "Cuidados de Saúde Primários - Qual o futuro em Portugal ?"
      ],
      speakers: [
        "Palestrantes: Prof. Dr. Paulo Santos e Dr. Nuno Jacinto",
        "Moderadora: Profª Drª Luísa Sá"
      ]
    }
  ]
};
const faqs = [
  {
    question: "Qual o prazo das inscrições",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  },
  {
    question: "Qual o prazo das inscrições",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  }
];

const members = [
  {
    name: "Sofia Diogo",
    src: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  },
  {
    name: "Helena Abreu",
    src: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=800"
  }
];

export { program, faqs, members };
