import React, { useState } from 'react';
import { evaluate } from 'mathjs';  // Import mathjs
import './App.css';

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;

    switch (buttonValue) {
      case 'AC':
        setValue("");
        break;
      case 'DE':
        setValue(value.slice(0, -1));
        break;
      case '=':
        try {
          // Evaluate the expression using mathjs
          const result = evaluate(value);
          setValue(result.toString());
        } catch {
          setValue('Error');
        }
        break;
      default:
        setValue(value + buttonValue);
        break;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="calculator">
          <form action="">
              <div className='display'>
                <input type="text" value={value} readOnly />
              </div>
              <div>
                <input type='button' value="AC" onClick={handleButtonClick} />
                <input type='button' value="DE" onClick={handleButtonClick} />
                <input type='button' value="." onClick={handleButtonClick} />
                <input type='button' value="/" onClick={handleButtonClick} />
              </div>
              <div>
                <input type='button' value="7" onClick={handleButtonClick} />
                <input type='button' value="8" onClick={handleButtonClick} />
                <input type='button' value="9" onClick={handleButtonClick} />
                <input type='button' value="*" onClick={handleButtonClick} />
              </div>
              <div>
                <input type='button' value="4" onClick={handleButtonClick} />
                <input type='button' value="5" onClick={handleButtonClick} />
                <input type='button' value="6" onClick={handleButtonClick} />
                <input type='button' value="+" onClick={handleButtonClick} />
              </div>
              <div>
                <input type='button' value="1" onClick={handleButtonClick} />
                <input type='button' value="2" onClick={handleButtonClick} />
                <input type='button' value="3" onClick={handleButtonClick} />
                <input type='button' value="-" onClick={handleButtonClick} />
              </div>
              <div>
                <input type='button' value="00" onClick={handleButtonClick} />
                <input type='button' value="0" onClick={handleButtonClick} />
                <input type='button' value="=" className='equal' onClick={handleButtonClick} />
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
