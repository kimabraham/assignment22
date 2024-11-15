export const formatTitle = (text: string): string => {
  const title = text.split("-").join(" ");
  return title.charAt(0).toUpperCase() + title.slice(1);
};
