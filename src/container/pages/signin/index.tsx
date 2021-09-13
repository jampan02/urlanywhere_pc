import React, { useState, useEffect } from 'react';
import SignTemplate from '../../templates/sign';
import SignInForm from '../../organisms/sign/signInForm';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const onSignIn = () => {};
  return (
    <div>
      {/*.defaultは、{default:module}のmodule部分を取り出すために行う（画像参照） */}
      <SignTemplate>
        <SignInForm
          emailSign={{
            email: { value: email, setValue: setEmail },
            password: { value: password, setValue: setPassword },
            confirmPassword: {
              value: confirmPassword,
              setValue: setConfirmPassword,
            },
            submit: { onClick: onSignIn },
          }}
        />
      </SignTemplate>
    </div>
  );
};

export default SignIn;
