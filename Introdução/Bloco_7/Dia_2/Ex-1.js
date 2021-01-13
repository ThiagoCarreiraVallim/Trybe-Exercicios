const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      muzzarella: {
        amount: 1,
        price: 20,
      },
      calabresa: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const value = Object.values(order)
  const address = value[2];
  const delivery = value[3].delivery.deliveryPerson
  console.log(`Olá ${delivery}, entrega para: ${value[0]}, Telefone ${value[1]}, ${address.street}, N°${address.number}, AP:${address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${order.payment.total},00.`);
}

orderModifier(order);

const random = 'name';

const people = [
  {name: 'Eu'},
  {name: 'Você'},
  {name: 'Fulano'}
]

console.log(people[2][random]);