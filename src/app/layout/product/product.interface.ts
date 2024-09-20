export interface IAddProduct {
  id?: number;
  productName: string;
  category: string;
  stockQuantity: number;
  price: number;
}

export interface IGetProduct {
  id: number;
  productName: string;
  category: string;
  stockQuantity: number;
  price: number;
  // TODO: in actual scenario, there will be fields like, isActive, createdAt, therefore created seperate interface
}
