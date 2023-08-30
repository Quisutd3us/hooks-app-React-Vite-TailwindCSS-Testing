import {describe, test, expect} from "@jest/globals";
import {act, renderHook} from "@testing-library/react";
import {useForm} from "../../Hooks/useForm.js";

describe('Suite of testing for Custom Hook UseForm', () => {
  const initialForm = {
    name: 'David',
    email: 'dnarino@gmail.com'
  }
  test('Must be return default values', () => {
    const {result} = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
          name: initialForm.name,
          email: initialForm.email,
          formState: initialForm,
          onInputChange: expect.any(Function),
          onResetForm: expect.any(Function)
        }
    )
  })

  test('Must be change the name of form', () => {
    const newName = 'Luis Lukas';
    const {result} = renderHook(() => useForm(initialForm));
    const {onInputChange} =result.current;
    act(()=>{
      onInputChange({target:{name:'name',value: newName}});
    })
    expect(result.current.name).toBe(newName);
  })

  test('Must rest the form to initial value', () => {
    const {result} = renderHook(() => useForm(initialForm));

    const newName = 'Juan Pablo';
    const {onInputChange, onResetForm} = result.current;
    act(() => {
      onInputChange({target: {name: 'name', value: newName}});
      onResetForm();
    })
    expect(result.current).toEqual({
          name: initialForm.name,
          email: initialForm.email,
          formState: initialForm,
          onInputChange: expect.any(Function),
          onResetForm: expect.any(Function)
        }
    )
  })
})