import { useState } from 'react'
import backgoundImage from '../src/assets/currencyBG.jpg'
import './App.css'
import './index.css'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    
    const [amount, setAmount] = useState(0)  //Tracks the input value (amount to be converted).
    const [convertedAmt, setConvertedAmt] = useState(0)  //Tracks the converted amount.
    const [from, setFrom] = useState('usd') //Stores the base currency
    const [to, setTo] = useState('inr') //Stores the target currency 
    
    const currencyInfo = useCurrencyInfo(from)
    console.log('Currency Info:', currencyInfo);

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)                // Base currency becomes target currency
        setTo(from)                // Target currency brcomes base currency
        setConvertedAmt(amount)    //Preserve the previous amount as the converted amount
        setAmount(convertedAmt)    //Swap the displayed amount and converted value
    } 

    const convert = () => {
        setConvertedAmt(amount * currencyInfo[to])
    }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover'
    style={{backgroundImage: `url(${backgoundImage})`}}>

        <div className='w-full'>

            <div className='w-full max-w-lg mx-auto border border-gray-60 rounded-xl p-5 backdrop-blur-sm bg-white/30'>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    convert()
                }}>
                    <div className='w-full mb-2'>
                        <InputBox 
                            label="From" 
                            amount={amount} 
                            currencyOptions={options} 
                            onCUrrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        
                        <button type='button' className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                        Swap
                        </button>
                    </div>
                    <div>
                        <InputBox
                            label='To'
                            amount={convertedAmt}
                            currencyOptions={options}
                            onCUrrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <div>
                        <button type='submit' className="w-full bg-blue-600 text-white px-4 py-3 mt-2 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
  );
}

export default App
