import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'

import { oilList } from 'db'

import {
  FiX,
  FiMinimize,
  FiMaximize
} from 'react-icons/fi'

const Detail = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [ oil, setOil ] = useState()
  const [ isFullScreen, setIsFullScreen ] = useState( false )

  useMemo( () => {
    const o = oilList.find( ( i ) => i.name === params.name )

    if ( ! o )
      return navigate( '/aceites-esenciales' )

    setOil( o )
  }, [ params.name ] )

  const close = () => {
    navigate( '/aceites-esenciales' )
  }

  const toggleFullScreen = () => {
    setIsFullScreen( ! isFullScreen )
  }

  if ( ! oil )
    return null

  return <div
    className={ `oil-detail two hs ${ isFullScreen ? ' fullscreen' : '' }` }
  >
    <header className="bar">
      <h1>{ oil.name } <i>({ oil.sci })</i></h1>

      <button
        onClick={ toggleFullScreen }
      >
        { isFullScreen ? <FiMinimize /> : <FiMaximize /> }
      </button>

      <button
        onClick={ close }
      >
        <FiX />
      </button>
    </header>

    <section className="one hs air gap">
      { oil.description?.map( ( desc, index ) => <Markdown
        key={ index }
      >{ desc }</Markdown> ) }

      <h2>usos</h2>
      { oil.uses?.map( ( use, index ) => <p
        key={ index }
        ><b>{ use.label || use.name }</b> { use.description }</p> ) }
    </section>
  </div>
}

export default Detail
