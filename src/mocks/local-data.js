const program = {
  date: "21 OUT",
  program: [
    {
      hour: "9:00",
      event: [
        "Sessão de boas vindas",
        "Projeto Anémona",
        "Sexologia em cuidados paliativos"
      ],
      speakers: undefined
    },
    {
      hour: "10:30",
      event: ["Coffee-break"],
      speakers: undefined
    },
    {
      hour: "11:00",
      event: [
        "Luto fisiológico vs patológico",
        "Apresentação de posters / comunicações orais"
      ],
      speakers: undefined
    },
    {
      hour: "13:00",
      event: ["Almoço"],
      speakers: undefined
    },
    {
      hour: "14:00",
      event: [
        "Comunicação e inteligência emocional",
        "Mesa redonda - “De internos para internos"
      ],
      speakers: undefined
    },
    {
      hour: "17:30",
      event: ["Entrega de prémios", "Sessão de encerramento"],
      speakers: undefined
    }
  ]
};
const faqs = [
  {
    question: "Em que formato será realizada a RIMA?",
    answer:
      "Formato online, via Microsoft Teams. As apresentações pretendem-se práticas e haverá espaço no final para discussão e esclarecimento de dúvidas."
  },
  {
    question: "Onde posso consultar o programa?",
    answer: 'Pode ser consultado no separador "Programa".'
  },
  {
    question: "Como me posso inscrever?",
    answer:
      "As inscrições são gratuitas mas obrigatórias. Encontram-se abertas e podem ser realizadas no botão INSCRIÇÕES."
  },
  {
    question: "Qual a população alvo?",
    answer:
      "A RIMA é direcionada a médicos especialistas e internos de Medicina Geral e Familiar, no entanto são todos bem-vindos! Médicos especialistas e internos de outras especialidades, médicos indiferenciados, internos de formação geral, estudantes de medicina, enfermeiros, fisioterapeutas, psicólogos e outros profissionais de saúde do ACeS Arrábida."
  },
  {
    question: "Os slides vão ser disponibilizados?",
    answer:
      "As apresentações autorizadas serão disponibilizadas aos participantes."
  },
  {
    question: "Como é realizado o controlo de presenças?",
    answer:
      "O controlo de presenças será efetuado mediante preenchimento do formulário de presença e satisfação que será disponibilizado no decorrer da reunião através do chat."
  },
  {
    question: "Como posso submeter um resumo?",
    answer:
      'No separador “Trabalhos" encontra-se o regulamento para a submissão de resumos.'
  },
  {
    question: "Como posso ficar a par de todas as novidades?",
    answer: "Através do nosso site e redes sociais."
  },
  {
    question: "Quais as datas chave?",
    answer: `Início de inscrição: 12/07/2022
      \nInício de submissão de resumos: 11/07/2022 às 00h00. 
      \nData-limite para submissão de resumos: 31/08/2022 às 23h59. 
      \nComunicação dos resultados aos autores: 01/10/2022 até às 23h59, via e-mail para o endereço eletrónico indicado no formulário de submissão.`
  }
];

const members = [
  {
    label: "Coordenação",
    people: [
      {
        name: "Joana Acevedo",
        src: "images/joana.jpeg"
      },
      {
        name: "Tiago Paulinho",
        src: "images/tiago.jpeg"
      }
    ]
  },
  {
    label: "Logística, comunicação e Imagem",
    people: [
      {
        name: "Alexandra Silva",
        src: "images/alexandra.jpeg"
      },
      {
        name: "Francisco Antunes",
        src: "images/francisco.jpeg"
      },
      {
        name: "João Soares",
        src: "images/joao.jpeg"
      },
      {
        name: "Sofia Diogo",
        src: "images/sofia.jpeg"
      },
      {
        name: "Sofia Franco",
        src: "images/sofiaFranco.jpeg"
      }
    ]
  },
  {
    label: "Científico",
    people: [
      {
        name: "Ana Braz",
        src: "images/ana.jpeg"
      },
      {
        name: "Joana Acevedo",
        src: "images/joana.jpeg"
      },
      {
        name: "Marta Rainho",
        src: "images/marta.jpeg"
      },
      {
        name: "Tiago Paulinho",
        src: "images/tiago.jpeg"
      }
    ]
  }
];

export { program, faqs, members };
