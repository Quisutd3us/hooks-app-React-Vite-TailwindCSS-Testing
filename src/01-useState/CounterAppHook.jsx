import {UseCounter} from "../Hooks/UseCounter.js";

const CounterAppHook = () => {

  const {counter, increment, decrement, reset} = UseCounter(14)

  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-sm-12  my-8 flex flex-col gap-3 justify-center text-center border-2 border-emerald-500 p-2 rounded-xl">
            <h1 className={' text-5xl'}>Counter Hook: {counter} </h1>
          </div>
          <div className="col-sm-12  flex flex-row justify-center">
            <button
                onClick={()=>increment(2)}
                className={'mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>+1
            </button>
            <button
                onClick={()=>decrement()}
                className={'mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>-1
            </button>
            <button
                onClick={reset}
                className={'mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>Reset
            </button>
          </div>
        </div>
      </div>

  );
};


export default CounterAppHook;