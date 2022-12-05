import './App.css';
import React from 'react'; 
import { useState,useEffect } from 'react';

function App() {
  
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      'https://api.github.com/users/hospital'
    )
    .then((response) => response.json())
    .then(data => setData(data));
  

  }, [ ]);
  if(data)
  return <pre>{JSON.stringify(data, null, 2)}</pre>
  return (
    <div className="App">
<h1>Data</h1>{data}   </div>
  );
}
export default App;
