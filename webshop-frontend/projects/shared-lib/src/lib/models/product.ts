
export interface Product {
  id: number;
  name: string;
  imageId: number;
  price: number;
  currency: string;
  description: string;
  category: string;
  details: Array<TechnicalDetail>;
}

export interface TechnicalDetail{
  productId: number;
  id: number;
  detailTitle: string;
  detailText: string,
}
