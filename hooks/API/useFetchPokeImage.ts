import { useEffect, useState } from "react";

const useFetchPokeImage = (imgURL: string) => {
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      await fetch(imgURL, { method: "GET" })
        .then((response) => {
          return response.blob();
        })
        .then((blob) => {
          if (blob.type === "image/png") {
            setImage(URL.createObjectURL(blob));
          }
        });
    })();
  }, [imgURL]);

  return image;
};

export default useFetchPokeImage;
