import {UseCounter} from "../Hooks/index.js";
import Display from "./Display.jsx";
import {useState} from "react";

const Memorize = () => {
  const {counter, increment} = UseCounter(0)
  const [message , setMessage] = useState(false)
  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-12">
            <p className={'display-2 my-5'}>Counter :
              <Display counter={counter}/>
            </p>
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

export default Memorize;