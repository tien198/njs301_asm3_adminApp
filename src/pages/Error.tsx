import { useRouteError, type ErrorResponse } from 'react-router';
import MainNav from '../layout/MainNav';

export default function Error() {
    const error = useRouteError() as Error & ErrorResponse;

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
        </>
    )
}
