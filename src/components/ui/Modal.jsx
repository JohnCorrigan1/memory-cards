import React from 'react'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
      <div className='bg-white flex flex-col gap-10' style={MODAL_STYLES}>
        <h1 className='text-2xl'>{props.text}</h1>
        <div className='flex flex-col justify-center gap-10'>
        <button onClick={props.onClose} className='rounded-md text-xl'>{props.buttonText}</button>
        {props.over && <button className='text-xl' onClick={homeHandler}>Back Home</button>}
        </div>
      </div>
    </>
  )
}