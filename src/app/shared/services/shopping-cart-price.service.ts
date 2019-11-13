import { ShoppingCartItem } from "../models/shopping-cart-item.model";
import { Product } from "../models/product.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingCart{
    items: ShoppingCartItem[]=[];

    constructor(private itemsMap: {[productId: string] : ShoppingCartItem}){
        this.itemsMap = itemsMap || {};

        for(let productId in itemsMap){
        let item =itemsMap[productId];
        
        this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
       
        }      
    }
    
    getQuantity(product: Product){
        //console.log("product",product)
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
      }
  

    get totalPrice(){
        let sum=0;
        for(let productId in this.items)
        sum+= this.totalprice(this.items[productId].price,this.items[productId].quantity)
       // sum += this.items[productId].totalprice;
        //console.log(this.items);
        return sum;
    }
    
    totalprice(price,quantity){ return price * quantity;}

    get totalItemsCount(){

        let count = 0;
        for(let productId in this.itemsMap)
        count += this.itemsMap[productId].quantity;
        return count;

    }
}