import icon from 'assets/argan.jpg'

export default {
  name: 'argán',
  sci: 'argania spinosa',
  icon,
  note: 'base o vehícular',
  description: [
    'aceite cosmético y comestible que se obtiene mediante la presión de las semillas maduras de la baya del árbol de argán. con un aroma suave, ligeramente a nuez y terroso por lo que resulta delicado y agradable.',
  ],
  uses: [
    {
      name: 'piel',
      description: 'se utiliza para hidratar la piel y el cabello, ya que debido a sus propiedades antiinflamatorias ayuda a que se calme la piel escamosa, seca y propensa a la irritación. Además puede tener un efecto calmante en el acné.',
    },
    {
      name: 'antioxidante',
      description: 'ya que es rico en tocoferoles.'
    },
    {
      name: 'antiséptico y antifúngico'
    },
    {
      name: 'digestivo',
      description: 'ayuda a reducir la absorción del colesterol y mejora la digestión así como el funcionamiento hepático.'
    }
  ],
  concerns: [
    'puede causar irritación en los ojos o heridas si se hace un mal uso de él. no debe utilizarse en personas con patologías en la piel.'
  ],
  tags: [
    'antiseptico',
    'antifúngico',
    'digestivo',
    'antioxidante',
    'antiinflamatorio'
  ]
}
