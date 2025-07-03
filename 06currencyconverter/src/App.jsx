import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

const convert = () => {
  const result = amount * currencyInfo[to];
  setConvertedAmount(Number(result.toFixed(4)));  // work to 4 decimal
}


  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          `url(https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg)`
      }}
    >
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault() 
            convert()
          }}
        >
          <div className='w-full mb-1'>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
          />
          </div>
          <div className='relative w-full h-0.5'>
            <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
             onClick={swap}>Swap</button>
          </div>
            <div className='w-full mb-1'>
          <InputBox
            label="to"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={to}
          />
          </div>
          <button
  type="submit"
  className="w-full bg-blue-600 flex justify-center text-white rounded-lg px-4 py-2"
>
  Convert {from.toUpperCase()} to {to.toUpperCase()}
 </button>


        </form>
      </div>
    </div>
  )
}

export default App
