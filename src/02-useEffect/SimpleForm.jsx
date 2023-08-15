import {useEffect, useState} from "react";

const SimpleForm = () => {

  const [formState , setFormState ] =useState({
    username:'david salinas',
    email:'dnarino@gmail.com'
  });

  const {username,email} =formState;
  const onInputChange =(e)=>{
    const {name,value} = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(()=>{
    console.log('UseEffect called!!')
  })

  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-12 flex  flex-col justify-center content-center">
            <h1 className={'text-2xl my-4'}>Simple Form</h1>
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
              </form>
            </div>

          </div>
        </div>

      </div>
  );
};


export default SimpleForm;