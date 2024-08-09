type Shop<T> = {
    name: string;
    items: Array<T>;
}

type Paire<U, M> =
{
    unite: U ;
    disaine: M;
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

type Pairesnumber = Paire<number, number>;
interface Pairestring extends Paire<Array<string>, string>{

}


const ShopAlphbt: ShopString = {

    name: "Alphabet",
    items: ["A", "B","C","D"],
    
}

const DikiName: Pairestring = 
{
    unite: ["Jon", "elie", "Jul",],
    disaine : "Diki",

}