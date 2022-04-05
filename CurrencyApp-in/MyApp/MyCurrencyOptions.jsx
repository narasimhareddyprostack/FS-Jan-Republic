import React from 'react'

const MyCurrencyOptions = ({ currencyOptions }) => {
    /*  const options = currencyOptions.map((data, index) => {
         return <option key={index} value={data}>{data}</option>
     }) */
    return (
        <div>
            <pre>{JSON.stringify(currencyOptions)}</pre>


        </div>
    )
}

export default MyCurrencyOptions
