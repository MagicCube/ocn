import { get } from '../http/client';

export async function loadClusters(clusterCount = 25) {
  const clusters = await get(`/data/results/clusters-${clusterCount}.json`);
  return clusters;
}
