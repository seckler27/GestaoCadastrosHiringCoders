import { Product } from "../Components/ProductForm";

export const addToStorage = function (object: object, key: string) {
    const localStorageArray = localStorage.getItem(key);
    const fetchedArray = localStorageArray ? JSON.parse(localStorageArray) : [] || new Array<object>();
    fetchedArray.push(object);
    localStorage.setItem(key, JSON.stringify(fetchedArray));
}
export const getFromStorage = function (search: string, key: string) {
   
    const localStorageArray = localStorage.getItem(key);
    const fetchedArray = localStorageArray ? JSON.parse(localStorageArray): new Array<Product>();
    const fetchedObj = fetchedArray.filter((obj: { name: string; }) => obj.name === search);
    
    return fetchedObj


}