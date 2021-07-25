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
export const getFromStorage = function ( key: LocalStorageKeys){
  const localStorageArray = localStorage.getItem(key);
  const fetchedArray = localStorageArray
    ? JSON.parse(localStorageArray)
    : new Array<Object>();
  const fetchedObj = fetchedArray.map(
    (obj:[]) => obj
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
export function getAddress(){
  const storedAddress = localStorage.getItem(LocalStorageKeys.address);
      const address =  storedAddress ?JSON.parse(storedAddress):null
      return address;
}

export function IsAddressSaved() {
    const address = getAddress();
  if ( address !== null) {
    return true;
  } else {
    return false;
  }
}
