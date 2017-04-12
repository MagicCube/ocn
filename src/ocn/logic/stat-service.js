import { get } from '../http/client';

export async function loadStats(clusterCount = 25) {
  const stats = await get(`/api/favs/stats`);
  return stats;
}
