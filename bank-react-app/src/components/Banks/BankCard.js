import React from 'react'
//import { Link } from 'react-router-dom';

function BankCard({ bank }) {
    //console.log(bank);
    const cardStyle = {
        boxShadow: "2px 2px 5px 2px rgb(0,0,0,0.5)",
        cursor: "pointer"
    };
    return (
        <div className='col-md-3' style={{ flex: 1 }}>
            <div className='card h-100 bank-card' style={cardStyle}>
                <img className='card-img-top' alt="Bank" src={bank.bankLogoUrl} style={{ height: "70px", width: "auto", padding: "0 20px" }} />
                <div className="card-body">
                    <h5 className="card-title">{bank.bankName}</h5>
                    <div className="row">
                        <div className="col-md-4">Mobile Number</div>
                        <div className='col-md-1'>:</div>
                        <div className="col-md-6">
                            <a className='nav-link' href={`tel:${bank.contactNumber}`}>{bank.contactNumber}</a>
                        </div>
                        <div className="col-md-4">Email</div>
                        <div className='col-md-1'>:</div>
                        <div className="col-md-6"><a href={`mailto:${bank.email}`}>{bank.email}</a></div>
                        <div className="col-md-4">WebStie</div>
                        <div className='col-md-1'>:</div>
                        <div className="col-md-6 mb-1"><a href={bank.website}>{bank.website}</a></div>
                    </div>
                    {/* <hr className='m-0' />
                    <div className="">
                        <Link to={'/open-account'} className="w-100 mt-2 btn btn-primary">Open Account</Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default BankCard
