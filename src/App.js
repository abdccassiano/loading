import React , {useEffect, useState} from 'react';
import './App.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

function App() {

  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=>response.json())
    .then(response=>{
      const {body} = response
      console.log(body)
      setPost(body)
    })
  }, []);

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      {post ? post : <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open>
        <CircularProgress color="inherit" />
      </Backdrop>}
    </div>
  );
}

export default App;
