import {describe,test,expect} from "@jest/globals";
import {act, renderHook} from "@testing-library/react";
import {UseCounter} from '../../Hooks/index.js'
describe('Suit of tests for Custom Hook UseCounter.js',()=>{
  test('Must be return default values',()=>{
    const {result}=renderHook(()=>UseCounter());
    const {counter,increment,decrement,reset} = result.current;
    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('Must be return 100 is the initialValue is 100',()=>{
    const {result}=renderHook(()=>UseCounter(100));
    const {counter} =result.current;
    expect(counter).toBe(100)
  })

  test('Increment function must return the initial value + 1',()=>{
    const {result} = renderHook(()=>UseCounter(50));
    const {increment} = result.current;
    act(()=>{
      increment();
      increment(5);
    })
    expect(result.current.counter).toBe(56)
  })

  test('decrement function must return the initial value ',()=>{
    const {result} = renderHook(()=>UseCounter(50));
    const {decrement} = result.current;
    act(()=>{
      decrement();
      decrement(2)
    })
    expect(result.current.counter).toBe(47)
  })

  test('reset function must return the initial value 10',()=>{
    const {result} = renderHook(()=>UseCounter(50));
    const {increment,decrement,reset} = result.current;
    act(()=>{
      increment(5);
      decrement(1);
      reset();
    })
    expect(result.current.counter).toBe(50)
  })

})