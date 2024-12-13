import React, { useId } from 'react'

function InputBox({
    label,   //text label displayed abpve the input
    amount,  //The numeric value displayed in the input field.Controlled via the value attribute in the input.
    onAmountChange,  //callback function triggered when the value in the input field changes. It receives the updated numeric value
    selectCurrency = "usd",  //the currently selected currency value in the dropdown menu.It is a controlled prop passed down from the parent.
    onCUrrencyChange,  //Callback function triggered when a new currency is selected from the dropdown.
    currencyOptions = [], //array of currency optons(eg; eur, usd, inr) from the dropdown menu.
    amountDisable = false,  //boolean flag that disables the input field if true.
    currencyDisable = false,  //boolean flag that disbles the dropdown if true.
    className = ""  //Additional CSS classes passed to customize the component’s styling.

}) {
  
  const amountInputId = useId()
  
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        
        <div className='w-1/2'>

        {/* When the user clicks on the <label>, focus automatically moves to the input field it is associated with. */}
            <label htmlFor={amountInputId} className='text-black/50 mb-2 inline-block'>
            {label} 
            </label>
            
            <input 
              id={amountInputId} 
              className='outline-none w-full bg-gray-400 px-2 py-2 rounded-md' 
              type='number' 
              placeholder='Amount' 
              disabled={amountDisable} 
              value={amount} 
              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
            >
            </input>
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            
            <p className='text-black/50 mb-2 w-full'>Currency Type</p>
           
            <select 
              className="rounded-lg px-2 py-2 bg-gray-400 cursor-pointer outline-none" 
              value={selectCurrency} 
              onChange={(e) => onCUrrencyChange && onCUrrencyChange(e.target.value)} 
              disabled={currencyDisable}
            >

              {currencyOptions.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}

            </select>
        </div>
    </div>
  )
}

export default InputBox