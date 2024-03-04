import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HttpService from '../../Fetch/fetch';

function BankList() {
    const banks = useSelector((state) => state.banksReducer);
    const token = useSelector(state => state.userReducer.token);
    const dispatch = useDispatch();

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
    useEffect(() => {
        dispatch({ type: 'BANKS_REQUESTED' })
        HttpService.FetchData('https://localhost:44367/api/Banks', token, Success, Error)
    }, []);
    return (
        <div>
            <h1>Hello Banks</h1>
            <p>{JSON.stringify(banks.data)}</p>
            <p>{JSON.stringify(banks.error)}</p>
        </div>
    )
}

export default BankList
