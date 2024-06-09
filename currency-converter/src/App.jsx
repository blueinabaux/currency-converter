import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  }

  const convert = () => {
    setConvertedAmt(amount * currencyInfo[to])
  }

  return (
    <>
      <div className="container h-screen w-full flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
         action="" className=" h-full w-full flex flex-col justify-center items-center gap-[30px]">
          <div className="box h-[300px] w-[700px] bg-red400 flex flex-col justify-center items-center gap-[20px]">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange= {(curr) => setAmount(curr)}
              selectCurrency={from}
              onAmountChange={(amt) => setAmount(amt)}
            />

              <button className="h-[50px] w-[100px] bg-blue-500 text-white text-[15px] font-semibold rounded-[5px]" onClick={swap}>SWAP</button>

              <InputBox
                label="To"
                amount={convertedAmt}
                currencyOptions={options}
                onCurrencyChange= {(curr) => setTo(curr)}
                selectCurrency={to}
                amountDisable
              />
          </div>
          <button type="submit" className="h-[40px] w-[300px] bg-blue-500 text-white text-[18px] font-semibold rounded-[5px]">Convert</button>
        </form>
      </div>
      
    </>
  )
}

export default App
