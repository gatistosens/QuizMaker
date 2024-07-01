import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateQuiz from './components/CreateQuiz';
import QuizList from './components/QuizList';
import LandingPage from './components/LandingPage';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => {
    const isAuthenticated = () => {
        return !!localStorage.getItem('token');
    };

    return (
        <Router>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quizzes" element={isAuthenticated() ? <QuizList /> : <Navigate to="/login" />} />
                <Route path="/create-quiz" element={isAuthenticated() ? <CreateQuiz /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
