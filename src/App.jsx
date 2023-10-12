import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { apiFetch } from './redux/apiSlice';


function App() {
  const  {data,isLoading,hasError}= useSelector((state) => state.api);
  const dispatch = useDispatch();

  console.log(data, isLoading, hasError);
  const handleClick = () => {
    dispatch(apiFetch());  
  }
  
  // console.log(data[0].name);
  return (<>
 
    <div> Hello World</div>  

    <button onClick={handleClick}>API FETCH</button>
    { !isLoading && !hasError && data && 
      data.map((d) => {
        return <div>{d.name}</div>
      })
    }
  </>
  )
}

export default App
