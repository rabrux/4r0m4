import icon from 'assets/avellana.jpg'

export default {
  name: 'avellana',
  sci: 'corylus avellana',
  icon,
  note: 'base o vehícular',
  description: [
    'Aceite extraído de la semilla del árbol avellano, rico en propiedades nutricionales y medicinales gracias a que posee importantes vitaminas y minerales, por lo que es utilizado dentro de la aromaterapia como vehículo para aceites esenciales ya que la piel lo absorbe con facilidad sin tapar los poros.',
  ],
  uses: [
    {
      name: 'astringente',
      description: 'ideal para tratar las pieles grasas.'
    },
    {
      name: 'antiinflamatorio',
      description: 'se utiliza para tratar y aplacar irritaciones que pueda tener la piel.'
    },
    {
      name: 'hidratante',
      description: 'gracias a su riqueza de ácidos grasos penetra en la piel y la hidrata en profundidad, además revitaliza y controla el encrespamiento del cabello.'
    },
    {
      name: 'protector de piel',
      description: 'protege la piel de los rayos uv ya que tiene una protección que equivale a un factor solar 30, además de que previene las manchas negras.'
    },
    {
      name: 'rejuvenecedor',
      description: 'sus antioxidantes y nutrientes ayudan a regenerar las células, mejorar la firmeza y prevenir signos de envejecimiento prematuro.'
    }
  ],
  concerns: [
    'Las personas con alergia a las avellanas, o con sensibilidad a los frutos secos, deben evitar el consumo de aceite de avellana tanto internamente como externamente.'
  ],
  tags: [
    'astringente',
    'antiinflamatorio',
    'hidratante',
    'protector de piel',
    'rejuvenecedor'
  ]
}
