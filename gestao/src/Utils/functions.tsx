import { Product } from "../Components/ProductForm";
import { LocalStorageKeys } from "./storageKeys";

export const addToStorage = function (object: object, key: string) {
  const localStorageArray = localStorage.getItem(key);
  const fetchedArray = localStorageArray
    ? JSON.parse(localStorageArray)
    : new Array<object>();
  fetchedArray.push(object);
  localStorage.setItem(key, JSON.stringify(fetchedArray));
};
export const getFromStorage = function (search: string, key: LocalStorageKeys) {
  const localStorageArray = localStorage.getItem(key);
  const fetchedArray = localStorageArray
    ? JSON.parse(localStorageArray)
    : new Array<Product>();
  const fetchedObj = fetchedArray.filter(
    (obj: { name: string }) => obj.name === search
  );

  return fetchedObj;
};

export function getPropNames(objArray: object[]) {
  const objProps = new Array<string>();
  const objKeyValueArr = Object.entries(objArray[0]);
  objKeyValueArr.map((keyValuePair) => {
    const key = keyValuePair[0];
    objProps.push(key);
  });
  return objProps;
}

export function IsAddressFilled() {
  if (((localStorage.getItem(LocalStorageKeys.address))=== null)) {
    return false;
  } else {
    return true;
  }
}
