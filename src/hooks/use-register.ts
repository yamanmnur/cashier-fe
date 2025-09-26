import { Register } from "@/services/auth.service";
import type { RegisterRequest } from "@/types/auth.types";
import { registerSchema } from "@/validations/auth.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useRegister = () => {
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: RegisterRequest) => {
    try {
      const response = await Register(data);

      toast.success(response.meta_data?.message);
      navigate("/dashboard");
    } catch (err) {
      toast.error((err as Record<string, unknown>)?.error as string);
    }
  };

  return { navigate, methods, onSubmit };
};

export { useRegister };
