const isDOMavailable = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export default isDOMavailable;
