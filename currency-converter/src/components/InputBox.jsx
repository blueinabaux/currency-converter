

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    
    className = "",
}) {

    // console.log(currencyOptions);
    

    return (
        <div className={`bg-white h-[100px] w-[400px] rounded-lg text-sm flex `}>
            <div className="left h-full w-[50%] bg-reen-700 flex flex-col justify-center items-start px-[20px] gap-[15px] ">
                <label htmlFor="" className="text-[15px]">
                    {label}
                </label>
                <input 
                    type="number"
                    placeholder="Amount"
                    className=" h-[30px] w-[60%] px-[5px]"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                  />
            </div>
            <div className="right h-full w-[50%] bg-bue-700 flex flex-col justify-center items-end px-[20px] gap-[15px]">
                <h1 htmlFor="" className="text-[15px]">
                    Currency Type
                </h1>
                <select name="curr" id="" className="h-[30px] w-[60%] px-[5px]" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
                    {
                        currencyOptions.map((curr) => {
                            // console.log(curr);
                            
                                return(
                                    <option key={curr} value={curr}>
                                    {curr}
                                    </option>
                                );
                            
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;
