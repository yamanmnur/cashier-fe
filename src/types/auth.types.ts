import type {
  loginSchema,
  registerSchema,
} from "@/validations/auth.validation";
import type { InferType } from "yup";
import type { User } from "./user.types";

type LoginRequest = InferType<typeof loginSchema>;
type RegisterRequest = InferType<typeof registerSchema>;

interface AuthResponse {
  user?: User;
  token?: string;
}

export type { LoginRequest, RegisterRequest, AuthResponse };
