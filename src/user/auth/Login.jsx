import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(){
    const [visibility, setVisibility]=useState(false);
    return(
        <>
            <section class=" font-poppins">
                <div class="max-w-6xl px-0 mx-auto lg:px-6">
                    <div class="flex flex-col items-center h-full md:flex-row">
                        <div
                            class="flex items-center justify-center h-screen max-w-full px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:px-16 xl:px-12">
                            <div class="z-10 w-full p-10 bg-gray-100 dark:bg-gray-900 h-100">
                                <h2 class="text-xl font-bold leading-tight mb-7 md:text-3xl dark:text-gray-300">
                                    Login to your account</h2>
                                <form action="" class="mt-6">
                                    <div>
                                        <label for="" class="block text-gray-700 dark:text-gray-300">Email:</label>
                                        <input type="email"
                                            class="w-full px-4 py-3 mt-2 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                                            name="" placeholder="Enter your email"/>
                                    </div>
                                    <div class="mt-5">
                                        <div>
                                            <label for="" class="text-gray-700 dark:text-gray-300 ">Password:</label>
                                            <div class="relative flex items-center mt-2">
                                                <input type={visibility ? "text" : "password"}
                                                    class="w-full px-4 py-3 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:border dark:border-gray-800 "
                                                    name="" placeholder="Enter password"/>
                                                    {/* <FontAwesomeIcon icon={visibility ? faEye : faEyeSlash} onClick={()=> setVisibility(!visibility)} className='absolute right-3 bg-white pl-2 hover:cursor-pointer'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-4 text-right">
                                        <Link className='text-sm font-semibold text-primary hover:underline' to={"/forgotpassword"}>forgot
                                            password?</Link>
                                    </div>
                                    <button
                                        class="w-full px-4 py-3 mt-6 font-semibold text-gray-200 bg-primary rounded-lg hover:text-gray-700 hover:bg-green-300 "
                                        type="submit">LOGIN</button>
                                    <p class="mt-6 text-gray-700 dark:text-gray-300"> Need an account?
                                        <Link className="font-semibold text-primary hover:text-green-800" to={"/create"}> Create an account</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;