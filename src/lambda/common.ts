import * as crypto from "crypto";

function mapRec(element : any, fn : any, ignoreList: string[]): any {

    // A simple fn to ignore running the function
    const emptyFn = (y:string)=>{return y;};
  
    // run the function recursively for arrays
    if (Array.isArray(element)) {return element.map(item => mapRec(item, fn, ignoreList));}
  
    // check and run for nested objects
    if (element && typeof element === 'object') {
      return Object.fromEntries(
        Object.entries(element).map(([key, value]) =>
        // for each entry, recursively run the function
          [key, mapRec(value, (ignoreList.includes(key)|| !key) ? emptyFn : fn, ignoreList)],
        ),
      );
    }
  
    // if value is null, then don't run through the provided function
    return (element || element === '') ? fn(element) : emptyFn(element);
}

export function encrypt(decryptedMessage: any, SVpublicKey: string, ignoreList: string[]): any {
    const encryptedMessage = mapRec(decryptedMessage,
        (item: string) =>
          crypto.publicEncrypt(
            { key: SVpublicKey, padding: crypto.constants.RSA_PKCS1_PADDING},
            Buffer.from(item),
          ).toString('base64'),
        ignoreList,
      );
      return encryptedMessage;
}

export function decrypt(encryptedMessage: any, SVprivateKey: string, ignoreList: string[]): any {
    const decryptedMessage = mapRec(encryptedMessage,
        (item: string) =>
            crypto.privateDecrypt(
            { key: SVprivateKey, padding: crypto.constants.RSA_PKCS1_PADDING},
            Buffer.from(item, 'base64'),
            ).toString('utf-8'),
        ignoreList,
        );
        return decryptedMessage;
}