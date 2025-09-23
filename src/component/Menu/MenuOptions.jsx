import React from 'react'

export default function MenuOptions({menu}) {
  return (
    <>
        <option key={menu.id} value={menu.name}>{menu.name}</option>
    </>
  )
}

