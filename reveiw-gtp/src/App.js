import React from "react";

const App = () => {
   console.log("APP");
   return (
      <div>
         <section class="w-full min-h-screen bg-white dark:bg-gray-900">
            <div class="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
               <nav class="md:flex md:items-center md:justify-between">
                  <div class="flex items-center justify-between">
                     <button class="text-gray-500 md:hidden dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none">
                        <span x-show="isOpen">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                           </svg>
                        </span>

                        <span x-show="!isOpen">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                           </svg>
                        </span>
                     </button>

                     <a href="#">
                        <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                     </a>
                  </div>

                  <div class="absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center">
                     <a href="#" class="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400">
                        Payment
                     </a>
                     <a href="#" class="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400">
                        Services{" "}
                     </a>
                     <a href="login" class="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400">
                        Account
                     </a>

                     <button class="w-full px-5 py-3 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-800 md:w-auto md:mx-6 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <div class="flex items-center justify-center -mx-1">
                           <p class="mx-1 text-sm text-gray-600 dark:text-white">Coming Soon on</p>

                           <svg class="w-6 h-6 mx-1 fill-gray-600 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                           </svg>
                        </div>
                     </button>
                  </div>
               </nav>

               <section class="flex items-center flex-1">
                  <div class="flex flex-col w-full ">
                     <h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                        <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">Coming</span>

                        <span class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">Soon</span>
                     </h1>

                     <p class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias nihil incidunt.</p>

                     <div class="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                        <input id="email" type="text" class="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" placeholder="Email Address" />

                        <button class="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Notify Me</button>
                     </div>

                     <p class="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">Notify me when App is launched :</p>
                  </div>
               </section>

               <footer class="flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
                  <a href="#" class="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                     {" "}
                     Privacy Policy{" "}
                  </a>

                  <div class="mt-4 -mx-4 md:mt-0">
                     <a href="#" class="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                        {" "}
                        Facebook
                     </a>

                     <a href="#" class="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                        Instagram
                     </a>

                     <a href="#" class="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                        {" "}
                        LinkedIn
                     </a>
                  </div>
               </footer>
            </div>
         </section>
      </div>
   );
};

export default App;
