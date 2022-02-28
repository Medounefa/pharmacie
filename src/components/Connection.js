import React from 'react'
import { Link } from 'react-router-dom'
export default function Connection() {
   
    return (
        <div>
         <div className="container">
            <form action="" className="formule">
              <p className="connect">Se connecter</p>
                <div className="form-group">
                  <label className="control=label">Username</label>
                  <input type="text" className="form-control" name="user"/>
                </div>
                <br />
                <div className="form-group">
                  <label className="control=label">Password</label>
                  <input type="password" className="form-control" name="paswword" required/>
                </div><br />

                <Link to="/dashboard">
                    <button className="btn btn-primary"  >Se connecter</button>
                </Link>
                </form>
            </div>
        </div>
    )
}
