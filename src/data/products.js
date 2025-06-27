import { productList } from '@/data/productList.js';
import { categories as categoryList } from '@/data/productCategories.js';

const products = productList.filter(p => p && p.id && p.name && p.name.fr && p.price);

export { products, categoryList as categories };