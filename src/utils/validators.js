const login_email_regex = /^[^\s@]+@[a-zA-Z0-9-]{2,50}\.[a-zA-Z]{2,50}$/;

export const validators = {
  email: (value) => login_email_regex.test(value),
  password: (value) => value.length >= 6,
};