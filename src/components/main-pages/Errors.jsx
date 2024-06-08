import React, { useContext } from 'react'
import { AuthContext } from '../login-pages/authcontext'

export default function Errors() {
  const {erroDetails} = useContext(AuthContext);

  return (
    <div className="error-container">
    <h1>An Error Occurred</h1>
    {erroDetails ? (
      <div>
        <p>{erroDetails.message}</p>
        {/* Display more error details if needed */}
      </div>
    ) : (
      <p>Something went wrong.</p>
    )}
  </div>
  )
}
