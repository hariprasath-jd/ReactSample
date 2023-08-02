import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Test() {

  function load() {
    toast.warn('hi', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div>
      <h1 className='text-danger'>hello world</h1>
      <button className='btn btn-warning' onClick={() => load()}>load</button>
      <ToastContainer />
      <p id="ran"></p>
    </div>
  )
}

export default Test