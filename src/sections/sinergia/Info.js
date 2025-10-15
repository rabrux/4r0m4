import Markdown from 'react-markdown'

const data = [
  '## sinergia',
  'Los términos \'sinergia\' y \'mezcla sinérgica\' se refieren a uno de los conceptos más fascinantes dentro de la aromaterapia, ya que subraya la compleja relación entre la composición química de cada uno de los aceites esenciales, y la amplia gama de efectos que producen.',
  'La palabra sinergia proviene de la frase griega \'sunergos\' (συνέργεια), que se traduce como \'trabajar juntos\'. El proceso de sinergia es donde múltiples componentes de un sistema se unen para producir un efecto general que no puede reducirse a la simple suma de cada efecto individual. Es decir, la sinergia es la unión de los efectos de cada aceite esencial utilizado, en donde estos se complementan y potencian mutuamente, aumentando así su eficacia.',
  'Dentro de los beneficios que hay por utilizar sinergias, podemos encontrar que son convenientes para cada persona, pues permiten experimentar con lo que más le conviene a cada quien, de igual manera ofrecen máximos beneficios con el menor riesgo, además de que resultan potentes, ya que en comparación con sólo utilizar aceite esencial, estas están diseñadas para potenciar los efectos de los aceites esenciales, obteniendo mejores resultados, y lo mejor de todo es que hacen que los aceites esenciales estén disponibles a un costo más razonable.',
  'Por otro lado, es importante mencionar que el hecho de mezclar dos aceites específicos no significa que se esté produciendo necesariamente una sinergia, ya que algunas combinaciones pueden impedir que se aprovechen los beneficios de alguno de los aceites esenciales, efecto conocido como “antagonismo”.',
  'Otra cuestión a tener en cuenta son las CANTIDADES, ya que las proporciones en las que se mezclan los aceites esenciales también pueden marcar la diferencia; pues una proporción puede producir un efecto sinérgico mientras que otra puede producir un efecto antagónico aunque se utilicen los mismos aceites esenciales.',
  'Asimismo, a fin de garantizar su calidad, los aceites esenciales y las sinergias deben conservarse en condiciones óptimas, dentro de recipientes de vidrio oscuro, cerrados herméticamente y con cuentagotas incorporado, siendo lo más adecuado guardar los aceites esenciales en pequeñas cantidades, entre 5 y 20 mililitros.'
]

const Info = () => {

  return data.map( ( p, index ) => <Markdown
    key={ index }
  >
    { p }
  </Markdown> )
}

export default Info
