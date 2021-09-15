import React, { useState, useEffect } from 'react';
import SignTemplate from '../../templates/sign';
import SignUpForm from '../../organisms/sign/signUpForm';
import { auth } from '../../../utils/firebase';
import { useHistory } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
const googleIconSVG = require('../../../images/svg/google.svg').default;

const SignUp = () => {
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
  const onSignUpWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      history.push('/');
    } catch (err) {
      alert(err);
    }
  };
  const onSignUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
      history.push('/');
    } catch (err) {
      alert(err);
    }
  };
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
