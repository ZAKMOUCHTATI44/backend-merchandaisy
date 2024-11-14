import React from 'react'
import Menu from './Menu'
import New from './New'
import TopBar from './TopBar'

const Nav = ({auth}) => {
  return (
    <>
        <TopBar />
        <New auth={auth} />

    </>
  )
}

export default Nav
