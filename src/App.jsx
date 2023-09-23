/*
? DESAFIO - Shopping Cart:

Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:

todo - inserção de novos produtos no carrinho
todo - remoção de produtos já inseridos
todo - alteração de quantidade de cada item 
todo - cálculo do preço total dos itens inseridos

todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/
import './styles.scss';

import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])
  const superTotal = cart.reduce((total, objeto) => total + objeto.total, 0);

  function handleAddItem() {
    const newItem = { price: 300, quantity: 1 }

    const total = newItem.price * newItem.quantity

    const newerItem = { price: newItem.price, quantity: newItem.quantity, total: total }



    setCart((prev) => {
      const newList = [...prev, newerItem]
      return newList

    })
  }

  function handleRemoveItem(item, index) {
    const newList = [...cart]
    newList.splice(index, 1)
    setCart(newList)
  }

  function handleMinOrPlus(item, action, index) {
    let newQuantity = item.quantity


    if (action === 'decrease' && newQuantity > 1) {
      newQuantity -= 1
    }
    if (action === 'increase') {
      newQuantity += 1
    }

    const newList = [...cart]
    newList[index].quantity = newQuantity
    newList[index].total = newList[index].price * newList[index].quantity
    setCart(newList)
  }







  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className='content'>
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {!cart[0] ? (
                  <tr>
                    <td>Vazio</td>
                  </tr>
                ) : (
                  cart.map((item, index) => (

                    < TableRow
                      key={index}
                      item={item}
                      handleRemoveItem={handleRemoveItem}
                      handleMinOrPlus={handleMinOrPlus}
                      index={index}

                    />

                  ))
                )}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary superTotal={superTotal} />
            <button onClick={handleAddItem}>ADD ITEM</button>
          </aside>
        </div>
      </main>
    </>
  );
}


export default App;
