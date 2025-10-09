import { useState } from 'react'

import { FaQuoteLeft } from 'react-icons/fa'
import {
  FiMenu,
  FiArrowLeft,
  FiArrowRight
} from 'react-icons/fi'

const App = () => {
  const [ isCiteOpen, setIsCiteOpen ] = useState( false )

  const toggleCite = () => {
    setIsCiteOpen( ! isCiteOpen )
  }

  return <div className="hs">
    <header className="bar">
      <h1 className="one">aromaterapia</h1>

      <button
      >
        <FiMenu />
      </button>
    </header>

    <section className="two air hs jc-center">
      <div className="vs gap">
        <div className="icon size-4x">
          <FaQuoteLeft />
        </div>

        <cite className="size-3x ta-right">
          habia cientos de olores en su ropa, el olor de la arena, piedras, musgo, incluso el olor de la salchicha que habia comido hace semanas, s&oacute;lo un olor estaba ausente, el suyo. por primera vez en su vida Grenouille se percato que no ten&iacute;a un aroma propio, era como si nunca hubiera existido.
          <sup>1</sup>
        </cite>

      </div>
    </section>

    <footer className="bar vs space-between">
      <button>
        <FiArrowLeft />
      </button>

      <button
        onClick={ toggleCite }
      >
        <FaQuoteLeft />
      </button>

      <button>
        <FiArrowRight />
      </button>
    </footer>

    { isCiteOpen ? <footer
      className="one hs air"
    >
      <ol>
        <li>
          1. Tykwer, T. (Director). (2006). Perfume: historia de un asesino. Constantin Film.
        </li>
      </ol>
    </footer> : null }

  </div>
}

export default App
