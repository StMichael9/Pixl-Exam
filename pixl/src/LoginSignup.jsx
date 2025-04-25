import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './config';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState("Sign Up");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Check if user is already logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // If user is already logged in, redirect to events page
            navigate('/events');
        }
    }, [navigate]);

    const toggleMode = (mode) => {
        setIsLogin(mode);
        setError(""); // Clear any previous errors when switching modes
        // Clear form fields when switching modes
        setEmail("");
        setPassword("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        try {
            // Determine which endpoint to use based on the current mode
            const endpoint = isLogin === "Login" ? "/login" : "/register";
            
            // Prepare the data to send
            let userData;
            
            if (isLogin === "Login") {
                userData = { 
                    email, 
                    password 
                };
                console.log("Login attempt with:", { email, password: "***" });
            } else {
                // For registration
                userData = { 
                    email, 
                    password, 
                    role: email.toLowerCase().includes('admin') ? 'ADMIN' : 'USER' 
                };
                console.log("Registration attempt with:", { email, password: "***" });
            }
            
            // Construct the full URL - this is the key change
            const fullUrl = `${API_URL}${endpoint}`;
            console.log(`Sending ${isLogin} request to: ${fullUrl}`);
            
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
                mode: 'cors' // Explicitly set CORS mode
            });
            
            console.log("Response status:", response.status);
            const data = await response.json();
            console.log("Response data:", data);
            
            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }
            
            // If login was successful, store the token
            if (isLogin === "Login" && data.token) {
                console.log("Login successful, storing token");
                console.log("Full user data:", data.user); // Debug the user data
                
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.user.email);
                localStorage.setItem('userRole', data.user.role);
                
                // Store the user ID
                if (data.user.id) {
                    localStorage.setItem('userId', data.user.id);
                    console.log('Stored user ID:', data.user.id);
                } else {
                    console.warn('User ID not found in response');
                }
                
                console.log('Stored user role:', data.user.role); // This should show 'ADMIN' or 'USER'
                
                // Navigate to events page
                console.log("Redirecting to events page");
                navigate('/events');
            } else if (isLogin === "Sign Up") {
                // If registration was successful, switch to login mode
                console.log("Registration successful, switching to login mode");
                setIsLogin("Login");
                setError("Registration successful! Please login with your email and password.");
            }
            
            // Reset form fields
            setEmail("");
            setPassword("");
            
        } catch (err) {
            console.error("Error during form submission:", err);
            if (err.message.includes('Failed to fetch')) {
                setError('Cannot connect to server. Please make sure the backend server is running on port 3001.');
            } else {
                setError(err.message || 'An error occurred during authentication');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-signup-container">
            <div className="header"></div>
            <div className="text">{isLogin}</div>
            <div className="underline"></div>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit} className="inputs">
                <div className="input">
                    <input 
                        id="email" 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input">
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="submit-button-container">
                    <button type="submit" className="submit" disabled={loading}>
                        {loading ? "Processing..." : isLogin}
                    </button>
                </div>
            </form>
            {isLogin === "Login" && (
                <div className="forgot-password">Lost Password? <span onClick={() => navigate('/forgot-password')}>Click Here!</span></div>
            )}
            <div className="sumbit-container">
                <div 
                    className={`sumbit ${isLogin === "Sign Up" ? "" : "gray"}`}
                    onClick={() => toggleMode("Sign Up")}
                >
                    Sign Up
                </div>
                <div 
                    className={`sumbit ${isLogin === "Login" ? "" : "gray"}`}
                    onClick={() => toggleMode("Login")}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;