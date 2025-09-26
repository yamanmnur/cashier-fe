import { InputForm } from "@/components/form/input-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRegister } from "@/hooks/use-register";
import { FormProvider } from "react-hook-form";

const RegisterPage = () => {
  const { navigate, methods, onSubmit } = useRegister();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle>Register to your account</CardTitle>
          <CardDescription>Enter your data below to register</CardDescription>

          <CardAction onClick={() => navigate("/")}>Login</CardAction>
        </CardHeader>

        <CardContent>
          <FormProvider {...methods}>
            <form
              className="flex flex-col space-y-5"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <InputForm name="name" label="Name" />
              <InputForm name="username" label="Username" />
              <InputForm name="password" label="Password" type="password" />
              <InputForm name="role" label="Roles" />
              <Button>Register</Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
