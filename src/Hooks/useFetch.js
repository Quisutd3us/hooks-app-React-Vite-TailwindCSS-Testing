import {useEffect, useState} from "react";

export const useFetch = (url) => {
  const [stateFetch,setStateFetch] =useState({
    data:null,
    isLoading:true,
    hasError:null
  })

  const getFetch = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStateFetch({
      data,
      isLoading: false,
      hasError: null
    })
  }

  useEffect(() => {
    getFetch()
  }, [url])

  return {
    data: stateFetch.data,
    isLoading:stateFetch.isLoading,
    hasError:stateFetch.hasError
  }
}