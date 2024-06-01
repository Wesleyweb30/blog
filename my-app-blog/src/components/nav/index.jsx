import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-dark  bg-dark mb-3">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        <Link className="nav-link" to={"/about"}>About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
