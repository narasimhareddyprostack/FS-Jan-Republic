import React, { useState, useEffect } from 'react'
import MyCurrencyOptions from './MyCurrencyOptions'
import Axios from 'axios'
const MyCurrencyApp = () => {
    const [currencyOptions, setcurrencyOptions] = useState([])
    useEffect(() => {
        Axios.get('https://api.frankfurter.app/currencies')
            .then((response) => {
                console.log(Object.keys(response.data))
                setcurrencyOptions(Object.keys(response.data))
            })
            .catch()
    }, []);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h1>Currency Converter App</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <h2 className='fromto-title'>From Currency:</h2>
                                        {
                                            currencyOptions.length > 0 ? <React.Fragment> <MyCurrencyOptions currencyOptions={currencyOptions} /></React.Fragment> : null
                                        }

                                    </div>
                                    <div className="col-6">
                                        <h2 className='fromto-title'>To Currency:</h2>
                                        <MyCurrencyOptions />
                                    </div>
                                </div>
                            </div>
                            <div className="card-title">
                                <h1>Result</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCurrencyApp
