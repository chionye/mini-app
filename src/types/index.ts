/** @format */

export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FormInputProp {
  label: string;
  type: string;
  name: string;
  id: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}