import { enrichDiseases } from '../utils/enrichDiseases';
import type { Disease } from '../types';

const obsChunkLoaders = [
  () => import('./obsChunks/obsChunk1'),
  () => import('./obsChunks/obsChunk2'),
  () => import('./obsChunks/obsChunk3'),
  () => import('./obsChunks/obsChunk4'),
  () => import('./obsChunks/obsChunk5'),
  () => import('./obsChunks/obsChunk6'),
  // ICD-10 stub chunks (auto-generated)
  () => import('./obsChunks/obsChunk7'),
  () => import('./obsChunks/obsChunk8'),
  () => import('./obsChunks/obsChunk9'),
  () => import('./obsChunks/obsChunk10'),
  () => import('./obsChunks/obsChunk11'),
  () => import('./obsChunks/obsChunk12'),
  () => import('./obsChunks/obsChunk13'),
  () => import('./obsChunks/obsChunk14'),
  () => import('./obsChunks/obsChunk15'),
  () => import('./obsChunks/obsChunk16'),
  () => import('./obsChunks/obsChunk17'),
  () => import('./obsChunks/obsChunk18'),
  () => import('./obsChunks/obsChunk19'),
  () => import('./obsChunks/obsChunk20'),
  () => import('./obsChunks/obsChunk21'),
  () => import('./obsChunks/obsChunk22'),
  () => import('./obsChunks/obsChunk23'),
  () => import('./obsChunks/obsChunk24'),
  () => import('./obsChunks/obsChunk25'),
  () => import('./obsChunks/obsChunk26'),
  () => import('./obsChunks/obsChunk27'),
];

export async function loadObsData(): Promise<Disease[]> {
  const chunks = await Promise.all(obsChunkLoaders.map((loadChunk) => loadChunk()));
  return enrichDiseases(chunks.flatMap((chunk) => chunk.default as Disease[])).map((disease) => ({
    ...disease,
    id: `${disease.id}__obs`,
  }));
}
