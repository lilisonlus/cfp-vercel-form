import { StringMap } from "@/app/types";
import { ZodError } from "zod";

export const convertZodErrors = (error: ZodError): StringMap => {
  return error.issues.reduce((acc: StringMap, issue) => {
    const path = issue.path.join(".") || "root";
    acc[path] = acc[path] ? `${acc[path]}, ${issue.message}` : issue.message;
    return acc;
  }, {});
};