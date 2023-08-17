import {Son} from './Son.jsx'
import {useCallback, useState} from 'react';

export const Father = () => {

  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const onIncrement = useCallback(
      (num) => {
        setValue((oldValue)=>oldValue + num)
      }
      , [])



  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-12">
            <h1 className={'h1'}>Padre</h1>
            <p className={'display-3'}> Total:<code> {value}</code></p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 my-4">
            {
              numbers.map(n => (
                  <Son
                      key={n}
                      number={n}
                      onIncrement={onIncrement}
                  />
              ))
            }
          </div>
        </div>

      </div>
  )
}
