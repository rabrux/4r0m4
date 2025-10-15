import { useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { synergyList } from 'db'

import {
  FiArrowLeft
} from 'react-icons/fi'

const Detail = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [ synergy, setSynergy ] = useState()

  useMemo( () => {
    const s = synergyList.find( ( i ) => i.name === params.name )

    if ( ! s )
      return navigate( '/sinergia' )

    setSynergy( s )
  }, [ params.name ] )

  if ( ! synergy )
    return null

  return <div
    className="one hs fullscreen"
  >

    <header className="bar">
      <button
        onClick={ () => navigate( '/sinergia' ) }
      >
        <FiArrowLeft />
      </button>

      <h1>{ synergy.label || synergy.name }</h1>
    </header>

    <section className="two hs air gap text">
      <div className="hs gap">
        <h1>formula</h1>

        <ul>
          { synergy.formula.map( ( ingredient, index ) => <li
            key={ index }
          >
            { ingredient.name }
            &nbsp;
            <b>{ ingredient.quantity } { ingredient.unit }</b>
          </li> ) }
        </ul>
      </div>

      { synergy.recipes?.length > 0 ? <div className="one hs gap">
        <h1>recetas</h1>

        <div className="one hs gap">
          { synergy.recipes?.map( ( recipe, index ) => <>
            <h2>{ recipe.name }</h2>

            <ul>
              { recipe.ingredients.map( ( ingredient, index ) => <li
                key={ index }
              >
                { ingredient.name }
                &nbsp;
                <b>{ ingredient.quantity } { ingredient.unit }</b>
              </li> ) }
            </ul>
          </> ) }
        </div>
      </div> : null }
    </section>
  </div>
}

export default Detail
