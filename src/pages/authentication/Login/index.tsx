import type { IAuthError } from '../../../interfaces/response/error/authError';
import type ErrorRes from '../../../models/errorResponse';

import { useEffect, useState } from 'react';
import { Link, useActionData, useNavigation, useSubmit } from 'react-router';

import { BannerUrl } from '../../../ulties/bannerUrl';
import { AppRoutes_Abs as AbsRoute } from '../../../ulties/appRoutes';
import useTwoWayBinding from '../../../hooks/useTwoWayBinding';
import Container from '../../../components/UI/Container';

// validate inputs
import ErrorMsg from '../../../components/UI/ErrorMsg';
import useValidate from '../../../hooks/useValidate';
import { isNotNull } from '../../../ulties/inputValidationUltil/validate';

// css
import classes from '../Authen.module.scss'
import EmailInput from '../formInputs/EmailInput';
import PasswordInput from '../formInputs/PasswordInput';


function Login() {

    const [email, onChangeEmail] = useTwoWayBinding<string>()
    const [password, onChangePassword] = useTwoWayBinding<string>()

    // useValidate was attached useMemo()
    const emailErrorMsg = useValidate('Email', email, [isNotNull])
    const passwordErrorMsg = useValidate('Password', password, [isNotNull])

    // Validate input before submit
    const submit = useSubmit()
    const actionData: ErrorRes<IAuthError> | undefined = useActionData()
    const [loginErrorMsg, setLoginErrorMsg] = useState('')

    useEffect(() => {
        if (actionData) {
            setLoginErrorMsg(actionData.data?.credential || '')
        }
    }, [actionData])

    useEffect(() => {
        setLoginErrorMsg('')
    }, [email, password])


    const [isSubmited, setIsSubmited] = useState(false)
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmited(true)

        if (emailErrorMsg || passwordErrorMsg || loginErrorMsg)
            return null

        submit(Object({ email, password }), {
            action: location.pathname,
            method: 'POST'
        })
    }

    // unable submit button while submitting
    const isSubmitting = useNavigation().state === 'submitting'

    return (
        <div style={{ backgroundImage: `url(${BannerUrl.url})`, backgroundRepeat: 'repeat', backgroundPosition: '0% 50%', backgroundSize: 'contain' }}>
            <Container className="text-zinc-500 text-center italic py-10">
                <div className={`${classes['authen-form']} bg-white mx-auto rounded-2xl`}>
                    <h1 className="py-16 capitalize text-2xl font-thin">Log In</h1>
                    <form onSubmit={submitHandler} className='px-3 md:px-6'>
                        <div className='flex flex-col'>
                            <EmailInput value={email} onChangeVal={onChangeEmail} />
                            <ErrorMsg msg={isSubmited ? emailErrorMsg : ''} />

                            <PasswordInput value={password} onChangeVal={onChangePassword} />
                            <ErrorMsg msg={isSubmited ? passwordErrorMsg || loginErrorMsg : ''} />
                        </div>
                        <button disabled={isSubmitting} className={`w-full py-4 mt-8 bg-zinc-900 capitalize ${isSubmitting ? 'text-zinc-700' : 'text-white'}`}>Sign in</button>
                    </form>
                    <span className='inline-block py-14'>
                        <Link to={AbsRoute.Singup}>
                            Create an account? <span className='text-blue-500'> Click</span>
                        </Link>
                    </span>
                </div>
            </Container>
        </div>
    );
}

export default Login;


