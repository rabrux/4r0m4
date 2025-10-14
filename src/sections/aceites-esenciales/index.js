import { useNavigate, Outlet } from 'react-router-dom'

import { FiHome, FiSearch, FiX } from 'react-icons/fi'
import { PiMusicNote } from 'react-icons/pi'

import { oilList } from 'db'

const AceitesEsenciales = () => {
  const navigate = useNavigate()

  return <div className="one hs">

    <header className="bar">
      <button>
        <FiHome />
      </button>

      <input
        placeholder="aceites esenciales"
        size={ 1 }
      />

      <button>
        <FiSearch />
      </button>

      <button>
        <FiX />
      </button>
    </header>

    <section className="one air hs">
      <ul className="oil-list">
        { oilList.map( ( oil, index ) => <li
          key={ index }
          className="oil-card"
        >
          <div
            className="header"
            onClick={ () => navigate( oil.name ) }
          >
            <img
              className="icon"
              src={ oil.icon }
              alt={ oil.name }
            />

            <div className="title">
              <h1>{ oil.label || oil.name }</h1>

              <i>{ oil.sci }</i>

              { oil.note ? <div className="note"><PiMusicNote /> { oil.note }</div>: null }
            </div>
          </div>

          <ul className="tags">
            { oil.tags?.map( ( tag, index ) => <li
              key={ index }
            >
              { tag }
            </li>) }
          </ul>
        </li> ) }
      </ul>

    </section>

    <Outlet />
  </div>
}

export default AceitesEsenciales
