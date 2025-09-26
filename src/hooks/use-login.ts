import { Login } from "@/services/auth.service";
import type { LoginRequest } from "@/types/auth.types";
import { loginSchema } from "@/validations/auth.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useLogin = () => {
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await Login(data);

      toast.success(response.meta_data?.message);
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err?.meta_data.message as string);
    }
  };

  return { navigate, methods, onSubmit };
};

export { useLogin };
