import Sidebar from './components/sidebar';
import StatCard from './components/statcards';

function App() {
 return(
    <div className = "flex min-h-screen">

        <Sidebar />
        <main className = "ml-64 p-8">
            <header className = "mb-8">
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                    <p className =" bg-slate-500"> Track and analyze your spending habits</p>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"> Upload CSV </button>
            </header>
            <div className = "grid grid-cols-3 gap-4">

            </div>
        </main>

    </div>
 )
}

export default App
