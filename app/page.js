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
  ArrowUp,
  Printer,
  Copy,
  X,
  Cog
} from 'lucide-react';
import Link from 'next/link';


export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden font-sans">

      {/* Left Sidebar */}
      <aside className="w-64 bg-[#091017] text-white flex flex-col p-5">
      <div className="flex items-center text-2xl font-bold mb-10 gap-2">
      <Cog className="w-6 h-6" />
      Mate
      </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#0f1d30] text-sm px-2 py-1 rounded-lg outline-none"
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
        </div>

  <nav className="flex flex-col gap-5 text-sm ml-2">
  <Link href="/" className="flex items-center gap-3 hover:text-white">
    <LayoutDashboard size={18} />
    <span>Dashboard</span>
  </Link>

  <Link href="/orders" className="flex items-center gap-3 font-semibold text-white hover:text-white">
    <Package size={18} />
    <span>Orders</span>
  </Link>

  <Link href="/inventory" className="flex items-center gap-3 hover:text-white">
    <Warehouse size={18} />
    <span>Inventory</span>
  </Link>

  <Link href="/payments" className="flex items-center gap-3 hover:text-white">
    <CreditCard size={18} />
    <span>Payments</span>
  </Link>

  <Link href="/customers" className="flex items-center gap-3 hover:text-white">
    <Users size={18} />
    <span>Customers</span>
  </Link>
  <hr className="my-3 border-t border-slate-500" />


  <Link href="/notifications" className="relative flex items-center gap-3 hover:text-white">
    <Bell size={18} />
    <span>Notifications</span>
    <span className="absolute -top-1 left-4 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
  </Link>

  <Link href="/help" className="flex items-center gap-3 hover:text-white">
    <HelpCircle size={18} />
    <span>Help & support</span>
  </Link>

  <Link href="/settings" className="flex items-center gap-3 hover:text-white">
    <Settings size={18} />
    <span>Settings</span>
  </Link>
</nav>

        <div className="mt-auto text-sm text-center text-slate-300 pt-6">
          <div className="bg-[#0f1d30] w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center">OW</div>
          Olivia Williams
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-medium">Orders</h1>
          <div className="space-x-2">
            <button className="border rounded px-3 py-1 text-sm">↓ Import</button>
            <button className="border rounded px-3 py-1 text-sm">↑ Export</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 text-sm">
          <button className="border px-2 py-1 rounded-full">Type ▾</button>
          <button className="border px-2 py-1 rounded-full">Status ▾</button>
          <button className="border px-2 py-1 rounded-full">Order date ▾</button>
          <button className="border px-2 py-1 rounded-full">All filters ▾</button>
        </div>

        <table className="w-full text-sm border-collapse">
  <thead className="text-left">
    <tr>
      <th className="py-3"></th>
      <th className="py-3">Order</th>
      <th className="py-3">Customer</th>
      <th className="py-3">Type</th>
      <th className="py-3">Status</th>
      <th className="py-3">Product</th>
      <th className="py-3">Total</th>
      <th className="py-3">Date</th>
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
      <tr key={i} className="hover:bg-slate-50">
        <td className="py-3"><input type="checkbox" /></td>
        <td className="py-3">{id}</td>
        <td className="py-3">
          <div className="flex items-center gap-2">
            <div className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            {name}
          </div>
        </td>
        <td className="py-3">{type}</td>
        <td className={`py-3 ${status === 'Refunded' ? 'text-orange-500' : 'text-green-600'}`}>
          {status === 'Paid' ? '✓ Paid' : status === 'Refunded' ? '↺ Refunded' : status}
        </td>
        <td className="py-3">{product}</td>
        <td className="py-3">{total}</td>
        <td className="py-3">{date}</td>
      </tr>
    ))}
  </tbody>
</table>


<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-stretch gap-2">
  {/* Cancel Button - same height as bar */}
  <button className="bg-[#0f172a] text-white px-4 square-l-xl rounded-md flex items-center justify-center shadow-lg">
    <X size={18} />
  </button>
  {/* Main Action Bar */}
  <div className="bg-[#0f172a] text-white square-xl rounded-md px-5 py-3 flex items-center gap-6 shadow-lg text-sm">
    <span>Selected: 0</span>

    <button className="flex items-center gap-1">
      <ArrowUp size={16} className="stroke-[2]" />
      Export
    </button>

    <button className="flex items-center gap-1">
      <Printer size={16} className="stroke-[2]" />
      Print
    </button>

    <button className="flex items-center gap-1">
      <Copy size={16} className="stroke-[2]" />
      Duplicate
    </button>

    <button className="text-xl font-semibold">⋯</button>
  </div>
