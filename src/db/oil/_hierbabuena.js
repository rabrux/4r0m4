import icon from 'assets/hierbabuena.jpg'

export default {
  name: 'hierbabuena',
  sci: 'mentha spicata',
  icon,
  note: 'media',
  description: [
    'aceite esencial que se obtiene por destilación al vapor de hojas y flores, con un aroma ligero, refrescante y tranquilizante.',
    '## componentes',
    'mentol, mentona, limoneno, menteno y felandreno.',
  ],
  uses: [
    {
      name: 'anlagésico',
      description: 'tiene efectos calmantes para piernas cansadas e hinchadas, útil también para dolores musculares, artritis, gota y reumatismo.'
    },
    {
      name: 'antiséptico',
      description: 'útil sobre las heridas.'
    },
    {
      name: 'estimulante',
      description: 'anima el sistema nervioso y favorece la concentración, por lo que se aconseja para despejar la mente y estimular la productividad.'
    },
    {
      name: 'digestivo',
      description: 'calma náuseas y vómitos, además de que ayuda con las flatulencias.'
    },
    {
      name: 'revitalizante',
      description: 'sirve para refrescar la piel.'
    },
    {
      name: 'regulador',
      description: 'ayuda en la regulación de la temperatura corporal.'
    },
    {
      name: 'tranquilizante',
    }
  ],
  concerns: [
    'Debido a su alto contenido en mentol, el aceite de hierbabuena debe de utilizarse en concentraciones bajas pues puede provocar irritación, además no se recomienda su aplicación en menores de dos años y con personas de piel delicada o sensible.',
    'No debe utilizarse antes de dormir, en personas con epilepsia, ni junto con tratamientos homeopáticos. Úsese con moderación.'

  ],
  tags: [
    'anlagésico', 
    'antiséptico',
    'estimulante',
    'digestivo',
    'revitalizante',
    'regulador',
    'tranquilizante',
  ]
}
