import { type SchemaTypeDefinition } from 'sanity';
import { product } from './product';
import category from './category';
import cars from './cars';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars ,product, category],
}
