import {string, object, bool} from "yup";

export const RegisterValidator = object({
  email: string().email().required(),
  username: string().required(),
  firstName: string().required(),
  lastName: string().required(),
  password: string().required(),
  terms: bool().required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
