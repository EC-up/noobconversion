// src/App.js
import './styles.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4 px-6">
        <h1 className="text-xl font-bold text-gray-800">Noob Conversion</h1>
      </header>

      <main className="container mx-auto py-12 px-4 max-w-md">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-center text-2xl font-bold mb-6">YouTube to MP3</h2>
          
          <label className="block text-gray-700 mb-2">YouTube URL</label>
          <input 
            type="text"
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full p-3 border rounded mb-4"
          />
          
          <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition">
            Convert to MP3
          </button>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-600 text-sm py-6">
        <p>© {new Date().getFullYear()} Noob Conversion</p>
      </footer>
    </div>
  );
}

export default App;
