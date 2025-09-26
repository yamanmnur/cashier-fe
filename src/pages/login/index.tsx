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
import { FormProvider } from "react-hook-form";
import { useLogin } from "@/hooks/use-login";

const LoginPage = () => {
  const { navigate, methods, onSubmit } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your username below to login your account
          </CardDescription>

          <CardAction onClick={() => navigate("/register")}>
            Register
          </CardAction>
        </CardHeader>

        <CardContent>
          <FormProvider {...methods}>
            <form
              className="flex flex-col space-y-5"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <InputForm name="username" label="Username" />
              <InputForm name="password" label="Password" type="password" />
              <Button>Login</Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
