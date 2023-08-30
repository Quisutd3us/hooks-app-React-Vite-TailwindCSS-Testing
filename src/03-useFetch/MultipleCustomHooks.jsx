import {useFetch, UseCounter} from "../Hooks";
import LoadingCharacter from "./LoadingCharacter.jsx";
import Character from "./Character.jsx";

const MultipleCustomHooks = () => {
  const {counter, increment, decrement, reset} = UseCounter()
  const {data, isLoading} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
  const {id} = !!data && data;
  return (
      <>
        <div className={'container'}>
          <div className={"row"}>
            <div className={"col-12"}>
              <h1 className={'display-4 my-5'}>Rick & Morty Characters..</h1>
            </div>
          </div>

          {/*loading message*/}
          {
            isLoading
                ? <LoadingCharacter/>
                : <Character
                    {...data}
                    key={id}
                />

          }
          <div className="row">
            <div className="col-12 flex gap-3 justify-center my-3">
              <button
                  onClick={() => decrement(1)}
                  className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Previous Character
              </button>
              <button
                  onClick={reset}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Reset
              </button>
              <button
                  onClick={() => increment(1)}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Next Character
              </button>
            </div>
          </div>
        </div>
      </>
  )
}

export default MultipleCustomHooks;