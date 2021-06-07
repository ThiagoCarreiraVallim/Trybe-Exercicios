export const REMOVE_CLIENT = 'REMOVE_CLIENT';

export const removeClient = (name) => ({
  type: REMOVE_CLIENT,
  name,
})
