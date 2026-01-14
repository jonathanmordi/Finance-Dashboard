import { Home, PieChart, ArrowUpRight, Settings } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: ArrowUpRight, label: 'Transactions' },
    { icon: PieChart, label: 'Analytics' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col p-4 fixed left-0 top-0">
      <div className="text-2xl font-bold text-blue-600 mb-8 px-2">Kuda-Lite</div>
      
      <nav className="flex-1">
        {menuItems.map((item) => (
          <button key={item.label} className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors mb-1">
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}