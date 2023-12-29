import { Translation } from '../../data/types';
import idOfTranslations from '../constants/mapping';

interface UseTranslationsProps {
  translationsId: number[];
  surahNumber: number[];
  ayahNumberInSurah: number[];
}

export default async function useTranslations({ translationsId }: UseTranslationsProps) {
  const promises: Promise<{ default: Translation }>[] = translationsId.map((id) => {
    const filePath = idOfTranslations[id];
    if (!filePath) {
      throw new Error(`No translation file found for ID ${id}`);
    }
    return import(filePath) as Promise<{ default: Translation }>;
  });

  const translationFiles = await Promise.all(promises);
  return translationFiles.map((file) => file.default);
}
