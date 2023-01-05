export interface ProductDetail {
  title: string;
  entry: string;
}
export interface Product {
  id: number;
  name: string;
  imageId: number;
  price: number;
  currency: string;
  description: string;
  category: string;
  details: Array<ProductDetail>;
}

export interface TechnicalDetail{
  detailTitle: string;
  detailText: string,
}
