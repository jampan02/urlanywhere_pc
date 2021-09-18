export interface TextField {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export interface Button {
  onClick: () => void;
  icon?: {
    src: string;
    alt: string;
  };
}
export interface Option {
  name: string;
  id: string;
}

export interface Select {
  value: { name: string; id: string };
  onChange: (e: { target: { value: any } }) => void;
  options: Option[];
}

export interface SignInorUpProps {
  email: TextField;
  password: TextField;
  confirmPassword?: TextField;
  submit: Button;
}

export interface PostModalProps {
  url: TextField;
  select: Select;
  edit?: boolean;
  onSubmit: () => Promise<void>;
}

export interface CategoryModalProps {
  name: TextField;
  edit?: boolean;
  onSubmit: () => Promise<void>;
}
