import React from 'react';

const CurrencyOptions = ({currencyOptions,prop,updateHandler}) => {
    const Options = currencyOptions.map((data,index)=>{
      return <option key={index} value={data}>{data}</option>
    })
  return (<>
      <div className='selectOptions mt-3'>
        <select className='form-select border-0 rounded-0' onChange={updateHandler}>
          {Options}
        </select>
    </div>
  </>)
}

export default CurrencyOptions;

// {
//   prop==='from currency'?
//   <div className='selectOptions mt-3'>
//     <select className='form-select border-0 rounded-0' onChange={updateHandler}>
//       {Options}
//     </select>
// </div>:
// prop==='to currency'?
// <div className='selectOptions mt-3'>
//     <select className='form-select border-0 rounded-0' onChange={updateHandler}>
//       {Options}
//     </select>
// </div>:null
// }