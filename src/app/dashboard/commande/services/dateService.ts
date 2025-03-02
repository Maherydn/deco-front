export const formaDate = (date: Date | string): string => {
  const parsedDate = new Date(date);

  return parsedDate.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
