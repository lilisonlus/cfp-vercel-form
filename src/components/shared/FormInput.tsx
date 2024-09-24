import { RiErrorWarningFill } from "react-icons/ri";

interface FormInputProps {
  text: string;
  id: string;
  type: string;
  defaultValue?: string;
  error?: string;
}

export default function FormInput({
  id,
  text,
  type,
  defaultValue,
  error,
}: FormInputProps) {
  return (
    <div className={error ? "" : "mb-3"}>
      <label htmlFor={id} className="mb-1 block text-lg font-bold">
        {text}
      </label>
      <input
        type={type}
        className="block w-full rounded-lg bg-gray-50 p-2.5 text-base font-bold text-gray-900"
        id={id}
        name={id}
        required
        defaultValue={defaultValue}
      />
      {error && (
        <div className="mt-px flex h-8 items-center">
          <RiErrorWarningFill className="mr-1 fill-accent" />
          <small className="text-base font-extrabold text-accent">
            {error}
          </small>
        </div>
      )}
    </div>
  );
}
