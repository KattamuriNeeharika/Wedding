import React, { useState } from 'react';
import './Login.css';
const WeddingPlanner = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };
    

    return (
        <div className="body">
            <header>
                <h1>Welcome to Your Elegant Wedding Planner</h1>
                <nav>
                    <a href="/budget">Budget Calculator</a>
                    <a href="/guestlist">Guest List Manager</a>
                    <a href="/checklist">Checklist & Timeline</a>
                    <a href="/vendors">Vendor Directory</a>
                    <a href="/inspiration">Inspiration Board</a>
                    <a href="/seating">Seating Chart Tool</a>
                    <a href="/blogs">Blog/Resources</a>
                </nav>
            </header>

            <main>
                <section>
                    <h2>Login / Register</h2>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Username:</label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required 
                                />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <p>
                            Don't have an account? <a href="/register">Register here</a>
                        </p>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Wedding Planner</p>
            </footer>
        </div>
    );
};

export default WeddingPlanner;
