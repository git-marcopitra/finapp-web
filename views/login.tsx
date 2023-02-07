import { signInWithEmailAndPassword } from '@firebase/auth';
import { onValue, ref } from '@firebase/database';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { auth, database } from '../api';
import { Box, Button, Input, Typography } from '../elements';
import useUser from '../hooks/use-user';

interface ILoginForm {
  email: string;
  password: string;
}

const Login: FC = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<ILoginForm>({
    defaultValues: { email: '', password: '' },
  });
  const { updateUser, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) push('/');
  }, [isLogged]);

  const onSubmit = async ({ email, password }: ILoginForm) => {
    try {
      if (!email) throw new Error('Digite um email');
      if (!password) throw new Error('Digite uma palavra-pase');

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userRef = ref(database, 'users/' + userCredential.user.uid);

      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        updateUser(data);
      });

      push('/');
    } catch (e: any) {
      alert(e.message);
      console.error('>> error ::: ', e);
    }
  };

  return (
    <Box
      height="100vh"
      width="100vw"
      bg="background"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        padding="XL"
        width="20rem"
        display="flex"
        bg="foreground"
        borderRadius="L"
        flexDirection="column"
      >
        <Typography as="label">Email</Typography>
        <Input {...register('email')} type="email" my="M" py="M" px="L" />
        <Typography as="label">Password</Typography>
        <Input {...register('password')} type="password" my="M" py="M" px="L" />
        <Button
          variant="primary"
          px="L"
          py="M"
          onClick={handleSubmit(onSubmit)}
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
