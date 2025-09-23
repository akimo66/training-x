import React from 'react'

export default function Menu({value,onChange,addMenu,}) {

  return (
    <>
      <input type="text" placeholder='メニューを追加' value={value} onChange={onChange} />
      <button type='button' onClick={addMenu}>追加</button>
    </>
  )
}
