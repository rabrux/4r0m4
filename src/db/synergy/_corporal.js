export default {
  name: 'corporal',
  formula: [
    {
      name: 'aceite argán',
      quantity: 7,
      unit: 'ml',
      ref: 'argan'
    },
    {
      name: 'aceite esencial mandarina',
      quantity: 5,
      unit: 'ml',
      ref: 'mandarina'
    },
    {
      name: 'aceite esencial sándalo',
      quantity: 5,
      unit: 'ml',
      ref: 'sandalo'
    },
    {
      name: 'aceite esencial ylang ylang',
      quantity: 2.5,
      unit: 'ml',
      ref: 'ylang-ylang'
    },
    {
      name: 'aceite esencial limón',
      quantity: 1.25,
      unit: 'ml',
      ref: 'argan'
    },
  ],
  recipes: [
    {
      name: 'loción corporal',
      ingredients: [
        {
          name: 'agua de rosas',
          quantity: 30,
          unit: 'ml',
        },
        {
          name: 'tequila',
          quantity: 30,
          unit: 'ml',
        },
        {
          name: 'sinergia corporal',
          quantity: 7.5,
          unit: 'ml',
        }
      ]
    },
    {
      name: 'crema corporal',
      ingredients: [
        {
          name: 'crema de almendras dulces',
          quantity: 7.5,
          unit: 'ml',
          ref: 'almendras-dulces'
        },
        {
          name: 'sinergia corporal',
          quantity: 2.5,
          unit: 'ml',
        }
      ]
    },
    {
      name: 'aceite corporal base',
      ingredients: [
        {
          name: 'aceite de aguacate',
          quantity: 15,
          unit: 'ml',
          ref: 'aguacate'
        },
        {
          name: 'aceite olivo',
          quantity: 7,
          unit: 'ml',
          ref: 'olivo'
        },
        {
          name: 'aceite pepita de uva',
          quantity: 7.5,
          unit: 'ml',
          ref: 'pepita-uva'
        },
        {
          name: 'aceite de sésamo',
          quantity: 4,
          unit: 'ml',
          ref: 'sesamo'
        },
      ]
    },
    {
      name: 'aceite corporal',
      ingredients: [
        {
          name: 'aceite de aguacate',
          quantity: 15,
          unit: 'ml',
          ref: 'aguacate'
        },
        {
          name: 'aceite olivo',
          quantity: 7,
          unit: 'ml',
          ref: 'olivo'
        },
        {
          name: 'aceite pepita de uva',
          quantity: 7.5,
          unit: 'ml',
          ref: 'pepita-uva'
        },
        {
          name: 'aceite de sésamo',
          quantity: 4,
          unit: 'ml',
          ref: 'sesamo'
        },
        {
          name: 'sinergia corporal',
          quantity: 7.5,
          unit: 'ml',
        }
      ]
    },
    {
      name: 'crema corporal (piel seca y reseca)',
      ingredients: [
        {
          name: 'crema de almendras dulces',
          quantity: 7.5,
          unit: 'ml',
          ref: 'almendras-dulces'
        },
        {
          name: 'aceite germen de trigo',
          quantity: 1.25,
          unit: 'ml',
          ref: 'germen-trigo'
        },
        {
          name: 'aceite esencial sándalo',
          quantity: 1.25,
          unit: 'ml',
          ref: 'pepita-uva'
        },
        {
          name: 'sinergia corporal',
          quantity: 2.5,
          unit: 'ml',
        }
      ]
    },
  ]
}
