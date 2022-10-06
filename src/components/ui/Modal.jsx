import React from 'react'
import './modal.css'
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  maxWidth: '500px',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLE = {
  backgroundColor: 'rgba(255), 0, 0, .9)',
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  zIndex: 1000
}

export default function Modal(props) {

  const homeHandler = () => {
    props.setMode(false)
  }

  if (!props.open) return null

  return (
    <>
    <div className=' bg-black bg-opacity-70' style={OVERLAY_STYLE}></div>
      <div className='popup bg-white flex flex-col gap-10 items-center rounded-xl' style={MODAL_STYLES}>
        <h1 className='text-2xl font-bold'>{props.text}</h1>
        <div className='flex flex-col justify-center items-center gap-10'>
        <button onClick={props.onClose} className='rounded-lg w-fit p-3 bg-cyan-500 hover:bg-cyan-600 shadow-md shadow-slate-500 text-xl'>{props.buttonText}</button>
        {props.over && <button className=' hover:bg-rose-600 text-xl rounded-lg bg-rose-500 w-fit p-3 shadow-md shadow-slate-500' onClick={homeHandler}>Back Home</button>}
        </div>
      </div>
    </>
  )
}