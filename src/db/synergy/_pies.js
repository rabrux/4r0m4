export default {
  name: 'pies',
  label: 'pies',
  notes: [
    'para pies olorosos aumentar a 4 ml de hierbabuena y aumentar la menta a 0.6 ml.',
    'para pies cansados agregar árnica 2.5 ml.',
    'si practica algun deporte subir la dosis de menta a 1.25 ml.'
  ],
  formula: [
    {
      name: 'aceite esencial de hierbabuena',
      quantity: 0.6,
      unit: 'ml',
      ref: 'hierbabuena'
    },
    {
      name: 'aceite esencial de toronja',
      quantity: 7,
      unit: 'ml',
      ref: 'toronja'
    },
    {
      name: 'aceite esencial de bergamota',
      quantity: 2.5,
      unit: 'ml',
      ref: 'bergamota'
    },
    {
      name: 'aceite esencial de limón',
      quantity: 5,
      unit: 'ml',
      ref: 'limon'
    },
    {
      name: 'aceite esencial de menta',
      quantity: 2,
      unit: 'gotas',
      ref: 'menta',
    },
  ],
  recipes: [
    {
      name: 'loción pies',
      ingredients: [
        {
          name: 'tequila',
          quantity: 15,
          unit: 'ml',
        },
        {
          name: 'agua de rosas',
          quantity: 30,
          unit: 'ml',
        },
        {
          name: 'sinergia pies',
          quantity: 2.5,
          unit: 'ml',
        },
      ]
    },
    {
      name: 'crema pies',
      ingredients: [
        {
          name: 'crema de almendras',
          quantity: 7.5,
          unit: 'ml',
        },
        {
          name: 'sinergia pies',
          quantity: 1.25,
          unit: 'ml',
        },
      ]
    },
  ]
}
