/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */

// Exibe imagens com limite de tamanho em / async-await
export const getImages = async (length = 10) => {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds`);
   const response_1 = await response.json();
   const images = [];
   response_1.forEach((c) => {
     const title = c?.description;
     const url = c?.image?.url;

     images.push({ title, url });
   });
   return images.slice(0, length);
};

// Exibe imagens com limite de tamanho em / .then
export const getIimages = (length = 10) => {
  return fetch(`https://api.thecatapi.com/v1/breeds`)
    .then((response) => response.json())
    .then((response) => {
      const images = [];
      response.forEach((c) => {
        const title = c?.description;
        const url = c?.image?.url;

        images.push({ title, url });
      });
      return images.slice(0, length); // remove the extra cats
    });
};

