import axios from 'axios';
const { useState } = require("react");

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': '722f9cdf-af63-45a3-ac4c-51c595386a2e',
            'User-Name': username,
            'User-Secret': password,
        }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error){
            setError('Oops, icorrect credentials.')
        }
    }

    return ( 
        <div className='wrapper'>
            <div 
                className='form'
                style={{ 
                    backgroundImage: `url:(images/login.png)`
                }}
            > 
            </div>
            <div className='form'>
                <h1 className='title'>Your chat application!</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className='input'
                        placeholder='Username'
                        required    
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className='input'
                        placeholder='Password'
                        required    
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h3 className='error'>{error}</h3>
                </form>
            </div>
        </div>
    )

}

export default LoginForm;