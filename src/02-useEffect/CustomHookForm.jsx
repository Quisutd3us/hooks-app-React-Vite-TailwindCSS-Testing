import {useForm} from '../Hooks/useForm.js'

function CustomHookForm() {
  const { username, email, password, onResetForm, onInputChange} = useForm({
    username: '',
    email: '',
    password: ''
  })

  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-12 flex  flex-col justify-center content-center">
            <h1 className={'text-2xl my-4'}>Custom Hook Form</h1>
            <div className="w-full max-w-lg">
              <form className="bg-white shadow-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                  </label>
                  <input
                      name={'username'}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type={'text'}
                      placeholder={'Username'}
                      value={username}
                      onChange={onInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name={'email'}
                      type={'email'}
                      placeholder={'youremail@email.com'}
                      value={email}
                      onChange={onInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name={'password'}
                      type={'password'}
                      placeholder={'secret'}
                      value={password}
                      onChange={onInputChange}
                  />
                </div>
                <button
                    onClick={onResetForm}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  RESET
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CustomHookForm;