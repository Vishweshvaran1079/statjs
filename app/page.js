'use client';
import {
  LayoutDashboard,
  Package,
  Warehouse,
  CreditCard,
  Users,
  Bell,
  HelpCircle,
  Zap,
  Search,
  Settings,
} from 'lucide-react';

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden font-sans">

      {/* Left Sidebar */}
      <aside className="w-64 bg-[#081420] text-white flex flex-col p-5">
        <div className="text-2xl font-bold mb-10">Mate</div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#0f1d30] text-sm px-4 py-2 rounded-lg outline-none"
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
        </div>

        <nav className="flex flex-col gap-5 text-sm">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-3 font-semibold text-white">
            <Package size={18} />
            <span>Orders</span>
          </div>
          <div className="flex items-center gap-3">
            <Warehouse size={18} />
            <span>Inventory</span>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard size={18} />
            <span>Payments</span>
          </div>
          <div className="flex items-center gap-3">
            <Users size={18} />
            <span>Customers</span>
          </div>
          <div className="flex items-center gap-3 relative">
            <Bell size={18} />
            <span>Notifications</span>
            <span className="absolute -top-1 left-4 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
          </div>
          <div className="flex items-center gap-3">
            <HelpCircle size={18} />
            <span>Help & support</span>
          </div>
          <div className="flex items-center gap-3">
            <Settings size={18} />
            <span>Settings</span>
          </div>
        </nav>

        <div className="mt-auto text-sm text-center text-slate-300 pt-6">
          <div className="bg-[#0f1d30] w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center">OW</div>
          Olivia Williams
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Orders</h1>
          <div className="space-x-2">
            <button className="border rounded px-3 py-1 text-sm">↓ Import</button>
            <button className="border rounded px-3 py-1 text-sm">↑ Export</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 text-sm">
          <button className="border px-3 py-1 rounded-full">Type ▾</button>
          <button className="border px-3 py-1 rounded-full">Status ▾</button>
          <button className="border px-3 py-1 rounded-full">Order date ▾</button>
          <button className="border px-3 py-1 rounded-full">All filters ▾</button>
        </div>

        <table className="w-full text-sm border-separate border-spacing-y-3">
          <thead className="text-left text-slate-500">
            <tr>
              <th></th>
              <th>Order</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Status</th>
              <th>Product</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['#192541', 'Esther Howard', 'Shipping', 'Paid', 'Stihl TS 800', '$3,127.00', 'Jun 19'],
              ['#192540', 'David Miller', 'Pickups', 'Paid', 'Angle Grinder', '$212.00', 'Jun 18'],
              ['#192539', 'James Moore', 'Shipping', 'Paid', 'Tool Kit Pro', '$1,490.00', 'Jun 17'],
              ['#192538', 'Robert Anderson', 'Shipping', 'Paid', 'Hammer Drill', '$389.99', 'Jun 17'],
              ['#192537', 'Jessica Martinez', 'Shipping', 'Refunded', 'Cordless Saw', '$580.00', 'Jun 16'],
              ['#192536', 'William Jackson', 'Shipping', 'Paid', 'Multi-Tool Set', '$299.00', 'Jun 16'],
              ['#192535', 'Christopher Harris', 'Pickups', 'Paid', 'Generator GX200', '$2,090.50', 'Jun 15'],
              ['#192534', 'Marcus Kenter', 'Shipping', 'Paid', 'Air Compressor', '$459.99', 'Jun 15'],
            ].map(([id, name, type, status, product, total, date], i) => (
              <tr key={i} className="bg-white shadow rounded">
                <td><input type="checkbox" /></td>
                <td>{id}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {name}
                  </div>
                </td>
                <td>{type}</td>
                <td className={status === 'Refunded' ? 'text-orange-500' : 'text-green-600'}>
                  {status === 'Paid' ? '✓ Paid' : status === 'Refunded' ? '↺ Refunded' : status}
                </td>
                <td>{product}</td>
                <td>{total}</td>
                <td>{date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-4 py-3 mt-4 bg-slate-100 rounded-md text-sm">
          <span>Selected: 0</span>
          <div className="space-x-3 flex items-center">
            <button>⬇ Export</button>
            <button>🖨 Print</button>
            <button>➕ Duplicate</button>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 border-l border-slate-200 p-6 bg-white hidden xl:block">
        <h3 className="text-xs uppercase font-semibold text-slate-400 mb-2">RECEIPT OF GOODS</h3>
        <div className="w-full h-32 bg-slate-100 mb-4 rounded-full flex items-center justify-center">
          {/* Placeholder for arc SVG */}
          <span className="text-slate-600">$2.2m</span>
        </div>
        <div className="text-sm text-slate-700 mb-6">
          <div className="flex justify-between mb-1"><span>💰 $864,600</span><span>95 shipments</span></div>
          <div className="flex justify-between"><span>📦 $1.34m</span><span>147 pickups</span></div>
        </div>

        <h4 className="text-xs font-semibold uppercase text-slate-400 mb-2">Orders Status</h4>
        <div className="w-full bg-slate-200 h-2 rounded overflow-hidden mb-2">
          <div className="h-full bg-green-600 w-[89%] float-left"></div>
          <div className="h-full bg-red-600 w-[8%] float-left"></div>
          <div className="h-full bg-gray-400 w-[3%] float-left"></div>
        </div>
        <ul className="text-sm text-slate-700 mb-6">
          <li className="flex justify-between"><span>✓ Paid</span><span>89%</span></li>
          <li className="flex justify-between"><span>✗ Cancelled</span><span>8%</span></li>
          <li className="flex justify-between"><span>↺ Refunded</span><span>3%</span></li>
        </ul>

        <h4 className="text-xs font-semibold uppercase text-slate-400 mb-2">Overview</h4>
        <ul className="text-sm text-slate-700 mb-6">
          <li className="flex justify-between"><span>Average order</span><span>$2,246.75</span></li>
          <li className="flex justify-between"><span>Total revenue</span><span>$2.2m</span></li>
          <li className="flex justify-between"><span>Processing time</span><span>16 min</span></li>
          <li className="flex justify-between"><span>Avg. items/order</span><span>1.7</span></li>
          <li className="flex justify-between"><span>Pending orders</span><span>0.32%</span></li>
          <li className="flex justify-between"><span>Reject rate</span><span>0.51%</span></li>
        </ul>

        <h4 className="text-xs font-semibold uppercase text-slate-400 mb-2">Top Sellers</h4>
        <div className="text-sm text-slate-700">
          <span>🔌 Gasoline generator EYG 7500i (inverter)</span> — <strong>14</strong>
        </div>
      </aside>
    </div>
  );
}
