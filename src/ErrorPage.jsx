// Error handling. Anytime an error is thrown this error page is rendered
import {useRouteError} from "react-router-dom"
import React from 'react'

const ErrorPage = () => {
    const error  = useRouteError();
    console.error(error);
    return(
        <div>
            <h1>This is a super fancy error message</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage