import { useState, useMemo } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { flatten } from 'flat'

import {
  FiHome,
  FiX,
  FiInfo
} from 'react-icons/fi'

import { synergyList } from 'db'

import normalize from 'fn/normalize'

import Info from './Info'

const Sinergia = () => {
  const navigate = useNavigate()
  const [ search, setSearch ] = useState( '' )
  const [ list, setList ] = useState( [ ...synergyList ] )
  const [ isInfoOpen, setIsInfoOpen ] = useState( false )

  useMemo( () => {
    const plainList = flatten( synergyList )

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
        ...synergyList[ parseInt( index ) ]
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

  const toggleInfo = () => {
    setIsInfoOpen( ! isInfoOpen )
  }

  return <div className="one hs">

    <header className="bar">
      <button
        onClick={ () => navigate( '/main' ) }
      >
        <FiHome />
      </button>

      <input
        placeholder="sinergias"
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

    <section className="one hs">
      <ul className="simple-list">
        { list.map( ( synergy, index ) => <li
g         key={ index }
          className="synergy-card"
          onClick={ () => navigate( `/sinergia/${ synergy.name }` ) }
        >
          { synergy.label || synergy.name }
        </li> ) }
      </ul>
    </section>

    <footer className="bar vs reverse">
      <button
        onClick={ toggleInfo }
      >
        <FiInfo />
      </button>
    </footer>

    { isInfoOpen ? <footer
      className="one hs air gap"
    >
      <Info />
    </footer> : null }

    <Outlet />

  </div>
}

export default Sinergia
