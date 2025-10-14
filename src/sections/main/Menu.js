import { NavLink } from 'react-router-dom'

import { FiX } from 'react-icons/fi'

const menu = [
  {
    to: '/aceites-esenciales',
    label: 'aceites esenciales'
  },
  {
    to: '/sinergia',
    label: 'sinergias'
  },
  {
    to: '/la-magia-del-perfume',
    label: 'la magia del perfume'
  },
  {
    to: '/aroma-vs-humor-efluvio',
    label: 'aroma vs humor efluvio'
  },
  {
    to: '/clasificacion-estimulos-odorificos',
    label: 'clasificacion de los estimulos odorificos y su uso en el masaje'
  },
  {
    to: '/aspecto-historico-perfume',
    label: 'aspecto historico del perfume'
  },
  {
    to: '/desarrollo-historico-aromaterapia',
    label: 'desarrollo historico de la aromaterapia'
  },
  {
    to: '/familias-basicas-de-fragancias',
    label: 'familias basicas de fragancias'
  },
  {
    to: '/psicoesencias',
    label: 'psicoesencias'
  },
  {
    to: '/sistema-nervioso',
    label: 'sistema nervioso'
  },
  {
    to: '/cultura-aceite',
    label: 'cultura del aceite'
  },
  {
    to: '/clasificacion-aromas',
    label: 'clasificacion de los aromas'
  },
  {
    to: '/cinco-elementos',
    label: 'los cinco elementos'
  },
  {
    to: '/glosario',
    label: 'glosario'
  },
]

const Menu = ( {
  close = () => {}
} ) => {

  return <div className="full hs">
    <header className="bar">
      <h1 className="one">indice</h1>

      <button
        onClick={ close }
      >
        <FiX />
      </button>
    </header>

    <section className="one hs">
      <ul>
        { menu
          .map( ( { to, label }, index ) => <li
            key={ index }
          >
            <NavLink
              to={ to }
              onClick={ close }
              className={ ( { isActive } ) => isActive ? 'active' : '' }
            >
              { label }
            </NavLink>
          </li> ) }
      </ul>
    </section>
  </div>
}

export default Menu
