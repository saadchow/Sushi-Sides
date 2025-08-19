import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const data = await ordersAPI.getAllForUser();
        if (isMounted) setOrders(Array.isArray(data) ? data : []);
      } catch (e) {
        if (isMounted) {
          setError('Unable to load order history.');
          setOrders([]);
        }
      }
    })();
    return () => { isMounted = false; };
  }, []);

  if (orders === null) {
    return <div className="OrderHistoryPage loading">Loading…</div>;
  }

  if (!orders.length) {
    return (
      <div className="OrderHistoryPage empty">
        <h2>Order History</h2>
        <p>{error ?? "Your order history will appear here once you've placed your first order."}</p>
        <Link to="/orders/new" className="Button back">Back to Menu</Link>
      </div>
    );
  }

  const money = useMemo(
    () => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }),
    []
  );

  return (
    <div className="OrderHistoryPage">
      <h2>Order History</h2>
      <ul className="OrderList">
        {orders.map(o => (
          <li key={o._id} className="OrderCard">
            <div className="OrderHeader">
              <strong>#{o.orderId ?? o._id.slice(-6).toUpperCase()}</strong>
              <span>{new Date(o.updatedAt ?? o.createdAt).toLocaleString()}</span>
            </div>
            <div className="OrderSummary">
              {(o.totalQty ?? 0)} {o.totalQty === 1 ? 'item' : 'items'} — {money.format(o.orderTotal ?? 0)}
            </div>

            {!!o.lineItems?.length && (
              <ul className="LineItems">
                {o.lineItems.map(li => (
                  <li key={li._id || `${li.item?._id}-${li.qty}`}>
                    {li.qty}× {li.item?.name ?? 'Item'} — {money.format(li.extPrice ?? (li.qty * (li.item?.price ?? 0)))}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <Link to="/orders/new" className="Button back">Back to Menu</Link>
    </div>
  );
}
