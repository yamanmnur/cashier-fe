import { object, string } from "yup";

const loginSchema = object({
  username: string().required().label("Username"),
  password: string().required().min(5).label("Password"),
});

const registerSchema = object({
  name: string().required().label("Name"),
  username: string().required().label("Username"),
  password: string().required().label("Password"),
  role: string().required().label("Role"),
});

export { loginSchema, registerSchema };
