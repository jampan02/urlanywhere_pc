export interface Email {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export interface Password {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export interface ConfirmPassword {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export interface Submit {
  onClick: () => void;
  icon?: {
    src: string;
    alt: string;
  };
}
export interface Sign {
  email: Email;
  password: Password;
  confirmPassword?: ConfirmPassword;
  submit: Submit;
}
