import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    function Show() {
        alert("hi da");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Messenger</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <form className="d-flex" role="search">

                        <button className="btn btn-outline-success" type="submit" onClick={() => Show()}>Search</button>
                    </form>
                </div>
            </nav >
        </div >
    )
}



export default NavBar