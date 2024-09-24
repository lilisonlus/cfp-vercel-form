import { RiErrorWarningFill } from "react-icons/ri";

interface FormTextAreaProps {
  text: string;
  id: string;
  rows: number;
  defaultValue?: string;
  error?: string;
}

export default function FormTextArea({
  id,
  rows,
  text,
  defaultValue,
  error,
}: FormTextAreaProps) {
  return (
    <div className={error ? "" : "mb-3"}>
      <label htmlFor={id} className="mb-1 block text-lg font-bold">
        {text}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required
        defaultValue={defaultValue}
        className="block w-full resize-none rounded-lg bg-gray-50 p-2.5 text-base font-bold text-gray-900"
      ></textarea>
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
