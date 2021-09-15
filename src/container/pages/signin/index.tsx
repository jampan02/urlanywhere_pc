import React, { useState, useEffect } from 'react';
import SignTemplate from '../../templates/sign';
import SignInForm from '../../organisms/sign/signInForm';
import { auth } from '../../../utils/firebase';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //ログインしてる
        history.push('/');
      }
    });
  }, []);
  const onSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      history.push('/');
    } catch (err) {
      alert(err);
    }
  };
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
