import { useNavigate, useRouteError, type ErrorResponse, type NavigateFunction } from 'react-router';
import MainNav from '../layout/MainNav';
import ErrorModal from '../components/modal/ErrorModal';
import { AppRoutes_Abs } from '../ulties/appRoutes';

export default function Error() {
    const error = useRouteError() as Error & ErrorResponse;
    let nav: NavigateFunction | undefined = useNavigate()
    if (error.status !== 401)
        nav = undefined

    let title = error.message || 'Error'
    let message = error.data || 'Something went wrong!'

    // message = JSON.parse(error.data).message
    if (error.status === 404) {
        title = 'Not Found!'
        message = 'Could not find resoure or page.'
    }
    else if (error.status === 401) {
        title = error.data || 'Unauthorized'
        message = error.statusText || 'You do not have permission for this resoure.'
        // message = error.data.message
    }
    else if (error.status === 500)
        message = error.data || 'Server error'

    return (
        <>
            <MainNav />
            <div className='h-32 lg:h-60'></div>
            <div className='flex flex-col items-center w-full gap-5'>
                <h3 className='uppercase text-3xl font-bold '>{title}</h3>
                <p>{message}</p>
            </div>
            <div className='h-96'></div>
            <ErrorModal truthyFnc={() => nav?.(AppRoutes_Abs.Login)} />
        </>
    )
}
