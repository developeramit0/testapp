import React from "react";
import CryptoJS from "crypto-js";
const secretPass = "XkhZG4fW2t2W";


export const encryptData=(data)=>{
   return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        secretPass
      ).toString();
}

export const decryptData = (data) => {
    const bytes = CryptoJS.AES.decrypt(data, secretPass);
    return JSON.parse(bytes?.toString(CryptoJS.enc.Utf8));
  };