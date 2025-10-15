export default {
  name: 'tonificante',
  notes: [
    'para masaje deportivo, antiestrés.',
    'para musculos rigidos agregar **1 gota** de canela..'
  ],
  formula: [
    {
      name: 'aceite esencial de lavanda',
      quantity: 4,
      unit: 'ml',
      ref: 'lavanda'
    },
    {
      name: 'aceite esencial de bergamota',
      quantity: 7.5,
      unit: 'ml',
      ref: 'bergamota'
    },
    {
      name: 'aceite esencial de ylang ylang',
      quantity: 5,
      unit: 'ml',
      ref: 'ylang-ylang'
    },
    {
      name: 'aceite esencial de romero',
      quantity: 10,
      unit: 'ml',
      ref: 'romero'
    },
    {
      name: 'aceite esencial de hierbabuena',
      quantity: 3.75,
      unit: 'ml',
      ref: 'hierbabuena'
    },
  ],
  recipes: [
    {
      name: 'agua de uso tonificante',
      ingredients: [
        {
          name: 'agua de azahar',
          quantity: 85,
          unit: 'ml',
        },
        {
          name: 'sinergia tonificante',
          quantity: 2.5,
          unit: 'ml',
        },
      ]
    },
    {
      name: 'loción tonificante',
      notes: [
        'por cada 20 ml de agua de uso se agregan 10 ml de alcohol.'
      ],
      ingredients: [
        {
          name: 'agua de uso',
          quantity: 20,
          unit: 'ml',
        },
        {
          name: 'tequila',
          quantity: 10,
          unit: 'ml',
        },
      ]
    },
    {
      name: 'crema tonificante',
      ingredients: [
        {
          name: 'manteca de salvado de arroz',
          quantity: 10,
          unit: 'ml',
        },
        {
          name: 'manteca de olivo',
          quantity: 20,
          unit: 'ml',
        },
        {
          name: 'sinergia tonificante',
          quantity: 3.75,
          unit: 'ml',
        },
      ]
    },
    {
      name: 'aceite tonificante',
      ingredients: [
        {
          name: 'aceite de almendras dulces',
          quantity: 20,
          unit: 'ml',
          ref: 'almendras-dulces'
        },
        {
          name: 'aceite de olivo',
          quantity: 15,
          unit: 'ml',
          ref: 'olivo'
        },
        {
          name: 'sinergia tonificante',
          quantity: 5,
          unit: 'ml',
        },
      ]
    },
  ]
}
