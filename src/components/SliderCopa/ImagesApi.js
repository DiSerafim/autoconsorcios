import { fakeApi } from "./ImagesApiData";

export const getImages = (length = 35) => {
  const response = fakeApi;
  const images = [];

  response.forEach((element) => {
    const url = element?.image?.url;

    images.push({ url });
  });
  return images.slice(0, length);
};
