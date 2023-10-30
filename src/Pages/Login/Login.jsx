import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const nevigate = useNavigate();
    console.log(location)

    const handleLogin = event => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const jwtUser = { email };

                // get access token
                axios.post('http://localhost:5000/jwt', jwtUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            nevigate(location?.state ? location.state : '/')
                        }
                    })
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-14">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#FF3811] text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p>New to Car doctor ? <Link className='text-[#FF3811] font-bold' to={'/signUp'}> Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;