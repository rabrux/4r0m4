import icon from 'assets/germen-trigo.jpg'

export default {
  name: 'germen-trigo',
  label: 'germen de trigo',
  sci: 'triticum aestivum',
  icon,
  note: 'base o vehícular',
  description: [
    'Aceite que se obtiene de la alta presión en frío del germen, representa una fuente en vitaminas K, D, B y en betacaroteno así como en ácidos grasos poliinsaturados y en vitamina E. Dentro de la aromaterapia frecuentemente es adicionado a otros aceites vehiculares para prolongar su tiempo de conservación. adecuado para todo tipo de pieles.'
  ],
  uses: [
    {
      name: 'antioxidante',
      description: 'su gran riqueza en ácidos grasos poliinsaturados y en vitamina E le permite luchar contra las radicales libres, por lo que  ayuda a combatir síntomas del envejecimiento prematuro.'
    },
    {
      name: 'hidratante',
      description: 'contiene una cantidad significativa de ácidos grasos que nutren la piel.'
    },
    {
      name: 'regenerador',
      description: 'al ser una fuente natural de vitamina E, ayuda a reparar y regenerar los tejidos, siendo útil para tratar afecciones como eccemas, acné y quemaduras.'
    },
    {
      name: 'relajante',
      description: 'puede ayudar a reducir la fatiga y mejorar el rendimiento deportivo. Sus vitaminas del grupo B también pueden ayudar con el estrés y la ansiedad.'
    },
    {
      name: 'protector',
      description: 'protege eficientemente las células y los tejidos contra el envejecimiento prematuro y  contra los rayos solares.'
    }
  ],
  concerns: [
    'el aceite no se recomienda a quienes tienen intolerancia al gluten. No se exponga al sol directamente después de la aplicación tópica.'
  ],
  tags: [
    'antioxidante',
    'hidratante',
    'regenerador',
    'relajante',
    'protector'
  ]
}
