export type Perfume = {
    name: String;
    count: Number;
    rating: Number;
    description: String;
    price: [Number];
    size: [Number];
    primary_img: String;
    alt_img: [String];
    review: [String];
    _id: String;
  };
  
 export type AllPerfume = {
    allPerfume: [Perfume];
  };