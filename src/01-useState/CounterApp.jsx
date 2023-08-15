import {useState} from "react";

const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  })
  const {counter1, counter2, counter3} = state

  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-sm-12  my-8 flex flex-col gap-3 justify-center text-center ">
            <h1 className={' text-5xl'}>Counter: {counter1}</h1>
            <h1 className={' text-5xl'}>Counter: {counter2}</h1>
            <h1 className={' text-5xl'}>Counter: {counter3}</h1>
          </div>
          <div className="col-sm-12  flex flex-row justify-center">
            <button
                onClick={() => setCounter({
                  ...state,
                  counter1: counter1 + 1
                })}
                className={' mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>+1
            </button>
            <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>-1</button>
          </div>
        </div>
      </div>

  );
};


export default CounterApp;