import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function PrimaryNav({ signedIn }) {
  return (
    <nav className="primary">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {signedIn ? (
          <Fragment>
            <li>
              <Link to="/admin/products">Admin</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link to="/sign_in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign_up">Sign Up</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  )
}

export default PrimaryNav
