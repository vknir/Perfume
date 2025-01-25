export type Perfume = {
  name: string;
  count: number;
  rating: number;
  description: string;
  price: [number];
  size: [number];
  primary_img: string;
  alt_img: [string];
  review: [string];
  _id: string;
};

export type AllPerfume = {
  allPerfume: [Perfume];
};

export type CardProps = {
  _id: string;
  primary_img: string;
  price: [number];
  description: string;
  rating: number;
  name: string;
};
