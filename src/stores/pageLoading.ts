import { writable } from "svelte/store";

export const loading = writable(true);
export const splashFinished = writable(false);

let loadingCount = 0;

export async function loadContent<T>(content: () => T) {
  loadingCount++;
  const result = await content();
  loading.set(--loadingCount > 0);
  return result;
}