import { useState, useMemo } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { flatten } from 'flat'

import { FiHome, FiSearch, FiX } from 'react-icons/fi'
import { PiMusicNote } from 'react-icons/pi'

import { oilList } from 'db'

const normalize = ( str ) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

const AceitesEsenciales = () => {
  const navigate = useNavigate()
  const [ search, setSearch ] = useState( '' )
  const [ list, setList ] = useState( [ ...oilList ] )

  useMemo( () => {
    const plainList = flatten( oilList )

    const aux = Object.keys( plainList )
      .map( ( k ) => ( {
        [ k ]: normalize( plainList[ k ] )
      } ) )
      .reduce( ( acc, cur ) => ( {
        ...acc,
        ...cur
      } ), {} )

    const newList = Object.keys( aux )
      .filter( key => aux[ key ].indexOf( search ) >= 0 )
      .reduce( ( acc, cur ) => {
        const pre = cur.split( '.' )[ 0 ]

        const inAcc = acc.indexOf( pre ) !== -1

        if ( ! inAcc )
          acc = [ ...acc, pre ]

        return acc
      }, [] )
      .map( ( index ) => ( {
        ...oilList[ parseInt( index ) ]
      } ) )

    setList( [ ...newList ] )

  }, [ search ] )

  const handleChange = ( e ) => {
    const { value } = e.target

    setSearch( value )
  }

  const clearSearch = () => {
    setSearch( '' )
  }

  return <div className="one hs">

    <header className="bar">
      <button
        onClick={ () => navigate( '/main' ) }
      >
        <FiHome />
      </button>

      <input
        placeholder="aceites esenciales"
        size={ 1 }
        onChange={ handleChange }
        value={ search }
      />

      { search !== '' ? <button
        onClick={ clearSearch }
      >
        <FiX />
      </button> : null }
    </header>

    <section className="one air hs">
      <ul className="oil-list">
        { list.map( ( oil, index ) => <li
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
