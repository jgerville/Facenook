import React from 'react'

const TopNav = ({currentUser}) => {

  return (
    <nav className="top-nav">
      <ul>
        <li><a href="#">test</a></li>
        <li><a href="#">2</a></li>
        <li className="user-link"><a href="#">{currentUser.fname}</a></li>
        <li><a href="#">4</a></li>
      </ul>
    </nav>
  )
}

export default TopNav;