</div>

      </main>

      {/* Right Sidebar */}
      <aside className="w-80 border-l border-slate-200 p-6 bg-white hidden xl:block">
        <h3 className="text-xs uppercase font-semibold text-slate-800 mb-2">RECEIPT OF GOODS</h3>
  {/* Semicircle Gauge */}
  <div className="mb-6">
  <div className="w-full flex flex-col items-center">
  <svg viewBox="0 0 200 100" className="w-48 h-24">
    {/* Background Arc */}
    <path
      d="M20,100 A80,80 0 0,1 180,100"
      fill="none"
      stroke="#E5E7EB"
      strokeWidth="14"
      strokeLinecap="round"
    />
    {/* Foreground Arc */}
    <path
      d="M20,100 A80,80 0 0,1 100,20"
      fill="none"
      stroke="#064e3b"
      strokeWidth="14"
      strokeLinecap="round"
    />
  </svg>

  <div className="text-center -mt-3">
    <div className="text-xl font-semibold text-slate-900">$2.2m</div>
    <div className="text-sm text-slate-500">242 orders</div>
  </div>
</div>


  {/* Two Metrics Below */}
  <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-slate-700">
    <div className="flex items-start gap-2">
      <div className="w-3 h-3 bg-[#064e3b] rounded-sm mt-1"></div>
      <div>
        <div className="font-semibold text-slate-900">$864,600</div>
        <div className="text-slate-500 text-xs">95 shipments</div>
      </div>
    </div>
    <div className="flex items-start gap-2">
      <div className="w-3 h-3 bg-slate-300 rounded-sm mt-1"></div>
      <div>
        <div className="font-semibold text-slate-900">$1.34m</div>
        <div className="text-slate-500 text-xs">147 pickups</div>
      </div>
    </div>
  </div>
</div>
<hr className="my-3 border-t border-slate-300" />
<h4 className="text-xs font-semibold uppercase text-slate-800 mb-2 flex justify-between items-center">
  Orders Status
  <span className="text-xs text-slate-500">Active ⌄</span>
</h4>

{/* Bar */}
<div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-3 flex">
  <div className="bg-[#064e3b] h-full" style={{ width: '89%' }}></div>
  <div className="bg-[#dc2626] h-full" style={{ width: '8%' }}></div>
  <div className="bg-slate-300 h-full" style={{ width: '3%' }}></div>
</div>

{/* Status breakdown */}
<ul className="text-sm text-slate-700 space-y-2">
  <li className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-[#064e3b] rounded-sm"></div>
      <span>Paid</span>
    </div>
    <span className="text-slate-600 font-medium">89%</span>
  </li>
  <li className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-[#dc2626] rounded-sm"></div>
      <span>Cancelled</span>
    </div>
    <span className="text-slate-600 font-medium">8%</span>
  </li>
  <li className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-slate-300 rounded-sm"></div>
      <span>Refunded</span>
    </div>
    <span className="text-slate-600 font-medium">3%</span>
  </li>
</ul>

        <hr className="my-3 border-t border-slate-300" />
        <div className="mb-6">
  <div className="flex justify-between items-center mb-4">
    <h4 className="text-xs font-bold uppercase text-slate-800">Overview</h4>
    <span className="text-sm text-slate-800">This month</span>
  </div>

  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
    <div>
      <div className="font-semibold text-slate-900 text-base">$2,246.75</div>
      <div className="text-slate-500">Average order</div>
    </div>
    <div>
      <div className="font-semibold text-slate-900 text-base">$2.2m</div>
      <div className="text-slate-500">Total revenue</div>
    </div>
    <div>
      <div className="font-semibold text-slate-900 text-base">16 min</div>
      <div className="text-slate-500">Processing time</div>
    </div>
    <div>
      <div className="font-semibold text-slate-900 text-base">1.7</div>
      <div className="text-slate-500">Avg. items/order</div>
    </div>
    <div>
      <div className="font-semibold text-slate-900 text-base">0.32%</div>
      <div className="text-slate-500">Pending orders</div>
    </div>
    <div>
      <div className="font-semibold text-slate-900 text-base">0.51%</div>
      <div className="text-slate-500">Reject rate</div>
    </div>
  </div>
</div>
<hr className="my-3 border-t border-slate-300" />

<h4 className="text-xs font-semibold uppercase text-slate-800 mb-2">Top Sellers</h4>
<div className="flex items-center gap-2 text-sm text-slate-900">
  <img src="/generator.jpeg" alt="Generator" className="w-6 h-6" />
  <span>Gasoline generator EYG 7500i (inverter)</span>
  <strong className="ml-1">14</strong>
</div>
      </aside>
    </div>
  );
}
