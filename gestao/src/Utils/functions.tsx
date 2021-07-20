
export const addToStorage = function (object: object,key:string){
    const localStorageArray = localStorage.getItem(key);
    const fetchedArray = localStorageArray ? JSON.parse(localStorageArray): []|| new Array<object>();
    fetchedArray.push(object);
    localStorage.setItem(key, JSON.stringify(fetchedArray));
}