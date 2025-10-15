import icon from 'assets/citronela.jpg'

export default {
  name: 'citronela',
  sci: 'cymbopogon nardus',
  icon,
  note: 'media',
  description: [
    'aceite esencial que se extrae mediante destilación de la planta entera. Tiene un fuerte olor a limón y su aroma es fresco, limpio y vigorizante.',
    '## componentes',
    'citronelal y geraniol con otros componentes.',
  ],
  uses: [
    {
      name: 'antiséptico',
      description: 'ayuda a prevenir y tratar infecciones en la piel.'
    },
    {
      name: 'antifúngico',
      description: 'es útil para el pie de atleta.'
    },
    {
      name: 'analgesico',
      description: 'Puede calmar dolores de cabeza, dolores musculares y reumáticos.'
    },
    {
      name: 'equilibrante',
      description: 'tiene un efecto calmante y relajante que puede aliviar el estrés, la ansiedad y mejorar el estado de ánimo.'
    },
    {
      name: 'repelente',
      description: 'ahuyenta a mosquitos, moscas y avispas.'
    }
  ],
  concerns: [
    'Evitar su uso en caso de cardiopatías, ya que inhalado puede acelerar el ritmo cardiaco. Puede resultar irritante y sensibilizante sobre la piel. No usar durante el embarazo.'
  ],
  tags: [
    'antiséptico',
    'antifúngico',
    'analgesico',
    'antiestrés',
    'repelente'
  ]
}
