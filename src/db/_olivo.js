import icon from 'assets/olivo.jpg'

export default {
  name: 'olivo',
  sci: 'olea europaea',
  icon,
  note: 'base o vehícular',
  description: [
    'Aceite rico en antioxidantes, ácidos grasos monoinsaturados y vitamina E, lo que lo convierte en un ingrediente ideal para la aromaterapia. Posee un aroma suave y natural puede ayudar a relajar la mente y reducir el estrés.',
  ],
  uses: [
    {
      name: 'Antioxidante',
      description: 'previene el envejecimiento celular y también la formación de células cancerosas.'
    },
    {
      name: 'Antiinflamatorio',
      description: 'contiene oleocantal, que le confiere propiedades antiinflamatorias beneficiosas para dolores articulares y musculares leves.'
    },
    {
      name: 'Cardioprotector',
      description: 'gracias a su alto porcentaje de vitamina E mejora la circulación sanguínea, reduce el colesterol así como el riesgo de enfermedades del corazón al proteger las lipoproteínas de la oxidación y ayuda a controlar la presión arterial.'
    },
    {
      name: 'Digestivo',
      description: 'ayuda a la digestión y el estreñimiento, además de que reduce la inflamación del tracto gastrointestinal.'
    },
    {
      name: 'Hidratante',
    },
    {
      name: 'Relajante',
      description: 'alivia tensiones y ayuda a proteger el sistema nervioso.'
    }
  ],
  concerns: [
    'aumenta la sensibilidad de la piel al sol por lo que después de su uso se debe limitar la exposición solar. Si se experimenta  picazón en la piel, hinchazón o dificultad para respirar después de su uso, se debe buscar atención médica de inmediato.'
  ],
  tags: [
    'antioxidante',
    'antiinflamatorio',
    'cardioprotector',
    'digestivo',
    'hidratante',
    'relajante',
  ]
}
