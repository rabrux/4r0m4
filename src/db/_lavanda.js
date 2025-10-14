import icon from 'assets/lavanda.jpg'

export default {
  name: 'lavanda',
  sci: 'lavandula officinalis',
  icon,
  note: 'media',
  description: [
    'es un arbusto o matorral de crecimiento compacto y forma globosa, caracterizado por su follaje gris verdoso y sus elegantes espigas florales de tonalidades azuladas que le confieren una presencia espectacular en cualquier espacio donde se ubique.',
    '## componentes activos',
    'éteres de linalilo y geranilo, geraniol, linalol, cineol, d-borneol, limoneno, 1-pineno, cariofileno, ésteres de los ácidos butírico y valeriánico y cumarina.',
    '## dato curioso',
    'se dice que se colocaban flores de lavanda en la cama de los recien casados ya que se creía que esta ayudaba a calmar el nerviosismo de las mujeres hacia las relaciones sexuales. por esta razón se regalan flores a las prometidas, a menudo muy jóvenes.'
  ],
  uses: [
    {
      name: 'insomnio',
      description: 'su aroma alivia síntomas emocionales como el estrés, tranquiliza la ansiedad y el insomnio. unas gotas en la nuca, las cienes o en la almohada ayudan a conciliar el sueño.'
    },
    {
      name: 'hipertension',
      label: 'hipertensión',
      description: 'la infucion de lavanda ayuda con el tratamiento de la hipertensión.'
    },
    {
      name: 'sistema nervioso',
      description: 'ayuda a un mejoramiento del funcionamiento del sistema nervioso.'
    }
  ],
  concerns: [
    'no se use en caso de problemas con el embarazo, puede causar náuseas.'
  ],
  tags: [
    'antidepresivo',
    'cicatrizante',
    'antiséptica',
    'cicatrizante',
    'antiséptico',
    'antiespasmodica'
  ]
}
