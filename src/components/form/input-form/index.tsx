import { Input } from "@/components/ui/input";
import { cn } from "@/libs/cn";
import { Controller, useFormContext } from "react-hook-form";

interface InputFormProps extends React.ComponentProps<"input"> {
  name: string;
  label?: string;
  formWrapperClassname?: string;
}

function InputForm({
  name,
  label,
  formWrapperClassname,
  ...props
}: Readonly<InputFormProps>) {
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field, fieldState }) => (
        <div
          className={cn(
            "flex h-min w-full flex-col gap-1.5",
            formWrapperClassname
          )}
        >
          {typeof label !== "undefined" && (
            <h4>
              <label htmlFor={name}>{label}</label>
            </h4>
          )}
          <Input {...field} {...props} />
          {fieldState.invalid && fieldState.error?.message && (
            <span className="text-xs text-red-500">
              {fieldState.error?.message}
            </span>
          )}
        </div>
      )}
    />
  );
}

export { InputForm };
