import React from "react";
import { useCartContext } from "../../context/cartContext";
import { Orden } from "../orden/Orden";
import MyButton from "../Common/MyButton"

import "./cart.css";
import Divider from "../Common/Divider";

const EmptyCart = ({history}) => {
  const goToProducts = () => history.push('/')
  return <div className="empty-cart">
    <span className="empty-cart-text">No hay productos en el carrito</span>
    <MyButton label="Ver productos" type="secondary" onClick={goToProducts}/>
  </div>
} 

const CartTable = ({removeFromCart, cart, clearCart}) => {
  return <div className="cart-table-content">
    <div className="cart-table-header">
      <div className="cart-table-header-item">
        <span>Cantidad</span>
      </div>
      <div className="cart-table-header-item">
        <span>Producto</span>
      </div>
      <div className="cart-table-header-item">
        <span>Precio</span>
      </div>
      <div className="cart-table-header-item">
        <span>Total</span>
      </div>
      <div className="cart-table-header-item">
        <span>Borrar</span>
      </div>
    </div>
    <Divider/>
    {cart.map((carro) => (
      <div key={carro.id}>
        <div className="cart-table-row">
        <div className="cart-table-row-item">
          <span>{carro.quantity}</span>
        </div>
        <div className="cart-table-row-item">
          <span>{carro.title}</span>
        </div>
        <div className="cart-table-row-item">
          <span>{carro.price}</span>
        </div>
        <div className="cart-table-row-item">
          <span>{carro.price * carro.quantity}</span>
        </div>
        <div className="cart-table-row-item">
          <MyButton label="x" type="small" onClick={() => {
            removeFromCart(carro.id);
          }}/>
        </div>
      </div>
      <Divider/>
      </div>
    ))}
    <br/>
     <MyButton label="Borrar todo" type="secondary" onClick={clearCart}/>
  </div>
}

const CartSumary = ({cart, sumTotal, history}) => {
  return <div className="cart-sumary-content">
    <p className='cart-sumary-title'>RESUMEN DE COMPRA</p>
    <Divider/>
    <div className="cart-total">
      <span className="cart-sumary-title">TOTAL</span>
      <span className="cart-sumary-title">$ {sumTotal(cart)}</span>
    </div>
    <Divider/>
    <Orden {...{history}}/>
  </div>
}

const CartWithProducts = ({cart, sumTotal, removeFromCart, clearCart, history}) => {
  return <div className="cart-with-products">
    <div className="cart-table"><CartTable {...{removeFromCart, cart, clearCart}}/></div>
    <div className="cart-sumary"><CartSumary {...{cart, sumTotal, history}}/></div>
  </div>
} 

const Cart = ({history}) => {
  const { cart, removeFromCart,clearCart, sumTotal } = useCartContext();
  return !cart.length ? <EmptyCart {...{history}}/> : <CartWithProducts {...{cart, clearCart, sumTotal, removeFromCart, history}}/>
};

export default Cart;