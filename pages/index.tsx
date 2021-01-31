import Layout from '../components/Layout';

import '../styles/index.module.css';

import { useEffect, useState } from 'react';
import InputComponent from '../components/Input-component';
import { router } from 'next/client';
import { AuthService } from '../services/auth.service';


export default function Home() {
  let authService: AuthService;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    authService = new AuthService();

    if (isLoggedIn) {
      // navigate to next page
    }
  }, [isLoggedIn]);

  async function startLogin() {
    const successfulLogin = await authService.login({email, password});

    if (successfulLogin) {
      router.push('dashboard');
    }
  }

  return (
    <Layout title='Login' showMenu={false}>

      <div className='card mt-2.5'>

        <h1 className="font-mono text-center mb-3 bold">Logo text name</h1>

        <InputComponent onChange={setEmail} label='Email'/>
        <InputComponent onChange={setPassword} label='Password' options={{inputOptions: {type: 'password'}}}/>

        <button className='btn-primary mt-2.5 ring-0' onClick={startLogin}>
          Login
        </button>

      </div>
    </Layout>
  )
}
