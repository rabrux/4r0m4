import icon from 'assets/sandalo.jpg'

export default {
  name: 'sandalo',
  label: 'sándalo',
  sci: 'santalus album',
  icon,
  note: 'baja',
  description: [
    'aceite esencial que se extrae mediante destilación de la raíces y del interior del tronco de un árbol proveniente de la india y otras partes de asia, con un aroma dulce, amaderado y cálido. el sándalo combina bien con la mayoría de los aceites siendo sensual y relajante.',
    '## componentes',
    'hasta un 98% de santalol',
  ],
  uses: [
    {
      name: 'antiespasmódico',
      description: 'tiene propiedades antiespasmódicas'
    },
    {
      name: 'calmante',
      description: 'mejora la respiración y la calidad del sueño. también ayuda a tratar la depresión, trastornos del estrés, tensión, traumas, ansiedad y frustración.'
    },
    {
      name: 'regulador',
      description: 'efecto hidratante y equilibrador en la piel por lo que ayuda con el acné, la piel grasa, la resequedad, la irritación e inflamación.'
    }
  ],
  concerns: [
    'no se han registrado problemas por su uso en la mayoría de personas, los especialistas recomiendan evitarlo durante el embarazo, en menores de 6 años, en pacientes con gastritis o enfermedades hepáticas, personas medicadas con ansiolíticos, a punto de someterse a cirugías o con historial de reacciones alérgicas.',
  ],
  tags: [
    'antiespasmódico',
    'afrodisiaco',
    'calmante',
    'regulador'
  ]
}
