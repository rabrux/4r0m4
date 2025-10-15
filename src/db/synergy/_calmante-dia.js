export default {
  name: 'calmante-dia',
  label: 'calmante día',
  formula: [
    {
      name: 'aceite esencial de sándalo',
      quantity: 3.75,
      unit: 'ml',
      ref: 'sandalo'
    },
    {
      name: 'aceite esencial de bergamota',
      quantity: 3.75,
      unit: 'ml',
      ref: 'bergamota'
    },
    {
      name: 'aceite esencial de lavanda',
      quantity: 5,
      unit: 'ml',
      ref: 'lavanda'
    },
  ],
  recipes: [
    {
      name: 'crema calmante',
      notes: [
        'para uso todo el día.',
        'manteca de carite 7.5 ml extra'
      ],
      ingredients: [
        {
          name: 'manteca de salvado de arroz',
          quantity: 40,
          unit: 'ml',
        },
        {
          name: 'manteca de olivo',
          quantity: 5,
          unit: 'ml',
        },
        {
          name: 'sinergia calmante',
          quantity: 7.5,
          unit: 'ml',
        },
      ]
    },
    {
      name: 'agua de uso clamante',
      notes: [
        'también se puede usar infusión de valeriana, manzanilla, godolobo en lugar del agua de azahar.'
      ],
      ingredients: [
        {
          name: 'infusión de bugambilia',
          quantity: 85,
          unit: 'ml',
        },
        {
          name: 'agua de azahar',
          quantity: 20,
          unit: 'ml',
        },
        {
          name: 'sinergia calmante',
          quantity: 1.25,
          unit: 'ml',
        },
      ]
    },
    {
      name: 'aceite calmante',
      notes: [
        'sándalo 7.5 ml para frío interno.'
      ],
      ingredients: [
        {
          name: 'aceite de almendras dulces',
          quantity: 20,
          unit: 'ml',
        },
        {
          name: 'aceite de olivo',
          quantity: 15,
          unit: 'ml',
        },
        {
          name: 'sinergia calmante',
          quantity: 5,
          unit: 'ml',
        },
      ]
    },
    {
      name: 'loción sedante',
      notes: [
        'evitar la menta y la hierbabuena.'
      ],
      ingredients: [
        {
          name: 'infusión de bugambilia',
          quantity: 85,
          unit: 'ml',
        },
        {
          name: 'tequila',
          quantity: 20,
          unit: 'ml',
        },
        {
          name: 'sinergia calmante',
          quantity: 1.25,
          unit: 'ml',
        },
      ]
    },
  ]
}
