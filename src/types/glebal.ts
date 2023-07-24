export type Image = {
  id: string;
  height: number;
  width: number;
  fileName: string;
  url: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string
  description: string
  price: number;
  salaAmount: number
  idImage: string
  stockAmount: number
  category : Category
};

export type ProductCart  = {
  id: string;
  name: string;
  slug: string
  price: number;
  idImage: string
  amount: number
}

export type Collection = {
  description: string;
  id: string;
  name: string;
  slug: string;
  products: {product:Product}[];
};

export type Category = {
  description: string;
  id: string;
  name: string;
  slug: string;
  products: Product[];
};