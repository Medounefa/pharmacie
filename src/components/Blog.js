import React from 'react'
// import medica from '../images/Medicament.jpg';
// import part from '../images/Partenaire.jpg';
// import hopi from '../images/Hopitaux.jpg';

export default function Blog() {
    return (
        <div>
             <div className="container">
                 <div className="row blogs">
                    <div className="col-sm-4 blog1">
                       <a href="#">Les medicaments</a>
                    </div>

                    <div className="col-sm-4 blog2">
                      <a href="#">Les fournisseurs</a>
                    </div>

                    <div className="col-md-4 blog3">
                    <a href="#">Les clients</a>
                    </div>

                 </div>
             </div>
        </div>
    )
}
