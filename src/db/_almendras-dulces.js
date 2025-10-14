import icon from 'assets/almendras-dulces.jpg'

export default {
  name: 'almendras dulces',
  sci: 'prunus dulcis',
  icon,
  note: 'base o vehícular',
  description: [
    'Aceite extraído del hueso de la almendra, que  contiene vitaminas A y E, así como ácidos grasos omega-3, y zinc, utilizado dentro de la aromaterapia como aceite vehicular debido a sus propiedades para la piel y su consistencia ya que es ligero y su nivel de viscosidad ayuda a que las manos se deslicen.',
  ],
  uses: [
    {
      name: 'calmante',
      description: 'ayuda a calmar la piel irritada.'
    },
    {
      name: 'antiinflamatorio',
      description: 'calma la inflamación de la piel por afecciones o quemaduras.'
    },
    {
      name: 'hidratante',
      description: 'sus vitaminas, minerales, antioxidantes y ácidos grasos ofrecen maravillosas propiedades hidratantes para la piel y el cabello.'
    },
    {
      name: 'nutritivo'
    }
  ],
  concerns: [
    'Si tiene alergia a los frutos secos o almendras, no debe usarlo. Si experimenta enrojecimiento, picazón o inflamación, suspenda su uso inmediatamente. No se recomienda su uso durante el embarazo o lactancia.',
  ],
  tags: [
    'calmante',
    'antiinflamatorio',
    'hidratante',
    'nutritivo'
  ]
}
