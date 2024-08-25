export const load = async ({ url}) => {
  let query = Object.fromEntries(url.searchParams.entries());
  return {
    query,
  }
}
