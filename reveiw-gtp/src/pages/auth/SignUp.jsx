import React from "react";

const SignUp = () => {
   return (
      <div>
         <div class="bg-gray-200 w-full min-h-screen flex items-center justify-center">
            <div class="w-full py-8">
               <div class="flex items-center justify-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                  </svg>
                  <h1 class="text-3xl font-bold text-blue-600 tracking-wider">Template</h1>
               </div>
               <div class="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
                  <h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>
                  <p class="text-center text-sm text-gray-600 mt-2">
                     Already have an account?{" "}
                     <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">
                        Sign in here
                     </a>
                  </p>

                  <form class="my-8 text-sm">
                     <div class="flex flex-col my-4">
                        <label for="name" class="text-gray-700">
                           Name
                        </label>
                        <input type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your name" />
                     </div>

                     <div class="flex flex-col my-4">
                        <label for="email" class="text-gray-700">
                           Email Address
                        </label>
                        <input type="email" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email" />
                     </div>

                     <div class="flex flex-col my-4">
                        <label for="password" class="text-gray-700">
                           Password
                        </label>
                        <div x-data="{ show: false }" class="relative flex items-center mt-2">
                           <input id="password" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password" type="password" />
                           <button type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                              <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                              </svg>

                              <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                              </svg>
                           </button>
                        </div>
                     </div>

                     <div class="flex flex-col my-4">
                        <label for="password_confirmation" class="text-gray-700">
                           Password Confirmation
                        </label>
                        <div x-data="{ show: false }" class="relative flex items-center mt-2">
                           <input id="password_confirmation" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password again" type="password" />
                           <button type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                              <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                              </svg>

                              <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                              </svg>
                           </button>
                        </div>
                     </div>

                     <div class="flex items-center">
                        <input type="checkbox" name="remember_me" id="remember_me" class="mr-2 focus:ring-0 rounded" />
                        <label for="remember_me" class="text-gray-700">
                           I accept the{" "}
                           <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">
                              terms
                           </a>{" "}
                           and{" "}
                           <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">
                              privacy policy
                           </a>
                        </label>
                     </div>

                     <div class="my-4 flex items-center justify-end space-x-4">
                        <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
                     </div>
                  </form>

                  <div class="flex items-center justify-between">
                     <div class="w-full h-[1px] bg-gray-300"></div>
                     <span class="text-sm uppercase mx-6 text-gray-400">Or</span>
                     <div class="w-full h-[1px] bg-gray-300"></div>
                  </div>

                  <div class="text-sm">
                     <a href="#" class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                           <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path>
                           <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path>
                           <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path>
                           <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path>
                        </svg>
                        <span>Sign up with Google</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
