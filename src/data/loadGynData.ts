import { enrichDiseases } from '../utils/enrichDiseases';
import type { Disease } from '../types';

const gynChunkLoaders = [
  () => import('./gynChunks/gynChunk1'),
  () => import('./gynChunks/gynChunk2'),
  () => import('./gynChunks/gynChunk3'),
  () => import('./gynChunks/gynChunk4'),
  () => import('./gynChunks/gynChunk5'),
  () => import('./gynChunks/gynChunk6'),
  () => import('./gynChunks/gynChunk7'),
  () => import('./gynChunks/gynChunk8'),
  () => import('./gynChunks/gynChunk9'),
  () => import('./gynChunks/gynChunk10'),
  () => import('./gynChunks/gynChunk11'),
  () => import('./gynChunks/gynChunk12'),
  () => import('./gynChunks/gynChunk13'),
  () => import('./gynChunks/gynChunk14'),
  () => import('./gynChunks/gynChunk15'),
  () => import('./gynChunks/gynChunk16'),
  () => import('./gynChunks/gynChunk17'),
  () => import('./gynChunks/gynChunk18'),
  () => import('./gynChunks/gynChunk19'),
  () => import('./gynChunks/gynChunk20'),
  () => import('./gynChunks/gynChunk21'),
  () => import('./gynChunks/gynChunk22'),
  () => import('./gynChunks/gynChunk23'),
  () => import('./gynChunks/gynChunk24'),
  // ICD-10 stub chunks (auto-generated)
  () => import('./gynChunks/gynChunk25'),
  () => import('./gynChunks/gynChunk26'),
  () => import('./gynChunks/gynChunk27'),
  () => import('./gynChunks/gynChunk28'),
  () => import('./gynChunks/gynChunk29'),
  () => import('./gynChunks/gynChunk30'),
];

export async function loadGynData(): Promise<Disease[]> {
  const chunks = await Promise.all(gynChunkLoaders.map((loadChunk) => loadChunk()));
  return enrichDiseases(chunks.flatMap((chunk) => chunk.default as Disease[])).map((disease) => ({
    ...disease,
    id: `${disease.id}__gyn`,
  }));
}
