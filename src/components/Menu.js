import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-green bg-green navbarAdmin">
              <div className="container-fluid">
               <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 name">
                            MabinPharm
                    </ul>
                    <form className="d-flex admins">
                        <Link to="/connect">
                            <button type="button" className="btn btn-info supAd">SuperAdmin</button>
                        </Link>
                        <Link to="/connect">
                            <button type="button" className="btn btn-primary adMo">Admin</button>
                        </Link>
                    </form>
                    </div>
                </div>
              </nav>
        </div>
    )
}
