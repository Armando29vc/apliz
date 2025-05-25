// src/data/types.ts
export interface Palabra {
  es: string;
  za: string;
  imagen?: string;
  audio?: {
    es?: string;
    za?: string;
  };
  ejemplo?: {
    es?: string;
    za?: string;
  };
  nota?: string;
  subcategoria?: string;
}
