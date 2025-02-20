import Link from "next/link";
const LoginPage = () => {
  return (
    <main>
      <div class="h-screen w-screen bg-white text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10  sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex gap-3 items-center">
              <img  src="../assets/icons/logo.svg" alt="" />
            </div>
            <div class="mt-8 flex flex-col">
              <div class="w-full flex-1">
                <div class="mx-auto max-w-xs">
                  <h1 class="text-2xl items-start xl:text-xl font-bold mb-5">
                    Login
                  </h1>
                  <input
                    class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <button class="mt-5 tracking-wide font-semibold bg-gray-400 text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span class="ml-3">Login</span>
                  </button>
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Don't have an account?
                    <Link
                      href="/register"
                      className="text-indigo-400 hover:text-indigo-500 ml-2"
                    >
                      Register
                    </Link>
                  </div>
                </div>
                <div class="my-9 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-400 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Continue with
                  </div>
                </div>

                <div class="flex flex-col items-center">
                  <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div class="bg-white p-2 rounded-full">
                      <svg class="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span class="ml-4">Sign Up with Google</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-14 text-gray-400 text-sm">
              © 2024 My office . All Rights Reserved
            </p>
          </div>
          <div class="flex-1 text-center hidden lg:flex">
            <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat flex items-center justify-center">
              <div className="bg-blue-600 w-[65%] h-[100%] flex justify-center items-center rounded-lg">
                <img src="../assets/icons/login.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
