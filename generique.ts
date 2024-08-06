type Shop<T> = {
    name: string;
    items: Array<T>;
}


type ShopNumbers = Shop<number>;
//     {
//     name: string;
//     items: Array<number>;
// }

type ShopString = Shop<string>;
//     {
//       name: string;
//     items: Array<string>;  
// }

type ShopBooleans = Shop<boolean>;
//     {
//     name: string;
//     items: Array<boolean>
// }


const ShopAlphbt: ShopString = {

    name: "Alphabet",
    items: ["A", "B","C","D"],
    
}