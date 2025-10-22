import icon from 'assets/limon.jpg'

export default {
  name: 'limon',
  label: 'limón',
  sci: 'citrus limon',
  icon,
  note: 'alta',
  description: [
    'aceite esencial que se extrae mediante presión en frío de la cáscara del fruto, categorizado dentro de la familia de los aromas agrios, caracterizado por un aroma refrescante y estimulante.',
  ],
  uses: [
    {
      name: 'circulación',
      description: 'estimula la circulación sanguínea y linfática.'
    },
    {
      name: 'equilibrante',
      description: 'ayuda a eliminar sentimientos de depresión, melancolía, cansancio mental, frustración y ansiedad.'
    },
    {
      name: 'estimulante',
      description: 'mejora el sistema inmunológico.'
    },
    {
      name: 'digestivo',
      description: 'favorece la digestión y actúa contra la hiperacidez gástrica.'
    },
    {
      name: 'regulador',
      description: 'presenta muchas propiedades prácticas para el cuidado de la piel, hidratandola y reduciendo el acné puesto que es antiséptico, astringente, curativo y depurativo.'
    },
    {
      name: 'purificante',
      description: 'ayuda a purificar el cuerpo, pues promueve la desintoxicación a través de la sangre y el hígado.'
    }
  ],
  concerns: [
    'debe utilizarse en concentraciones bajas y _no utilizar sobre la piel antes de exponerse al sol_, ya que contiene ingredientes que pueden reaccionar con los rayos ultravioleta y provocar irritación cutánea y manchas en la piel. evitar su uso prolongado en caso de baja presión sanguínea.'
  ],
  tags: [
    'equilibrante',
    'regulador',
    'estimulante',
    'tonificante',
    'circulacion',
    'purificante',
    'antioxidante',
    'antimicótico',
    'digestivo'
  ]
}
