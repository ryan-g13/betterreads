import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import './Error.css'

const ErrorPage = () => {
    const error = useRouteError();
//     console.error(error);
    
//     return (
//         <div className='error-page'>
//             <h1>
//                 Oops!
//             </h1>
//             <p>Sorry, an unexpected error has occured</p>
//             <p>
//                 <i>{error.statusText || error.message}</i>
//             </p>
//         </div>    
//     );
    if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    }
    else if (error.status === 404) {
      // ...
    }

    return (
      <div className="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}


export default ErrorPage;