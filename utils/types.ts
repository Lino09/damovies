export type InputProps = {
  type: 'text' | 'password' | 'checkbox' | 'mail';
  label: string;
  name: string;
  onChange: any;
  value?: string;
  checked?: boolean;
}

export type ButtonProps = {
  type: 'submit' | 'button';
  children: any;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onClick?: any;
}