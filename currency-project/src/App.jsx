import { useState } from 'react';
import './App.css';
import { InputBox } from './components/index';
import useCurrency from './hooks/useCurrency';

function App() {
  // current date
  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  };

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('ugx');
  const [result, setResult] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  // swap the currency input boxes
  const swapCurrencies = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setResult(amount);
    setAmount(result);
  };

  // convert the currency
  const convertCurrency = () => {
    let result = (amount * currencyInfo[to]).toFixed(2);
    setResult(result);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-70 rounded-lg p-5 backdrop-blur-sm bg-white/20">
          <div className="p-4 text-white bg-slate-700 text-center font-bold text-4xl rounded-xl mb-2">
            {getDate()}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertCurrency();
            }}
          >
            {/* amount input */}
            <div>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>

            {/* swap button */}
            <div className="relative w-full h-1">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-800 text-white px-2 py-0.5 flex"
                onClick={swapCurrencies}
              >
                <span className='text-lg'>SWAP</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* converted input */}
            <div>
              <InputBox
                label="to"
                amount={result}
                amountDisabled
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>

            {/* convert button */}
            <div className="w-full pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg py-3 px-4"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
