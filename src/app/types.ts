export interface SubmissionFormState {
  errors?: StringMap;
  success?: boolean;
  data?: any;
}

export interface StringMap {
  [key: string]: string;
}
