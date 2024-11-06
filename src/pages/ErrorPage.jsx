import { NavLink, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-full text-center py-10 space-y-3">
     <Helmet>
                <title>404 Error - Gadget-Heaven</title>
            </Helmet>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <figure className="w-full">
      <img src="https://img.icons8.com/?size=100&id=ns5r8yX65OIx&format=png&color=000000" alt="" className="mx-auto" />
      </figure>
      <NavLink to="/" className="btn btn-error">
        Return Home
      </NavLink>
    </div>
  );
}
