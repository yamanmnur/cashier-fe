import baseInstance from "@/libs/axios/base-instance";
import type { BaseResponse } from "@/types/base-response";
import type {
  LoginRequest,
  AuthResponse,
  RegisterRequest,
} from "@/types/auth.types";
import { AxiosError } from "axios";

export const Login = async (
  data: LoginRequest
): Promise<BaseResponse<AuthResponse>> => {
  try {
    const response = await baseInstance.post("/login", data);

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw err.response?.data;
    }

    throw err;
  }
};

export const Register = async (
  data: RegisterRequest
): Promise<BaseResponse<AuthResponse>> => {
  try {
    const response = await baseInstance.post("/register", data);

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw err.response?.data;
    }

    throw err;
  }
};
