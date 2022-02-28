import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <div className="row statistique">
               <div className="col-md-4 dash">
                   
                   <a href="#">
                       Dashbord
                   </a>
                   <br /><br />
                   <a href="#">
                     Produits en Vente
                   </a>
                   <br /><br />
                   <a href="#">
                     Depenses
                   </a>
                   <br /><br />
                   <a href="#">
                     Produits
                   </a>

               </div>

               <div className="col-md-4 statis">
                    <div className="nbr_pro">
                       <p><span>3000</span><br />Nombre de produits en vente</p>
                    </div>
                    <div className="prod_vend">
                       <p><span>1000</span><br />Produit deja vendu</p>
                    </div>
                    <div className="dep">
                       <p><span>6.000.000</span><br />Depenses</p>
                    </div>
               </div>
            </div>
        </div>
    )
}
