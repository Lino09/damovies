export type InputProps = {
  type: "text" | "password" | "checkbox" | "email";
  label: string;
  name: string;
  onChange: any;
  value?: string;
  checked?: boolean;
};

export type ButtonProps = {
  type: "submit" | "button";
  children: any;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: any;
};

export type Movie = {
  id: string;
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
};
