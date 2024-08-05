type ShopNumbers = {
    name: string;
    items: Array<number>;
}

type ShopString = {
      name: string;
    items: Array<string>;  
}
Array
type ShopBooleans = {
    name: string;
    items: Array<boolean>
}


type Shop<T> = {
    name: string;
    items: Array<T>;
}