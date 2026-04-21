import { enrichDiseases } from '../utils/enrichDiseases';
import type { Disease } from '../types';

const obsChunkLoaders = [
  () => import('./obsChunks/obsChunk1'),
  () => import('./obsChunks/obsChunk2'),
  () => import('./obsChunks/obsChunk3'),
  () => import('./obsChunks/obsChunk4'),
  () => import('./obsChunks/obsChunk5'),
  () => import('./obsChunks/obsChunk6'),
  () => import('./obsChunks/obsChunk7'),
];

export async function loadObsData(): Promise<Disease[]> {
  const chunks = await Promise.all(obsChunkLoaders.map((loadChunk) => loadChunk()));
  return enrichDiseases(chunks.flatMap((chunk) => chunk.default as Disease[]));
}
