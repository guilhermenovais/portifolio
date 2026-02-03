export const config = {
  name: 'Guilherme Novais',
  email: 'guilhermenovaisdesouza@proton.me',
  linkedin: 'https://linkedin.com/in/guilhermenovaisdesouza',
  github: 'https://github.com/guilhermenovais',
  whatsapp: 'https://wa.me/5531975747435',
  resumeEn: '/cv-guilherme-novais-de-souza-en.pdf',
  resumePt: '/cv-guilherme-novais-de-souza-pt.pdf',
};

export const projects = [
  {
    id: 1,
    title: {
      en: 'SISPEQ',
      pt: 'SISPEQ'
    },
    description: {
      en: 'A system for generating quality control reports for oil refineries',
      pt: 'Um sistema para gerar relatórios de controle de qualidade para refinarias de petróleo'
    },
    images: [
      '/projects/sispeq/1.jpg',
      '/projects/sispeq/2.jpg',
      '/projects/sispeq/3.jpg',
      '/projects/sispeq/4.jpg',
      '/projects/sispeq/5.jpg',
      '/projects/sispeq/6.jpg',
      '/projects/sispeq/7.jpg',
      '/projects/sispeq/8.jpg',
      '/projects/sispeq/9.jpg',
      '/projects/sispeq/10.jpg',
      '/projects/sispeq/11.jpg',
      '/projects/sispeq/12.jpg',
      '/projects/sispeq/13.jpg',
      '/projects/sispeq/14.jpg',
      '/projects/sispeq/15.jpg',
      '/projects/sispeq/16.jpg',
      '/projects/sispeq/17.jpg',
      '/projects/sispeq/18.jpg',
      '/projects/sispeq/19.jpg',
      '/projects/sispeq/20.jpg',
      '/projects/sispeq/21.jpg',
      '/projects/sispeq/22.jpg',
      '/projects/sispeq/23.jpg',
      '/projects/sispeq/24.jpg'
    ],
    github: 'https://github.com/guilhermenovais/sispeq-server'
  },
];

export const experiences = [
  {
    id: 1,
    title: {
      en: 'Backend Developer',
      pt: 'Desenvolvedor Backend'
    },
    company: 'Segware',
    period: {
      en: 'Sep 2024 - Present',
      pt: 'Set 2024 - Presente'
    },
    description: {
      en: 'Development of alarm and access control management systems, with a focus on equipment integrations and platform architectural improvements. My main contributions included:\n' +
          '• Implementing a new decoupled integrator model based on Kafka and REST APIs, eliminating direct database access and reducing coupling\n' +
          '• Fixing critical bugs in the legacy system, increasing stability and improving user experience\n' +
          '• Integrating three new devices into the system, expanding the set of supported equipment\n' +
          '• Creating a new screen for importing data from access control devices into the system, simplifying usage for operators',
      pt: 'Desenvolvimento de sistemas de gerenciamento de alarmes e controle de acesso, com foco em integrações com equipamentos e melhoria arquitetural da plataforma. Minhas principais contribuições foram:\n' +
          '• Implementar um novo modelo de integrador desacoplado, baseado em Kafka e API REST, eliminando acesso direto ao banco de dados e reduzindo acoplamento\n' +
          '• Corrigir bugs críticos no sistema legado, aumentando estabilidade e melhorando a experiência dos usuários\n' +
          '• Integrar três novos equipamentos ao sistema, ampliando o conjunto de dispositivos suportados\n' +
          '• Criar uma nova tela de importação de dados dos equipamentos de controle de acesso para o sistema, facilitando o uso pelos operadores'
    }
  },
  {
    id: 2,
    title: {
      en: 'Fullstack Developer',
      pt: 'Desenvolvedor Fullstack'
    },
    company: 'AGSinn',
    period: {
      en: 'May 2022 - Sep 2024',
      pt: 'Mai 2022 - Set 2024'
    },
    description: {
      en: 'Development of solutions tailored for businesses, with a focus on industrial access control. My main contributions include:\n' +
          '    • Working on the improvement of the access control systems offered by the company\n' +
          '    • Building integrations between systems\n' +
          '    • Refactoring the application of a self-service kiosk, increasing service speed and reducing bugs\n' +
          '    • Containerizing company applications, streamlining the deployment process\n' +
          '    • Implementing pipelines to automate the product deployment process\n' +
          '    • Developing configuration interfaces for some of the company\'s equipment, facilitating field operations',
      pt: 'Desenvolvimento de soluções direcionadas a empresas, com ênfase no controle de acesso a ambientes industriais. Minhas principais contribuições foram:\n' +
          '• Trabalhar na melhoria dos sistemas de controle de acesso oferecidos pela empresa\n' +
          '• Construir integrações entre sistemas\n' +
          '• Refatorar a aplicação de um totem de autoatendimento, aumentando a velocidade do atendimento e reduzindo bugs\n' +
          '• Containerizar aplicações da empresa, facilitando o processo de implantação\n' +
          '• Implementar pipelines para automatizar o processo de deploy dos produtos\n' +
          '• Desenvolver interfaces de configuração para alguns equipamentos da empresa, facilitando a operação em campo'
    }
  },
];

export const education = [
  {
    id: 1,
    course: {
      en: 'Bachelor of Information Systems',
      pt: 'Bacharelado em Sistemas de Informação'
    },
    institution: 'UFMG',
    period: {
      en: '2022 - Present',
      pt: '2022 - Presente'
    }
  },
  {
    id: 2,
    course: {
      en: 'Technical Course in Electronics',
      pt: 'Curso Técnico em Eletrônica'
    },
    institution: 'CEFET-MG',
    period: {
      en: '2019 - 2021',
      pt: '2019 - 2021'
    }
  },
];
