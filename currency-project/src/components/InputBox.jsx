/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useId } from 'react';

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className = '',
}) => {
  // generate a unique id
  const id = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 inline-block mb-2">
          {label}
        </label>
        <input
          type="number"
          id={id}
          className=" bg-transparent w-full outline-none py-1.5 rounded-lg"
          placeholder="amount"
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
          disabled={amountDisabled}
        />
      </div>
      <div className="flex flex-wrap justify-end text-right w-1/2">
        <label htmlFor={id} className="text-black/40 w-full mb-2">
          Currency Type
        </label>
        <select
          name="currency"
          id={id}
          className="p-2 rounded-lg bg-gray-300 cursor-pointer
          w-full outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  selectedCurrency: PropTypes.string,
  amountDisabled: PropTypes.bool,
  currencyDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
