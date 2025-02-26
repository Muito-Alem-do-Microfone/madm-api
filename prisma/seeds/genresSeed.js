const genresSeed = async (prisma) => {
  const genres = [
    "Rock",
    "Classic Rock",
    "Alternative Rock",
    "Punk Rock",
    "Indie Rock",
    "Pop",
    "Pop Rock",
    "Dance Pop",
    "Electropop",
    "R&B",
    "Hip Hop",
    "Rap",
    "Trap",
    "Jazz",
    "Blues",
    "Soul",
    "Funk",
    "Country",
    "Bluegrass",
    "Reggae",
    "Ska",
    "Electronic",
    "House",
    "Techno",
    "Trance",
    "Dubstep",
    "Drum and Bass",
    "Ambient",
    "Industrial",
    "Classical",
    "Opera",
    "Metal",
    "Heavy Metal",
    "Death Metal",
    "Black Metal",
    "Thrash Metal",
    "Grunge",
    "Post Rock",
    "Acoustic",
    "Folk",
    "World Music",
    "Latin",
    "Salsa",
    "Bossa Nova",
    "Reggaeton",
    "Afrobeat",
    "K-pop",
    "J-pop",
    "Indie Pop",
    "Baroque",
    "Gothic",
    "Emo",
    "Post Punk",
    "New Wave",
    "Synthwave",
    "Chillwave",
    "Lo-fi",
    "Synthpop",
    "Dancehall",
    "Disco",
    "Garage Rock",
    "Psychedelic Rock",
    "Progressive Rock",
    "Art Rock",
    "Jazz Fusion",
    "Folk Rock",
    "Hard Rock",
    "Post Hardcore",
    "Pop Punk",
    "Math Rock",
    "Lo-fi Hip Hop",
    "Neo Soul",
    "Dance Punk",
    "Electro Swing",
    "Chiptune",
    "Vaporwave",
    "Future Funk",
    "Tropical House",
    "Hardstyle",
    "Eurodance",
    "Trap EDM",
    "Post Metal",
    "Deathcore",
    "Metalcore",
    "Post Hardcore",
    "Screamo",
    "Djent",
    "Celtic",
    "New Age",
    "Experimental",
    "Drone",
    "Post-punk Revival",
    "Samba",
    "Bossa Nova",
    "Forró",
    "MPB",
    "Tropicalia",
    "Choro",
    "Axé",
    "Frevo",
    "Maracatu",
    "Sertanejo",
    "Pagode",
    "Funk Carioca",
    "Samba Rock",
    "Maranhão",
    "Baile de Favela",
    "Xaxado",
    "Samba de Roda",
    "Rádio Nacional",
    "Carimbó",
    "Sertanejo Universitário",
    "Rumba",
    "Vozes do Sertão",
  ];

  for (const name of genres) {
    await prisma.genre.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("✅ Genres seeded successfully!");
};

export default genresSeed;
