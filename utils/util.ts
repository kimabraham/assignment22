import { getPlaiceholder } from "plaiceholder";

export const formatTitle = (text: string): string => {
  const title = text.split("-").join(" ");
  return title.charAt(0).toUpperCase() + title.slice(1);
};

export const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};
