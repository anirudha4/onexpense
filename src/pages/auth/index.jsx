import React, { useMemo, useState } from 'react'
import { ImGoogle } from 'react-icons/im'
import { useAuth, useForm } from '@hooks'
import Alert from '@components/common/Alert'
import AuthLayout from './AuthLayout'
import Button from '@components/common/Button'
import Form from '@components/common/Form'

const FORM_TYPE = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER'
}

const Login = () => {
    const { error, isLoggingIn, login, register, standardLogin } = useAuth();
    const [activeForm, setActiveForm] = useState(FORM_TYPE.LOGIN);

    const [form, handleChange] = useForm({
        email: '',
        password: ''
    });

    const isLoginForm = useMemo(() => FORM_TYPE.LOGIN === activeForm, [activeForm]);
    const toggleForm = () => isLoginForm ? setActiveForm(FORM_TYPE.REGISTER) : setActiveForm(FORM_TYPE.LOGIN)
    const handleSubmit = async () => {
        if (!form.email || !form.password) {
            return null;
        }
        if (isLoginForm) {
            return await standardLogin(form.email, form.password);
        }
        return await register(form.email, form.password);

    }
    return (
        <>
            <AuthLayout.Header title={isLoginForm ? 'Sign In to One Finance' : 'Sign Up to One Finance'} subTitle={'Ready. Set. Manage.'} />
            <div className="fixed top-10 right-10">
                <Button onClick={toggleForm} variant='outline'>{isLoginForm ? 'Register' : 'Login'}</Button>
            </div>
            {error && <Alert className={'mt-3'} variant={'destructive'} text={error} />}
            <Form width="100%" className='mt-10' onSubmit={handleSubmit}>
                <Form.Input onChange={handleChange} value={form.email} type={'email'} id={'email'} name={'email'} label={'Email'} placeholder={'Eg. anirudha@gmail.com'} />
                <Form.Input onChange={handleChange} value={form.password} type={'password'} id={'password'} name={'password'} label={'Password'} placeholder={'*********'} />
                <Button className={'mt-2'} loading={isLoggingIn}>
                    {isLoginForm ? 'Sign In' : 'Sign Up'}
                </Button>
            </Form>

            <div className="flex items-center gap-2 w-full mt-5">
                <div className="flex-1 border-t w-full bg-foreground"></div>
                <div className='muted-text text-muted-foreground text-xs'>OR CONTINUE WITH</div>
                <div className="flex-1 border-t w-full bg-foreground"></div>
            </div>

            <Button onClick={login} loading={isLoggingIn} variant='outline' icon={<ImGoogle />} className={'mt-5 w-full'}>
                Sign In with Google
            </Button>
        </>
    )
}

export default Login