export const formatDate = (dateString: string) => {
  let date = new Date(dateString)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");

  return date;
};
