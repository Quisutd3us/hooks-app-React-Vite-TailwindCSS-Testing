import {useFetch} from "../Hooks/useFetch.js";
import {UseCounter} from "../Hooks/UseCounter.js";


const MultipleCustomHooks = () => {
  const {counter, increment, decrement, reset} = UseCounter(1)
  const {data, isLoading} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
  const {name, status, species} = !!data && data;

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
                ? (
                    <div className={"row"}>
                      <div className={"col-12 my-6"}>
                        <div
                            className={"bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"}
                            role="alert">
                          <div className={"flex"}>
                            <div className={"py-1"}>
                              <svg className={"fill-current h-6 w-6 text-teal-500 mr-4"}
                                   xmlns={"http://www.w3.org/2000/svg"}
                                   viewBox={"0 0 20 20"}>
                                <path
                                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                              </svg>
                            </div>
                            <div>
                              <p className={"font-bold"}>Loading..</p>
                              <p className={"text-sm"}>Make sure you connection Internet is ok</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                ) : (
                    <div className="row">
                      <div className="col-12">
                        <blockquote className="blockquote">
                          <p className="mb-0">{name}</p>
                          <footer className="blockquote-footer my-1">
                            Status: <cite title="Source Title">{status}</cite>{` , `}
                            Species: <cite title="Source Title">{species}</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                )
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