import icon from 'assets/aguacate.jpg'

export default {
  name: 'aguacate',
  sci: 'persea americana',
  icon,
  note: 'base o vehícular',
  description: [
    'Aceite comestible y cosmético, que dentro de la aromaterapia es considerado como un excelente aceite vehícular gracias a su contenido de vitaminas a, d y e, así como por su gran capacidad de penetración transepidérmica, que traspasa y nutre las diferentes capas de la piel.',
  ],
  uses: [
    {
      name: 'Antioxidante',
      description: 'ya que inhibe la formación de radicales libres y previene el envejecimiento celular, retardando la aparición de líneas de expresión.'
    },
    {
      name: 'Hidratante',
      description: 'tiene un alto poder humectante y emoliente, que suaviza y relaja la piel.'
    },
    {
      name: 'Regulador',
      description: 'ayuda a reducir el colesterol y la presión arterial, además de que potencia la absorción de nutrientes.'
    }
  ],
  concerns: [
    'Puede causar irritación en personas con alergias a aceites vegetales u otros componentes. Se debe mantener en un lugar fresco, oscuro y bien cerrado para prevenir la oxidación.',
  ],
  tags: [
    'antioxidante',
    'hidratante',
    'regulador',
  ]
}
