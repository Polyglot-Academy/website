import { AcademyType } from '../../types/my-courses';
import { getFormattedDateTime } from '../../helpers/date-helper';

export const academyData: AcademyType = {
  academicStats: [
    {
      id: 1,
      title: 'Vendas totais',
      count: 'R$ 1145',
      new: 'Novo R$50',
      badgeColor: '#9E49E6',
      bgcolor: '#F5EDFC',
      icon: 'BiBasket',
    },
    {
      id: 2,
      title: 'Total de inscrições',
      count: '234',
      new: 'Novo 125',
      badgeColor: '#0A8FDC',
      bgcolor: '#E7F4FB',
      icon: 'FcGraduationCap',
    },
    {
      id: 3,
      title: 'Total de cursos',
      count: '130',
      new: 'Novo 5',
      badgeColor: '#F44D50',
      bgcolor: '#EDF8F0',
      icon: 'GiBookshelf',
    },
    {
      id: 4,
      title: 'Total de alunos',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#EAF7EE',
      icon: 'FcReading',
    },
  ],
  profile: {
    id: 1,
    profile_pic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcmUC96OhfxsSjyYVVZ5S7Ith_fRFidm8qA&s',
    name: 'Renato Nogueira',
    designation: 'Professor',
    achievements: 23,
    friends: 38,
  },
  notifications: [
    {
      id: 1,
      bgcolor: '#FEF1E4',
      color: '#F88333',
      letter: 'B',
      content: 'Você teve 1 aula em agosto',
      date: getFormattedDateTime(-5, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 2,
      bgcolor: '#DDEFFA',
      color: '#0A8FDC',
      letter: 'A',
      content: 'Toninho enviou uma mensagem para você',
      date: getFormattedDateTime(-10, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 3,
      bgcolor: '#FFE3EE',
      color: '#FE8EB9',
      letter: 'G',
      content: 'Você fez aula de Gramática Avançada - Parte 1',
      date: getFormattedDateTime(-15, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 4,
      bgcolor: '#E2F3E8',
      color: '#47B46B',
      letter: 'W',
      content: 'Você se registrou para Inglês básico',
      date: getFormattedDateTime(-25, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 5,
      bgcolor: '#FEE7E6',
      color: '#FCA7A4',
      letter: 'J',
      content: '@UNINOVE te enviouUmaMensagem',
      date: getFormattedDateTime(-50, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
    },
  ],
  latestResults: [
    {
      id: 1,
      chapter: 'Unidade 5',
      topic: 'Tempo Presente Simples',
      percentage: 25,
    },
    {
      id: 12,
      chapter: 'Unidade 12',
      topic: 'Vocabulário Avançado e Expressões Idiomáticas',
      percentage: 44,
    },
    {
      id: 9,
      chapter: 'Unidade 9',
      topic: 'Habilidades de Escuta e Compreensão Auditiva',
      percentage: 40,
    },
    {
      id: 8,
      chapter: 'Unidade 8',
      topic: ' Vida Cotidiana e Habilidades Sociais',
      percentage: 15,
    },
    {
      id: 16,
      chapter: 'Unidade 16',
      topic: 'Revisão e Avaliação',
      percentage: 76,
    },
    {
      id: 4,
      chapter: 'Unidade 4',
      topic: ' Descrição de Pessoas e Coisas',
      percentage: 25,
    },
    {
      id: 7,
      chapter: 'Unidade 7',
      topic: ' Tempo Futuro Simples',
      percentage: 15,
    },
    {
      id: 11,
      chapter: 'Unidade 11',
      topic: 'Estrutura de Frases Complexas',
      percentage: 76,
    },
  ],
  learningData: [
    {
      id: 1,
      icon: '/assets/my-courses/learning1.svg',
      title: 'Vocabulário e gramática',
      desc: 'Aprender o vocabulário básico e as estruturas gramaticais é fundamental para formar frases e entender o significado das palavras em diferentes contextos.',
      percentage: 57,
    },
    {
      id: 2,
      icon: '/assets/my-courses/learning2.svg',
      title: 'Prática de Escuta e Compreensão',
      desc: 'Expor-se regularmente ao inglês falado é essencial para desenvolver habilidades de compreensão auditiva. Isso pode ser feito assistindo a filmes, programas de TV, ouvindo músicas, podcasts e conversando com falantes nativos ou praticantes do idioma.',
      percentage: 43,
    },
    {
      id: 3,
      icon: '/assets/my-courses/learning3.svg',
      title: 'Leitura e Escrita',
      desc: ' Ler textos em inglês ajuda a melhorar o vocabulário, compreensão de leitura e gramática. Comece com materiais adequados ao seu nível de proficiência e aumente a complexidade à medida que avança.',
      percentage: 77,
    },
    {
      id: 4,
      icon: '/assets/my-courses/learning1.svg',
      title: 'Construção de Habilidades de Conversação.',
      desc: 'Praticar a conversação é essencial para se sentir confortável ao falar inglês. Procure oportunidades para conversar com falantes nativos ou outros aprendizes do idioma, participe de grupos de estudo, aulas de conversação ou sessões de intercâmbio linguístico.',
      percentage: 57,
    },
  ],
  classData: [
    {
      id: 1,
      name: 'Turma Regular de Manhã',
      percent: 96,
      icon: '/assets/my-courses/class.svg',
    },
    {
      id: 2,
      name: 'Turma Regular de Tarde',
      percent: 34,
      icon: '/assets/my-courses/class.svg',
    },
    {
      id: 3,
      name: 'Turma de Fim de Semana',
      percent: 65,
      icon: '/assets/my-courses/class.svg',
    },
    {
      id: 4,
      name: 'Turma Intensiva',
      percent: 23,
      icon: '/assets/my-courses/class.svg',
    },
    {
      id: 5,
      name: 'Aulas Particulares',
      percent: 87,
      icon: '/assets/my-courses/class.svg',
    },
  ],
  videoPromo: {
    title: 'DESIGN NA UNINOVE E O MUNDO CONTEMPORÂNEO',
    owner: 'Uninove',
    category: 'Português Brasil',
    assignments: [
      {
        id: 1,
        title: 'Coletando jargões em inglês.',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        students: 32,
        daysLeft: 1,
      },
      {
        id: 2,
        title: 'Explorando a linguagem empresarial culta!',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        students: 12,
        daysLeft: 2,
      },
    ],
  },
};
