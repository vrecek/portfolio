import React from 'react'

const BackgroundIcon = ({ icon }: { icon: JSX.Element }) => {
   return (
      <span className="background-icon">
         { icon }
      </span>
   )
}

export default BackgroundIcon