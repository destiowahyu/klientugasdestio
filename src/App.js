import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Users from './pages/Users';
import { AppProvider } from './context/AppContext';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="App-header text-center">
              <nav className="mb-4">
                <Link
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full mr-4 hover:bg-blue-700 transition duration-300"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="inline-block bg-green-500 text-white px-6 py-2 rounded-full mr-4 hover:bg-green-700 transition duration-300"
                  to="/profile"
                >
                  Profile
                </Link>
                <Link
                  className="inline-block bg-purple-500 text-white px-6 py-2 rounded-full mr-4 hover:bg-purple-700 transition duration-300"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="inline-block bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
                  to="/users"
                >
                  Users
                </Link>
              </nav>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </header>
          </div>
        </Router>
      </AppProvider>
    </Provider>
  );
}

export default App;
