import React from "react";
import { useNavigate } from "react-router-dom";

const Carrito = ({ carrito, setCarrito }) => {
  const navigate = useNavigate();
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  return (
    <main className="container" style={{ minHeight: 'calc(100vh - 200px)', paddingBottom: '2rem' }}>
      <h1>Tu Carrito</h1>
      {carrito.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>No hay productos en el carrito.</p>
          <button 
            onClick={() => navigate("/producto")}
            style={{
              padding: '12px 24px',
              backgroundColor: '#0947c4',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Ver Productos
          </button>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '2rem' }}>
            {carrito.map(producto => (
              <div key={producto.id} className="item-carrito" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginBottom: '1rem',
                backgroundColor: '#fff'
              }}>
                <img src={producto.imagen} alt={producto.nombre} width={100} style={{ borderRadius: '4px' }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>{producto.nombre}</h3>
                  <p style={{ margin: '0', color: '#666' }}>Precio: ${producto.precio.toLocaleString()}</p>
                </div>
                <button 
                  onClick={() => eliminarProducto(producto.id)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          
          <div style={{
            borderTop: '2px solid #0947c4',
            paddingTop: '1rem',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#0947c4', marginBottom: '1rem' }}>
              Total: ${total.toLocaleString()}
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate("/producto")}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                ← Seguir Comprando
              </button>
              <button 
                onClick={() => alert('¡Gracias por tu compra!')}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Proceder al Pago
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Carrito;
