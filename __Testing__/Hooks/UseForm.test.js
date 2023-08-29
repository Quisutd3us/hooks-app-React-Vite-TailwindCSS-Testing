import {act, renderHook} from "@testing-library/react";
import {useForm} from "../../src/Hooks/useForm.js";

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

  test('Must add id:123 in function onInputChange', () => {
    const {result} = renderHook(() => useForm(initialForm));

    const newName = 'Juan Pablo';
    const {onInputChange} = result.current;
    act(() => {
      onInputChange({target: {name: 'name', value: newName}});
    })
    expect(result.current.name).toBe(newName)
    expect(result.current.formState).toEqual(
        { name: 'Juan Pablo', email: 'dnarino@gmail.com' }
    )
  })
  test('Must rest the form to initial value', () => {
    const {result} = renderHook(() => useForm(initialForm));

    const newName = 'Juan Pablo';
    const {onInputChange,onResetForm} = result.current;
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