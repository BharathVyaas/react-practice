// src/utils/stringUtils.js
export const capitalize = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

export const trimObject = (obj) => {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc[key] = typeof val === "string" ? val.trim() : val;
    return acc;
  }, {});
};
