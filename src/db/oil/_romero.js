import icon from 'assets/romero.jpg'

export default {
  name: 'romero',
  sci: 'salvia rosmarinus',
  icon,
  note: 'media',
  description: [
    'Aceite esencial que se obtiene mediante destilación de la planta florida, con un aroma fresco, dulce y vigorizante.',
    '## componentes activos',
    'borneol, canfeno, alcanfor, cineol, lineol, pineno, resinas y saponina.'
  ],
  uses: [
    {
      name: 'analgesico',
      description: 'alivia los dolores musculares'
    },
    {
      name: 'antiséptico',
      description: 'regula la secreción sebácea por lo que elimina la caspa además de que se puede emplear para lavar heridas.'
    },
    {
      name: 'antiviral',
      description: 'útil en casos de asma, sinusitis y bronquitis.'
    },
    {
      name: 'estimulante',
      description: 'estimula enérgicamente la circulación sanguínea y del cuero cabelludo, de igual forma mejora la respiración.'
    },
    {
      name: 'revitalizante',
      description: 'ayuda a eliminar la melancolía, desmayos e histeria.'
    },
    {
      name: 'regulante',
      description: 'equilibra la presión sanguínea. mejora las funciones del hígado y las musculares.'
    },
    {
      name: 'tonificador',
    }
  ],
  concerns: [
    'Usar en concentraciones bajas.  Evitar durante el embarazo y en casos de epilepsia o presión alta.'
  ],
  tags: [
    'analgesico',
    'antiséptico',
    'antiviral',
    'estimulante',
    'revitalizante',
    'regulante',
    'tonificador'
  ]
}
