const instrumentsSeed = async (prisma) => {
  const instruments = [
    { name: "Adufe", type: "Percussão" },
    { name: "Afoxé", type: "Percussão" },
    { name: "Agogô", type: "Percussão" },
    { name: "Atabaque", type: "Percussão" },
    { name: "Batá", type: "Percussão" },
    { name: "Bateria", type: "Percussão" },
    { name: "Bendir", type: "Percussão" },
    { name: "Bloco Sonoro", type: "Percussão" },
    { name: "Bodhrán", type: "Percussão" },
    { name: "Bombo", type: "Percussão" },
    { name: "Bongô", type: "Percussão" },
    { name: "Caixa", type: "Percussão" },
    { name: "Caixa de Rufo", type: "Percussão" },
    { name: "Caneca", type: "Percussão" },
    { name: "Carrilhão", type: "Percussão" },
    { name: "Castanhola", type: "Percussão" },
    { name: "Caxixi", type: "Percussão" },
    { name: "Celesta", type: "Percussão" },
    { name: "Ceramofone", type: "Percussão" },
    { name: "Chocalho", type: "Percussão" },
    { name: "Conga", type: "Percussão" },
    { name: "Cuíca", type: "Percussão" },
    { name: "Djembê", type: "Percussão" },
    { name: "Ferruco", type: "Percussão" },
    { name: "Ganzá", type: "Percussão" },
    { name: "Gongo", type: "Percussão" },
    { name: "Hang Drum", type: "Percussão" },
    { name: "Maracas", type: "Percussão" },
    { name: "Marimba", type: "Percussão" },
    { name: "Matraca", type: "Percussão" },
    { name: "Metalofone", type: "Percussão" },
    { name: "Pandeireta", type: "Percussão" },
    { name: "Pandeiro", type: "Percussão" },
    { name: "Pratos", type: "Percussão" },
    { name: "Reco-reco", type: "Percussão" },
    { name: "Repinique", type: "Percussão" },
    { name: "Ronca", type: "Percussão" },
    { name: "Sarronca", type: "Percussão" },
    { name: "Sino", type: "Percussão" },
    { name: "Surdo", type: "Percussão" },
    { name: "Tabla", type: "Percussão" },
    { name: "Taiko", type: "Percussão" },
    { name: "Tambor", type: "Percussão" },
    { name: "Tamborim", type: "Percussão" },
    { name: "Tantã", type: "Percussão" },
    { name: "Tarol", type: "Percussão" },
    { name: "Tímpano", type: "Percussão" },
    { name: "Tom-tom", type: "Percussão" },
    { name: "Triângulo", type: "Percussão" },
    { name: "Vibrafone", type: "Percussão" },
    { name: "Xequerê", type: "Percussão" },
    { name: "Xilofone", type: "Percussão" },
    { name: "Zabumba", type: "Percussão" },
    { name: "Acordeão", type: "Sopro" },
    { name: "Bombardino", type: "Sopro" },
    { name: "Clarinete", type: "Sopro" },
    { name: "Flauta", type: "Sopro" },
    { name: "Oboé", type: "Sopro" },
    { name: "Saxofone", type: "Sopro" },
    { name: "Trompete", type: "Sopro" },
    { name: "Trombone", type: "Sopro" },
    { name: "Tuba", type: "Sopro" },
    { name: "Alaúde", type: "Cordas" },
    { name: "Baixo", type: "Cordas" },
    { name: "Bandolim", type: "Cordas" },
    { name: "Banjo", type: "Cordas" },
    { name: "Cavaquinho", type: "Cordas" },
    { name: "Contrabaixo", type: "Cordas" },
    { name: "Guitarra", type: "Cordas" },
    { name: "Harpa", type: "Cordas" },
    { name: "Piano", type: "Cordas" },
    { name: "Violão", type: "Cordas" },
    { name: "Violino", type: "Cordas" },
    { name: "Violoncelo", type: "Cordas" },
    { name: "Sintetizador", type: "Eletrônico" },
    { name: "Teclado", type: "Eletrônico" },
    { name: "Teremim", type: "Eletrônico" },
    { name: "Voz", type: "Voz" },
  ];

  await Promise.all(instruments.map((instrument) =>
    prisma.instrument.upsert({
      where: { name: instrument.name },
      update: {},
      create: {
        name: instrument.name,
        type: instrument.type,
      },
    })
  ));

  console.log("✅ Instruments seeded successfully!");
  
};

export default instrumentsSeed;
