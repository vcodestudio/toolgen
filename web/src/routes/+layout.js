// src/routes/+layout.js
export const load = ({ url }) => {
  const { pathname, query } = url

  return {
    pathname,
    query,
  }
}
