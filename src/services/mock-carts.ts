export let CARTS = {
  subtotal: 930,
  shipping: 30,
  total: 950,
  sellers: [
    {
      id: 1,
      name: "댄스 트레이닝",
      subtotal: 900,
      shipping: 20,
      total: 920,
      items: [
        {
          id: 1,
          name: "덴스 트레이닝",
          price: 300,
          quantity: 1,
          thumb: "assets/img/health/health1.jpg",
          options: [
            "Bundle 2",
            "White"
          ]
        },
        {
          id: 1,
          name: "에어로빅 트레이닝",
          price: 300,
          quantity: 2,
          thumb: "assets/img/health/health2.jpg",
          options: [
            "Bundle 2",
            "White"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "핼스 트레이닝",
      subtotal: 20,
      shipping: 10,
      total: 30,
      items: [
        {
          id: 1,
          name: "핼스 1",
          price: 20,
          quantity: 1,
          thumb: "assets/img/health/health4.jpg",
          options: [
            "XL",
            "Pink"
          ]
        }
      ]
    }
  ]
}
