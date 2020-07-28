import { Link } from 'react-router-dom';
import React from 'react';

export default function Header () {
    return (
        <header>
        <h1>ANYWHERE FITNESS</h1>
        <nav>
          <button>
            <Link to='/'>Home</Link>
          </button>
          <button>
            <Link to='/signin'>Sign In</Link>
          </button>
          <button>
            <Link to='/register'>Register</Link>
          </button>
        </nav>
      </header>
    )
}
