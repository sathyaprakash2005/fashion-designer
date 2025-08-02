import React, { useEffect, useState } from 'react';
import './Order.css';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching orders:', err);
        setLoading(false);
      });
  }, []);

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${deleteId}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (data.success) {
        setOrders(orders.filter(order => order._id !== deleteId));
        setShowConfirm(false);
      } else {
        alert('Failed to delete order');
      }
    } catch (err) {
      console.error('Error deleting order:', err);
      alert('Error deleting order');
    }
  };

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="orders-page">
      <h2>All Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="orders-grid">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <img src={order.image} alt="ordered saree" />
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <button className="delet-btn" onClick={() => confirmDelete(order._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}

      {/* In-app confirmation popup */}
      {showConfirm && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this order?</p>
            <div className="popup-buttons">
              <button className="confirm-btn" onClick={handleDeleteConfirmed}>Yes, Delete</button>
              <button className="cancel-btn" onClick={() => setShowConfirm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
