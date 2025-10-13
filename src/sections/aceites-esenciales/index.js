import { FiHome, FiSearch, FiX } from 'react-icons/fi'

import { oilList } from 'db'

const AceitesEsenciales = () => {

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

    <section className="two air hs">
      <ul className="oil-list">
        { oilList.map( ( oil, index ) => <li
          key={ index }
          className="oil-card"
        >
          <div className="header">
            <img
              className="icon"
              src={ oil.icon }
              alt={ oil.name }
            />

            <div className="title">
              <h1>{ oil.label || oil.name }</h1>

              <i>{ oil.sci }</i>
            </div>
          </div>

          <ul className="tags">
            { oil.tags.map( ( tag, index ) => <li
              key={ index }
            >
              { tag.label || tag.name }
            </li>) }
          </ul>
        </li> ) }
      </ul>

    </section>

  </div>
}

export default AceitesEsenciales
