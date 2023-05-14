import TodoDisplay from './components/todos/TodoDisplay';
import Todos from './components/todos/Todos';
import Navbar from './components/ui/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="bg-slate-900 flex-1 pt-6">
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/todos" />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:id" element={<TodoDisplay />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
