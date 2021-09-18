import React from 'react';
import Partition from '../../../../components/atoms/partition';
import OutLinedButton from '../../../../components/atoms/button/outlinedButton';
import NavigateLink from '../../../../components/atoms/link/navigateLink';
import SignForm from '../../../../components/molecules/sign/signForm';
import { SignInorUpProps } from '../../../../types/form';
import styles from './style.module.scss';
//Signと、google登録用のやつが必要
type Props = {
  emailSign: SignInorUpProps;
  apiSign: {
    onClick: () => void;
    icon: {
      src: string;
      alt: string;
    };
  };
};

const SignUpForm: React.FC<Props> = ({ emailSign, apiSign }) => {
  return (
    <div className={styles.container}>
      <SignForm
        email={emailSign.email}
        password={emailSign.password}
        confirmPassword={emailSign.confirmPassword}
        submit={emailSign.submit}
      />
      <NavigateLink href="/signin">アカウントを持っている</NavigateLink>
      <Partition>または</Partition>
      <OutLinedButton
        onClick={apiSign.onClick}
        icon={{ src: apiSign.icon.src, alt: apiSign.icon.alt }}
      >
        Googleで認証
      </OutLinedButton>
    </div>
  );
};

export default SignUpForm;
