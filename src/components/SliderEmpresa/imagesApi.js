/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */

import { fakeApi } from "./imagesApiData";

// Exibe imagens com limite de tamanho em / async-await
export const getImages = (length = 10) => {
  const response = fakeApi;
   const images = [];
   response.forEach((c) => {
     const descriptions = c?.description;
     const title = c?.name;
     const url = c?.image?.url;

     images.push({ descriptions, title, url });
   });
   return images.slice(0, length);
};
