import { productsPart1 } from './products-part1.js';
import { productsPart2 } from './products-part2.js';
import { productsPart3 } from './products-part3.js';
import { productsPart4 } from './products-part4.js';
import { productsPart5 } from './products-part5.js';
import { productsPart6 } from './products-part6.js';
import { productsPart7 } from './products-part7.js';
import { productsPart8 } from './products-part8.js';

const allProductsRaw = [
  ...productsPart1,
  ...productsPart2,
  ...productsPart3,
  ...productsPart4,
  ...productsPart5,
  ...productsPart6,
  ...productsPart7,
  ...productsPart8,
];

const uniqueProducts = [];
const seenIds = new Set();
const seenNames = new Set();

allProductsRaw.forEach(product => {
  if (!product || !product.id || !product.name || !product.name.fr) {
    console.warn('Produit vide ou malformé ignoré:', product);
    return;
  }

  const nameFr = product.name.fr.toLowerCase().trim();

  if (!seenIds.has(product.id) && !seenNames.has(nameFr)) {
    uniqueProducts.push(product);
    seenIds.add(product.id);
    seenNames.add(nameFr);
  } else {
    console.warn(`Produit en double détecté et ignoré (ID: ${product.id}, Nom: ${product.name.fr})`);
  }
});

export const productList = uniqueProducts;