import type { Apto } from '../../types';
import zpinheiros from './zpinheiros-apto314.json';
import mapp from './mapp-apto1213a.json';
import ocian from './ocian-apto116.json';
import setin from './setin-apto607.json';

export const aptos: Apto[] = [zpinheiros, mapp, ocian, setin] as Apto[];

export function getApto(slug: string): Apto | undefined {
  return aptos.find((a) => a.slug === slug);
}

export function getAptoSlugs(): string[] {
  return aptos.map((a) => a.slug);
}
