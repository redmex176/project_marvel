import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import './404.scss';

const Page404 = () => {
    return(
        <div className="not-found__banner">
            <ErrorMessage/>
            <p className="not-found__title">Page doesn't exits!</p>
            <Link className="not-found__link" to="/">Back to main page!</Link>
        </div>
    )
}

export default Page404;