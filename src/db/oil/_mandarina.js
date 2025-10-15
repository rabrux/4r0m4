import icon from 'assets/mandarina.jpg'

export default {
  name: 'mandarina',
  sci: 'citrus reticulata',
  icon,
  note: 'alta',
  description: [
    'el aceite esencial que se extrae de la corteza del cítrico, con un olor suave y sutil pero fresco y vigorizante perteneciente a la familia de los aromas agrios.',
  ],
  uses: [
    {
      name: 'calmante',
      description: 'ayuda en dolores musculares.'
    },
    {
      name: 'circulación',
      description: 'ayuda a la circulación sanguínea regulando la hipertensión.'
    },
    {
      name: 'equilibrante',
      description: 'balancea el metabolismo, su aroma es muy efectivo para combatir el insomnio, calmar la hiperactividad, ayuda en el síndrome de estrés post trauma, depresión, equilibra estados de ánimo y tranquiliza a personas autistas.'
    },
    {
      name: 'tonificante',
      description: 'actúa como tonificante de la piel y ayuda en los procesos de cicatrización, estrías, piel grasa.'
    }
  ],
  concerns: [
    'no se debe aplicar antes de la exposición al sol, ya que puede causar manchas en la piel.'
  ],
  tags: [
    'antiviral',
    'calmante',
    'estimulante',
    'revitalizante',
    'equilibrante',
    'tonificante',
    'circulación'
  ]
}
