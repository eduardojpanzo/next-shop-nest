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
  price: number;
  description: string
  amount: number
  idImage: string
  stock: number
  category : Category
};

export type Collection = {
  description: string;
  id: string;
  name: string;
  slug: string;
  products: Product[];
};

export type Category = {
  description: string;
  id: string;
  name: string;
  slug: string;
  products: Product[];
};