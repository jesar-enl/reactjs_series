import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const ref = useRef(null);

  // generate password automatically using useCallback()
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '!@#$%^&*()_+~?';
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // copy password to clipboard
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    ref.current.select(); //select the value the page returns
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-10 bg-gray-800 text-orange-600">
      <h1 className="text-white text-3xl font-bold mb-2 my-3 text-center">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          name=""
          id=""
          className="outline-none w-full py-1 px-3"
          value={password}
          placeholder="Password"
          readOnly
          ref={ref}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          type="button"
          onClick={copyPassword}
        >
          copy
        </button>
      </div>
      <div className="form flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            className="cursor-pointer"
            type="range"
            id="length"
            name="length"
            min={10}
            max={128}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numbers"
            name="numbers"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characters"
            name="characters"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>

      {/* with generate button */}
      {/*
      <div className="mt-10">
        <h1 className="text-white text-3xl font-bold mb-2 my-3 text-center">
          Password Generator with Button
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            name=""
            id=""
            className="outline-none w-full py-1 px-3"
            value={password}
            placeholder="Password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            type="button"
            onClick={() => {
              let chars = '';
              if (numberAllowed) chars += '0123456789';
              if (charAllowed)
                chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
              let password = '';
              for (let i = 0; i < length; i += 1) {
                password += chars.charAt(
                  Math.floor(Math.random() * chars.length)
                );
              }
              setPassword(password);
            }}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              type="range"
              id="length"
              name="length"
              min={6}
              max={128}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numbers"
              name="numbers"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characters"
              name="characters"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characters">Characters</label>
          </div>
          <button
            className="bg-blue-600 rounded-lg p-2 text-white"
            type="button"
            onClick={() => {
              let chars = '';
              if (numberAllowed) chars += '0123456789';
              if (charAllowed)
                chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
              let password = '';
              for (let i = 0; i < length; i += 1) {
                password += chars.charAt(
                  Math.floor(Math.random() * chars.length)
                );
              }
              setPassword(password);
            }}
          >
            Generate
          </button>
        </div>
      </div> 
      */}
    </div>
  );
}

export default App;
