import {useRouteError} from "react-router-dom"

export default function Page404() {
    const error:any = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>404 Not Found</h1>
            <p>Please find another place to call home 🙏</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}