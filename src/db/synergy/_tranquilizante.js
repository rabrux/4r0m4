export default {
  name: 'tranquilizante',
  notes: [
    'no usar en rostro por que es citotóxica.',
    'para un efecto antiestrés y descontracturante agregar 7.5 ml de calendula.',
    'fijador: 4 ml de sándalo/2 ml de sándalo y 2 ml de rosas.'
  ],
  formula: [
    {
      name: 'aceite esencial de limón',
      quantity: 7.5,
      unit: 'ml',
      ref: 'limon'
    },
    {
      name: 'aceite esencial de bergamota',
      quantity: 10,
      unit: 'ml',
      ref: 'bergamota'
    },
    {
      name: 'aceite esencial de toronja',
      quantity: 7,
      unit: 'ml',
      ref: 'toronja'
    },
    {
      name: 'aceite esencial de mandarina',
      quantity: 15,
      unit: 'ml',
      ref: 'mandarina'
    },
    {
      name: 'aceite esencial de hierbabuena',
      quantity: 5,
      unit: 'ml',
      ref: 'hierbabuena'
    },
    {
      name: 'aceite de cannabis',
      quantity: 4,
      unit: 'ml',
      ref: 'cannabis'
    },
  ],
  recipes: [
    {
      name: 'aceite tranquilizante',
      ingredients: [
        {
          name: 'aceite de olivo',
          quantity: 45,
          unit: 'ml',
          ref: 'olivo'
        },
        {
          name: 'aceite de aguacate',
          quantity: 20,
          unit: 'ml',
          ref: 'aguacate'
        },
        {
          name: 'sinergia tranquilizante',
          quantity: 7.5,
          unit: 'ml',
        },
      ]
    },
    {
      name: 'crema tranquilizante',
      ingredients: [
        {
          name: 'crema de almendras dulces',
          quantity: 15,
          unit: 'ml',
          ref: 'almendras-dulces'
        },
        {
          name: 'sinergia tranquilizante',
          quantity: 2.5,
          unit: 'ml',
        },
      ]
    },
    {
      name: 'loción tranquilizante',
      notes: [
        'se puede también utilizar agua de azahar.'
      ],
      ingredients: [
        {
          name: 'agua de rosas',
          quantity: 40,
          unit: 'ml',
        },
        {
          name: 'mezcal',
          quantity: 15,
          unit: 'ml',
        },
        {
          name: 'sinergia tranquilizante',
          quantity: 1.25,
          unit: 'ml',
        },
      ]
    },
  ]
}
