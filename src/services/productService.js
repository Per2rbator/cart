export default class ProductService {

  jeans = [
    {
      id: 1,
      name: 'Levi\'s',
      description: 'Джинсы 501 Original Fit',
      imgURL: '/images/jeans_1.jpg',
      price: 7900
    },
    {
      id: 2,
      name: 'Levi\'s',
      description: 'Джинсы 514 Straight fit',
      imgURL: '/images/jeans_2.jpg',
      price: 5100
    },
    {
      id: 3,
      name: 'Levi\'s',
      description: 'Джинсы 501 Original Fit',
      imgURL: '/images/jeans_3.jpg',
      price: 4500
    },
    {
      id: 4,
      name: 'Levi\'s',
      description: 'Джинсы 514 Straight fit',
      imgURL: '/images/jeans_4.jpg',
      price: 7900
    }
  ]

  getProducts() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.jeans)
      }, 1000)
    })
  }
}
