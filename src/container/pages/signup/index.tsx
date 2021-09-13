import React, { useState, useEffect } from 'react';
import SignTemplate from '../../templates/sign';
import SignUpForm from '../../organisms/sign/signUpForm';
//import google from "../../../images/svg/google.svg"
const googleIconSVG = require('../../../images/svg/google.svg').default;
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const onSignUpWithEmail = () => {};
  const onSignUpWithGoogle = () => {};
  return (
    <div>
      {/*.defaultは、{default:module}のmodule部分を取り出すために行う（画像参照） */}
      <SignTemplate>
        <SignUpForm
          emailSign={{
            email: { value: email, setValue: setEmail },
            password: { value: password, setValue: setPassword },
            confirmPassword: {
              value: confirmPassword,
              setValue: setConfirmPassword,
            },
            submit: { onClick: onSignUpWithEmail },
          }}
          apiSign={{
            icon: { alt: 'googleアイコン', src: googleIconSVG },
            onClick: onSignUpWithGoogle,
          }}
        />
      </SignTemplate>
    </div>
  );
};

export default SignUp;
