import React from 'react';
import NavigateLink from '../../../../components/atoms/link/navigateLink';
import SignForm from '../../../../components/molecules/sign/signForm';
import { SignInorUpProps } from '../../../../types/form';
import styles from './style.module.scss';
//メール登録だけでいい
type Props = {
  emailSign: SignInorUpProps;
};

const SignInForm: React.FC<Props> = ({ emailSign }) => {
  return (
    <div className={styles.container}>
      <SignForm email={emailSign.email} password={emailSign.password} submit={emailSign.submit} />
      <NavigateLink href="/signup">アカウントを持っていない</NavigateLink>
    </div>
  );
};

export default SignInForm;
