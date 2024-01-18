export type InputProps = {
  type: 'text' | 'password' | 'checkbox';
  label: string;
  name: string;
  onChange: any;
  value?: string;
  checked?: boolean;
}