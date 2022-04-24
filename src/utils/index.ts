export * from "./constants";

export const getColorText = (text: string) => {
  const value = parseFloat(text);
  if (value > 0) {
    return "green";
  } else if (value < 0) {
    return "red";
  } else {
    return "";
  }
};

export const formatCurrency = (value: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseFloat(value));
};

export const formatNumber = (value: string) => {
  return new Intl.NumberFormat("en-US").format(parseFloat(value));
};
