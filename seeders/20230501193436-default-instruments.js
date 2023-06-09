'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Instruments', [{
      name: 'Adufe',
      type: 'Percussão',
    },
    {
      name: 'Afoxé',
      type: 'Percussão',
    },
    {
      name: 'Agogô',
      type: 'Percussão',
    },
    {
      name: 'Atabaque',
      type: 'Percussão',
    },
    {
      name: 'Batá',
      type: 'Percussão',
    },
    {
      name: 'Bateria',
      type: 'Percussão',
    },
    {
      name: 'Bendir',
      type: 'Percussão',
    },
    {
      name: 'Bloco Sonoro',
      type: 'Percussão',
    },
    {
      name: 'Bodhrán',
      type: 'Percussão',
    },
    {
      name: 'Bombo',
      type: 'Percussão',
    },
    {
      name: 'Bongô',
      type: 'Percussão',
    },
    {
      name: 'Caixa',
      type: 'Percussão',
    },
    {
      name: 'Caixa de Rufo',
      type: 'Percussão',
    },
    {
      name: 'Caneca',
      type: 'Percussão',
    },
    {
      name: 'Carrilhão',
      type: 'Percussão',
    },
    {
      name: 'Castanhola',
      type: 'Percussão',
    },
    {
      name: 'Caxixi',
      type: 'Percussão',
    },
    {
      name: 'Celesta',
      type: 'Percussão',
    },
    {
      name: 'Ceramofone',
      type: 'Percussão',
    },
    {
      name: 'Chocalho',
      type: 'Percussão',
    },
    {
      name: 'Conga',
      type: 'Percussão',
    },
    {
      name: 'Cuíca',
      type: 'Percussão',
    },
    {
      name: 'Djembê',
      type: 'Percussão',
    },
    {
      name: 'Ferruco',
      type: 'Percussão',
    },
    {
      name: 'Ganzá',
      type: 'Percussão',
    },
    {
      name: 'Gongo',
      type: 'Percussão',
    },
    {
      name: 'Hang Drum',
      type: 'Percussão',
    },
    {
      name: 'Maracas',
      type: 'Percussão',
    },
    {
      name: 'Marimba',
      type: 'Percussão',
    },
    {
      name: 'Matraca',
      type: 'Percussão',
    },
    {
      name: 'Metalofone',
      type: 'Percussão',
    },
    {
      name: 'Pandeireta',
      type: 'Percussão',
    },
    {
      name: 'Pandeiro',
      type: 'Percussão',
    },
    {
      name: 'Pratos',
      type: 'Percussão',
    },
    {
      name: 'Reco-reco',
      type: 'Percussão',
    },
    {
      name: 'Repinique',
      type: 'Percussão',
    },
    {
      name: 'Ronca',
      type: 'Percussão',
    },
    {
      name: 'Sarronca',
      type: 'Percussão',
    },
    {
      name: 'Sino',
      type: 'Percussão',
    },
    {
      name: 'Surdo',
      type: 'Percussão',
    },
    {
      name: 'Tabla',
      type: 'Percussão',
    },
    {
      name: 'Taiko',
      type: 'Percussão',
    },
    {
      name: 'Tambor',
      type: 'Percussão',
    },
    {
      name: 'Tamborim',
      type: 'Percussão',
    },
    {
      name: 'Tantã',
      type: 'Percussão',
    },
    {
      name: 'Tarol',
      type: 'Percussão',
    },
    {
      name: 'Tímpano',
      type: 'Percussão',
    },
    {
      name: 'Tom-tom',
      type: 'Percussão',
    },
    {
      name: 'Triângulo',
      type: 'Percussão',
    },
    {
      name: 'Vibrafone',
      type: 'Percussão',
    },
    {
      name: 'Xequerê',
      type: 'Percussão',
    },
    {
      name: 'Xilofone',
      type: 'Percussão',
    },
    {
      name: 'Zabumba',
      type: 'Percussão',
    },
    {
      name: 'Acordeão',
      type: 'Sopro',
    },
    {
      name: 'Bombardino',
      type: 'Sopro',
    },
    {
      name: 'Clarim',
      type: 'Sopro',
    },
    {
      name: 'Clarinete',
      type: 'Sopro',
    },
    {
      name: 'Clarone',
      type: 'Sopro',
    },
    {
      name: 'Concertina',
      type: 'Sopro',
    },
    {
      name: 'Contrafagote',
      type: 'Sopro',
    },
    {
      name: 'Corne',
      type: 'Sopro',
    },
    {
      name: 'Corneta',
      type: 'Sopro',
    },
    {
      name: 'Didjeridu',
      type: 'Sopro',
    },
    {
      name: 'Duduk',
      type: 'Sopro',
    },
    {
      name: 'Dung Chen',
      type: 'Sopro',
    },
    {
      name: 'Escaleta',
      type: 'Sopro',
    },
    {
      name: 'Fagote',
      type: 'Sopro',
    },
    {
      name: 'Flauta',
      type: 'Sopro',
    },
    {
      name: 'Flautim',
      type: 'Sopro',
    },
    {
      name: 'Fliscorne',
      type: 'Sopro',
    },
    {
      name: 'Gaita',
      type: 'Sopro',
    },
    {
      name: 'Gaita de Foles',
      type: 'Sopro',
    },
    {
      name: 'Harmônica',
      type: 'Sopro',
    },
    {
      name: 'Oboé',
      type: 'Sopro',
    },
    {
      name: 'Ocarina',
      type: 'Sopro',
    },
    {
      name: 'Órgão',
      type: 'Sopro',
    },
    {
      name: 'Quena',
      type: 'Sopro',
    },
    {
      name: 'Requinta',
      type: 'Sopro',
    },
    {
      name: 'Sanfona',
      type: 'Sopro',
    },
    {
      name: 'Saxofone',
      type: 'Sopro',
    },
    {
      name: 'Sousafone',
      type: 'Sopro',
    },
    {
      name: 'Trombeta',
      type: 'Sopro',
    },
    {
      name: 'Trombone',
      type: 'Sopro',
    },
    {
      name: 'Trompa',
      type: 'Sopro',
    },
    {
      name: 'Trompete',
      type: 'Sopro',
    },
    {
      name: 'Tuba',
      type: 'Sopro',
    },
    {
      name: 'Zurna',
      type: 'Sopro',
    },
    {
      name: 'Alaúde',
      type: 'Cordas',
    },
    {
      name: 'Baixo',
      type: 'Cordas',
    },
    {
      name: 'Balalaica',
      type: 'Cordas',
    },
    {
      name: 'Bandola',
      type: 'Cordas',
    },
    {
      name: 'Bandolim',
      type: 'Cordas',
    },
    {
      name: 'Banjo',
      type: 'Cordas',
    },
    {
      name: 'Berimbau',
      type: 'Cordas',
    },
    {
      name: 'Cavaquinho',
      type: 'Cordas',
    },
    {
      name: 'Cembalo',
      type: 'Cordas',
    },
    {
      name: 'Charango',
      type: 'Cordas',
    },
    {
      name: 'Cítara',
      type: 'Cordas',
    },
    {
      name: 'Clavicórdio',
      type: 'Cordas',
    },
    {
      name: 'Contrabaixo',
      type: 'Cordas',
    },
    {
      name: 'Corá',
      type: 'Cordas',
    },
    {
      name: 'Cravo',
      type: 'Cordas',
    },
    {
      name: 'Dulcímer',
      type: 'Cordas',
    },
    {
      name: 'Espineta',
      type: 'Cordas',
    },
    {
      name: 'Guitarra',
      type: 'Cordas',
    },
    {
      name: 'Harpa',
      type: 'Cordas',
    },
    {
      name: 'Kantele',
      type: 'Cordas',
    },
    {
      name: 'Koto',
      type: 'Cordas',
    },
    {
      name: 'Lira',
      type: 'Cordas',
    },
    {
      name: 'Piano',
      type: 'Cordas',
    },
    {
      name: 'Rabeca',
      type: 'Cordas',
    },
    {
      name: 'Saltério',
      type: 'Cordas',
    },
    {
      name: 'Sangen',
      type: 'Cordas',
    },
    {
      name: 'Sitar',
      type: 'Cordas',
    },
    {
      name: 'Ukulele',
      type: 'Cordas',
    },
    {
      name: 'Urucungo',
      type: 'Cordas',
    },
    {
      name: 'Viola',
      type: 'Cordas',
    },
    {
      name: 'Violão',
      type: 'Cordas',
    },
    {
      name: 'Violino',
      type: 'Cordas',
    },
    {
      name: 'Violoncelo',
      type: 'Cordas',
    },
    {
      name: 'Ondas Martenot',
      type: 'Eletrônico',
    },
    {
      name: 'Órgão Eletrônico',
      type: 'Eletrônico',
    },
    {
      name: 'Otamatone',
      type: 'Eletrônico',
    },
    {
      name: 'Piano Digital',
      type: 'Eletrônico',
    },
    {
      name: 'Sampler',
      type: 'Eletrônico',
    },
    {
      name: 'Sintetizador',
      type: 'Eletrônico',
    },
    {
      name: 'Teclado',
      type: 'Eletrônico',
    },
    {
      name: 'Teremim',
      type: 'Eletrônico',
    },
    {
      name: 'Voz',
      type: 'Voz',
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Instruments', null, {});
  }
};
