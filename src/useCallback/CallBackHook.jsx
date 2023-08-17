import {useCallback, useState} from "react";
import ButtonCounter from "./ButtonCounter.jsx";

const CallBackHook = () => {
  const [counter, setCounter] = useState(0)

  const onIncrement = useCallback((step) => {
    setCounter((value) => value + step)
  }, [])

  /*const onIncrement = ()=>{
    setCounter(counter +1)
  }*/
  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-12">
            <p className={'display-3 my-4'}>CallBack Counter: <code>{counter}</code></p>
          </div>
        </div>
        <ButtonCounter
            onIncrement={onIncrement}
        />
      </div>
  );
};

export default CallBackHook;