import icon from 'assets/naranja.jpg'

export default {
  name: 'naranja',
  sci: 'citrus aurantium sinensis',
  icon,
  note: 'media alta',
  description: [
    'Aceite esencial que se extrae por presión en frío de la corteza del fruto. Su aroma se percibe como dulce, fluido, cálido y relajante, al contrario de lo que ocurre con otros cítricos que son frescos y estimulantes.',
    '## componentes',
    'limoneno, citral, sinensal y citronelal.'
  ],
  uses: [
    {
      name: 'antiespasmódico',
      description: 'relaja los músculos, alivia dolores de cabeza y el dolor estomacal.',
    },
    {
      name: 'calmante',
      description: 'calma la acidez  así como la ansiedad, la hiperactividad, la depresión, la frustración y el enojo.',
    },
    {
      name: 'equilbrante',
      description: 'proporciona seguridad emocional y recarga el sistema emocional, además de que es efectivo en casos de insomnio.',
    },
    {
      name: 'estimulante',
      description: 'estimula el apetito.',
    },
    {
      name: 'regulador',
      description: 'combate la alopecia y la irritación del cuero cabelludo, caspa, soriasis y eczema.',
    },
    {
      name: 'revitalizador',
      description: 'es auxiliar en casos de fatiga crónica y fibromialgia.',
    }
  ],
  concerns: [
    'Utilizar en concentraciones bajas pues puede provocar irritación o fotosensibilización y con ello causar manchas en la piel si se usa antes de exponerse a los rayos solares o UV.'
  ],
  tags: [
    'antiespasmódico',
    'calmante',
    'equilbrante',
    'apetito',
    'revitalizador'
  ]
}
