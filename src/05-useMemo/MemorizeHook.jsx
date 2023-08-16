import {UseCounter} from "../Hooks/index.js";
import {useMemo, useState} from "react";

const getUpProcessor =(limit=100)=>{
  for (let i = 0; i < limit; i++) {
    console.log('come on...')
  }
  return `the function do ${limit} iterations ...`
}

const MemorizeHook = () => {
  const {counter, increment} = UseCounter(1000)
  const [message , setMessage] = useState(false)
  const memoGetUpProcessor = useMemo(()=>getUpProcessor(counter),[counter])

  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-12">
            <p className={'display-2 my-5'}>Counter :
              <code> {counter}</code>
            </p>
          </div>
          <div className="col-12">
            <h4>{memoGetUpProcessor}</h4>
          </div>
          <div className="col-12 flex gap-2">
            <button
                onClick={() => increment(1)}
                className={'btn btn-info btn-lg my-2'}
            >+1
            </button>
            <button
                onClick={()=>setMessage(!message)}
                className={'btn btn-info btn-lg my-2'}
            >Hide/Show [{JSON.stringify(message)}]
            </button>
          </div>
        </div>
      </div>
  );
};

export default MemorizeHook;