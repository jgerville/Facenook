import React, { useEffect, useState } from 'react'
import Intro from './Intro'

const Wall = ({currentUser, wallOwner, getWallInfo}) => {

  useEffect(() => {
    getWallInfo()
  }, [])

  return (
    <main>
      <Intro wallOwner={wallOwner} />
    </main>
  )
}

export default Wall;