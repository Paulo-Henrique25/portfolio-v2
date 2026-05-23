const baseUrl = import.meta.env.BASE_URL

export const projects = [
  {
    title: 'Union Polls',
    description:
      'Aplicação de enquetes desenvolvida com foco em interface responsiva, organização visual e experiência do usuário.',
    technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
    demoUrl: 'https://union-polls.vercel.app/',
    codeUrl: 'https://github.com/Paulo-Henrique25/union-polls',
    imageUrl: `${baseUrl}projects/union-polls.png`,
    featured: true,
  },
  {
    title: 'Conversor de Moedas',
    description:
      'Projeto para conversão de moedas, praticando consumo de dados, manipulação de valores e construção de interface simples e funcional.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://paulo-henrique25.github.io/Projeto-conversor-de-moedas/',
    codeUrl: 'https://github.com/Paulo-Henrique25/Projeto-conversor-de-moedas',
    imageUrl: `${baseUrl}projects/conversor-moedas.png`,
    featured: false,
  },
  {
    title: 'Jokenpô',
    description:
      'Jogo de pedra, papel e tesoura desenvolvido para praticar lógica de programação, eventos no JavaScript e manipulação do DOM.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://paulo-henrique25.github.io/Projeto-Joken-P-/',
    codeUrl: 'https://github.com/Paulo-Henrique25/Projeto-Joken-P-',
    imageUrl: `${baseUrl}projects/jokenpo.png`,
    featured: false,
  },
  {
    title: 'Dublador de Idiomas',
    description:
      'Projeto de estudo desenvolvido durante treinamento, com foco em JavaScript, consumo de API de tradução, reconhecimento de voz e síntese de fala.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    demoUrl: 'https://paulo-henrique25.github.io/projeto-dublador-idioma/',
    codeUrl: 'https://github.com/Paulo-Henrique25/projeto-dublador-idioma',
    imageUrl: `${baseUrl}projects/dublador-idiomas.png`,
    featured: false,
  },
]