const isNumber = ( target ) => {
  return Number( target ).valueOf() === target
}

const normalize = ( str ) => {
  if ( isNumber( str ) )
    return `${ str }`

  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export default normalize
