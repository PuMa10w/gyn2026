import { enrichDiseases } from '../utils/enrichDiseases';
import type { Disease } from '../types';

const gynChunkLoaders = [
  () => import('./gynChunks/gynChunk1'),
  () => import('./gynChunks/gynChunk2'),
  () => import('./gynChunks/gynChunk3'),
  () => import('./gynChunks/gynChunk4'),
];

export async function loadGynData(): Promise<Disease[]> {
  const chunks = await Promise.all(gynChunkLoaders.map((loadChunk) => loadChunk()));
  return enrichDiseases(chunks.flatMap((chunk) => chunk.default as Disease[]));
}
