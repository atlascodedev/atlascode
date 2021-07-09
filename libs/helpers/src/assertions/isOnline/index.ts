const getOnlineStatus = (): boolean => {
  return typeof navigator !== "undefined" &&
    typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;
};

export default getOnlineStatus;
