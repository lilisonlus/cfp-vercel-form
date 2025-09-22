import { StringMap } from "@/app/types";
import { ZodError } from "zod";

export const convertZodErrors = (error: ZodError): StringMap => {
  return error.issues.reduce((acc: { [key: string]: string }, issue) => {
    const [firstKey] = issue.path;
    if (typeof firstKey === "string" || typeof firstKey === "number") {
      acc[String(firstKey)] = issue.message;
    }
    return acc;
  }, {});
};
