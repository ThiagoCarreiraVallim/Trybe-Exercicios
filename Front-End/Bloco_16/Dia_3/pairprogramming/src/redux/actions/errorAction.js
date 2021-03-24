export const ERROR_FORM = 'ERROR_FORM';

function validateField(fieldName, value) {
  switch (fieldName) {
    case 'email':
      const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
      return isValid ? '' : ' is invalid';
    default:
      break;
  }
  return '';
}

export const errorAction = (name, value) => ({
  type: ERROR_FORM,
  name,
  value: validateField(name, value),
});
