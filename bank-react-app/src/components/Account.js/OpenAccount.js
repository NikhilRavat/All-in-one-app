import React from 'react'

function OpenAccount() {
    return (
        <div>
            <h4>Open Account</h4>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="bank" className="form-label">Bank</label>
                            <select className='form-select' id="bank" name="bank">
                                <option>State Bank Of India - SBI</option>
                                <option>Bank Of India - BOI</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="account-type" className="form-label">Account Type</label>
                            <select className='form-select' id="account-type" name="account-type">
                                <option>Savings Account</option>
                                <option>Current Account</option>
                                <option>Recurring Account</option>
                                <option>Salary Account</option>
                            </select>
                        </div>
                        <hr />
                        <input type='submit' className='btn btn-primary' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OpenAccount
