
import { Product } from './product.model';
export class ShoppingCartItem{
    
    $key: string;
    title: string;
    imageUrl:string;
    price: number;
    quantity: number;
    totalPrice: number;
    

   
   constructor(init?:Partial<ShoppingCartItem>){
       Object.assign(this,init);
   }

  // get totalprice(){ return this.price * this.quantity;}

}