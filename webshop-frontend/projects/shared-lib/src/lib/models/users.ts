export interface Users {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  discount: number;
  deliveryAddress: Array<DeliveryAddress>;
}

export interface DeliveryAddress {
  username: string;
  id: number;
  city: string;
  houseNumber: number;
  street: string;
  zipCode: number;
}
