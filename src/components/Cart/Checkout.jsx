import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext'; // Importa el contexto del carrito
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore
import { Link } from 'react-router-dom'; // Importa el componente Link

const Checkout = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext); // Obtén los datos del carrito desde el contexto
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: ''
  });
  const [mensaje, setMensaje] = useState('');
  const [compraFinalizada, setCompraFinalizada] = useState(false); // Estado para controlar si la compra ha finalizado

  const { nombre, email, telefono } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construir la estructura de datos orderData utilizando los datos del carrito y del formulario
    const orderData = {
      customer: {
        nombre,
        email,
        telefono
      },
      productos: cart.map(item => ({
        id: item.id,
        producto: item.name,
        precio: item.price,
        cantidad: item.quantity
      })),
      total: getTotalPrice()
    };

    try {
      const db = getFirestore(); // Obtener la instancia de Firestore
      const docRef = await addDoc(collection(db, 'orders'), orderData); // Agregar el documento a la colección 'orders'
      clearCart(); // Limpiar el carrito después de confirmar la compra
      setMensaje(`La compra se ha realizado exitosamente. Tu número de compra es: ${docRef.id}. Recibirás los datos de envío por correo.`);
      setCompraFinalizada(true); // Cambiar el estado para indicar que la compra ha finalizado
    } catch (error) {
      console.error('Error al agregar el documento a Firestore:', error);
      setMensaje('Ha ocurrido un error al procesar la compra. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const totalPrice = getTotalPrice();

  return (
    <div>
      <h2>Checkout</h2>
      {mensaje && <p>{mensaje}</p>}
      {!compraFinalizada && ( // Renderizar el formulario solo si la compra no ha finalizado
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input type="text" className="form-control" id="telefono" name="telefono" value={telefono} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Confirmar compra</button>
        </form>
      )}
      {!compraFinalizada && ( // Renderizar el total de la compra solo si la compra no ha finalizado
        <div>
          <p>Total de la compra: ${totalPrice}</p>
        </div>
      )}
      {compraFinalizada && ( // Renderizar el botón de volver al inicio solo si la compra ha finalizado
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      )}
    </div>
  );
};

export default Checkout;
