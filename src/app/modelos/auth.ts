export type  auth = {
  username: string ;
  password : string ;
}

export type authRespuesta = {
  id: string ;
  username : string ;
  email: string ;
  firstName: string ;
  lastName : string ;
  gender : 'male' | 'female';
  token : string ;
}

export type products = {
  id : number;
  title : string ;
  description : string ;
  price : number ;
  discountPercentage: number ;
  rating : number ;
  stock : number ;
  brand : string ;
  category : string ;
  thumbnail: string ;
  images : string []

}

export type productsRespuesta = {

  products :[{
    id : number;
    title : string;
    description : string ;
    price : number ;
    discountPercentage: number ;
    rating : number ;
    stock : number ;
    brand : string ,
    category : string ;
    thumbnail: string ;
    images : string []
  }]
  total : number ;
  skip : 'number' | 'null';
  limit : number;

}
export type Perfil ={
  images: string [],
  gender : 'male' | 'female';
  firstName : string ;
  username : string ;
  info: string ;

}
