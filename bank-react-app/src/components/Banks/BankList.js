import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HttpService from '../../Fetch/fetch';
import BankCard from './BankCard';
import { useNavigate } from 'react-router-dom';

function BankList() {
    const banks = useSelector((state) => state.banksReducer);
    const token = useSelector(state => state.userReducer.user.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Success = (banks) => {
        dispatch({
            type: 'BANKS_RECEIVED',
            payload: banks
        })
    }

    const Error = (err) => {
        dispatch({
            type: 'BANKS_ERROR',
            error: err
        })
    }

    const AddBank = () => {
        navigate('/banks/add');
    }

    useEffect(() => {
        dispatch({ type: 'BANKS_REQUESTED' })
        HttpService.FetchData('https://localhost:44367/api/Banks', token, Success, Error)
    }, [token]);
    return (
        <div className='container-fluid'>
            <div className="row mt-3">
                <div className="col-md-12 text-end">
                    <button className='btn btn-primary' onClick={AddBank}>Add New Bank</button>
                </div>
            </div>
            <hr />
            <div className='row'>
                {banks.data.length > 0 && banks.data.map(bank => {
                    return <BankCard key={bank.id} bank={bank} />
                })}
            </div>
        </div>
    )
}

export default BankList
