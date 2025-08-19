import { useEffect, useState } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await ordersAPI.getAllForUser();
        setOrders(data);
      } catch {
        setOrders([]); // fail silent → show “no orders yet”
      }
    })();
  }, []);

  if (orders === null) return <div className="OrderHistoryPage loading">Loading…</div>;
  if (!orders.length) {
    return (
      <div className="OrderHistoryPage empty">
        <h2>Order History</h2>
        <p>Your order history will appear here once you’ve placed your first order.</p>
      </div>
    );
  }

  return (
    <div className="OrderHistoryPage">
      <h2>Order History</h2>
      <ul className="OrderList">
        {orders.map(o => (
          <li key={o._id} className="OrderCard">
            <div className="OrderHeader">
              <strong>#{o.orderId}</strong>
              <span>{new Date(o.updatedAt).toLocaleString()}</span>
            </div>
            <div className="OrderSummary">
              {o.totalQty} items — ${o.orderTotal.toFixed(2)}
            </div>
            <ul className="LineItems">
              {o.lineItems.map(li => (
                <li key={li._id}>
                  {li.qty}× {li.item.name} — ${li.extPrice.toFixed(2)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
