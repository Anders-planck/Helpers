<template>
    <div class="w-full  h-[50vh]">
        <div class="w-full h-full flex justify-around items-center">
            <div class="w-full p-2 md:p-0 md:w-2/5  flex justify-center items-center text-center flex-col space-y-6 ">
                <h1 class="text-dark text-5xl tracking-wide font-black">
                    Code quickly and reliably with <span class="text-jean">Helpers</span>.
                </h1>
                <p class="text-lg text-gray-500">
                    Create a project and help you with our various tools and templates.
                </p>
                <a href="#"
                    class="bg-jean/10 text-jean   w-2/3 block cursor-pointer   px-8 py-4 rounded-lg font-semibold tracking-wider shadow-sm hover:border-transparent hover:text-white hover:bg-jean hover:shadow-jean/30  transition-all duration-300">
                    See our latest creation
                </a>

                <nuxt-link  to="/templates"
                    class="bg-jean w-2/3 block cursor-pointer  px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95  transition-all duration-300 ">
                    Get started
                </nuxt-link>
            </div>
            <div class="hidden md:flex md:w-3/5   justify-center items-center">
                <img src="@/assets/images/header-bg.jpg" alt="header-bg.jpg" >
            </div>
        </div>
    </div>
</template>