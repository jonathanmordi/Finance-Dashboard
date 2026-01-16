import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// We pass 'props' (properties) into the function so we can change the text
export default function StatCard({ title, amount, trend, isUp }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        
        {/* Logic: Choose the icon based on if the trend is 'up' or 'down' */}
        <div className={isUp ? "text-green-600" : "text-red-600"}>
          {isUp ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
        </div>
      </div>

      <div className="flex items-end gap-2">
        <h3 className="text-2xl font-bold text-slate-900">${amount}</h3>
        
        {/* The trend percentage */}
        <span className={`text-sm font-medium ${isUp ? "text-green-600" : "text-red-600"}`}>
          {isUp ? '+' : ''}{trend}%
        </span>
      </div>
    </div>
  );
}