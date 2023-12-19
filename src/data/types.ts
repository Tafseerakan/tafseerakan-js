export type Sura = {
  number: number;
  englishName: string;
  arabicName: string;
  revelationType: 'Meccan' | 'Medinan';
};

export type Translation = {
  info: {
    name: string;
    author: string;
  };
  ayahs: string[];
};
