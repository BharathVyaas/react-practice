export const logger = (storeAPI) => (next) => (action) => {
  if (process.env.NODE_ENV === "development") {
    console.log("Dispatching:", action);
  }
  return next(action);
};
