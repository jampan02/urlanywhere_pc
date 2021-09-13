import React from 'react';
import FilledButton from '../../../atoms/button/FilledButton';
import OutLinedTextField from '../../../atoms/textField/outlinedTextField';
import { Sign } from '../../../../types/form';
import styles from './style.module.scss';
type Props = Sign;

const SignForm: React.FC<Props> = ({ email, password, confirmPassword, submit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.email}>
        <OutLinedTextField
          setValue={email.setValue}
          value={email.value}
          placeholder="メールアドレス"
        />
      </div>
      <div className={styles.password}>
        <OutLinedTextField
          setValue={password.setValue}
          value={password.value}
          placeholder="パスワード"
        />
      </div>
      <div className={styles.confirmPassword}>
        {confirmPassword && (
          <OutLinedTextField
            setValue={confirmPassword.setValue}
            value={confirmPassword.value}
            placeholder="パスワード再確認"
          />
        )}
      </div>
      <div className={styles.button}>
        <FilledButton onClick={submit.onClick} icon={submit.icon}>
          {confirmPassword ? '登録' : 'ログイン'}
        </FilledButton>
      </div>
    </div>
  );
};

export default SignForm;
