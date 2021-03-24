export const HANDLE_CHANGES = 'HANDLE_CHANGES';

export const handler = (name, value) => ({
  type: HANDLE_CHANGES,
  name,
  value,
});
