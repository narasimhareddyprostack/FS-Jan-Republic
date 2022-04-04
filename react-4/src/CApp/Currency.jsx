import React,{useState,useEffect} from 'react';
import './Currency.css';
import CurrencyOptions from './CurrencyOptions';

const Currency = () => {
    const [currencyOptions,setcurrencyOptions] = useState([])
    const [fromCurrency,setfromCurrency] = useState('')
    const [toCurrency,settoCurrency] = useState('')
    const [fromAmount,setfromAmount] = useState(0)
    const [toAmount,settoAmount] = useState(0)
    const [currencyName,setcurrencyName] = useState({})

    useEffect(()=>{
        fetch('https://api.frankfurter.app/currencies')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setcurrencyOptions(Object.keys(data))
            setfromCurrency(Object.keys(data)[0])
            settoCurrency(Object.keys(data)[0])
            setcurrencyName(data)
        })
    },[])
    useEffect(()=>{
        if(parseInt(fromAmount)===0){
            settoAmount(0)
        }else if(fromAmount===''){
            settoAmount('')
        }else if(fromCurrency===toCurrency){
            settoAmount(fromAmount)
        }else{
            fetch(`https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`)
            .then(res=>res.json())
            .then(data=>settoAmount(Object.values(data.rates)[0]))
        }
    },[fromCurrency,toCurrency,fromAmount,toAmount])
  return (<>
    <div className='container'>
        <div className='grid-container'>
            <div className='grid-item1 text-center'>
                <h1>Currency Converter</h1>
            </div>
            <div className='grid-item2'>
                <h2 className='fromto-title'>From Currency:</h2>
                <CurrencyOptions currencyOptions={currencyOptions} prop='from currency'
                updateHandler={(e=>setfromCurrency(e.target.value))}/>
                <p className='currencyFullname my-3'>
                    Enter Amount In: {currencyName[`${fromCurrency}`]}
                </p>
                <div className='amountInput fromAmount'>
                    <input type='number' className='form-control border-0 rounded-0' value={fromAmount}
                    onChange={e=>setfromAmount(e.target.value)}/>
                </div>
            </div>
            <div className='grid-item3'>
                <h2 className='fromto-title'>To Currency:</h2>
                <CurrencyOptions currencyOptions={currencyOptions} prop='to currency'
                updateHandler={e=>settoCurrency(e.target.value)}/>
                <p className='currencyFullname my-3'>
                    Enter Amount In: {currencyName[`${toCurrency}`]}
                </p>
                <div className='amountInput toAmount'>
                    <input type='number' className='form-control border-0 rounded-0' value={toAmount}  readOnly autoComplete='off'
                    onChange={e=>settoAmount(e.target.value)}/>
                </div>
            </div>
            <div className='grid-item4'>
                <h2 className='Final-result text-center mt-4'>{fromAmount} {fromCurrency} = {toAmount} {toCurrency}</h2>
            </div>
        </div>
    </div>
  </>)
}

export default Currency;