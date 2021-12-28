<template>
    <div class="overflow-x-hidden w-screen sticky top-0 bg-white z-50 sm:px-8 lg:px-0 xl:px-0 border border-b-2 border-gray-200">
        <div class="overflow-hidden w-full lg:w-9/12 xl:w-7/12 md:w-11/12 md:mx-auto lg:mx-auto xl:mx-auto flex justify-between items-center">
            <div class="flex justify-between items-center space-x-4 md:space-x-8 lg:space-x-32">
                <NuxtLink class="tracking-wide p-2 text-3xl font-extrabold text-jean hover:text-jean cursor-pointer transition-all duration-100" to="/">Helpers</NuxtLink>
                <nav class="space-x-1 lg:space-x-2">
                    <NuxtLink class="p-2  text-gray-500 hover:text-dark transition-all duration-200" to="/templates">Templates</NuxtLink>
                    <NuxtLink class="p-2  text-gray-500 hover:text-dark transition-all duration-200" to=" ">Functionalities</NuxtLink>
                    <NuxtLink class="p-2  text-gray-500 hover:text-dark transition-all duration-200" to="/plugins">Plugins</NuxtLink>
                </nav>
            </div>
            <nav class="space-x-1 lg:space-x-2">
                <NuxtLink class="text-gray-500 hover:text-dark transition-all duration-200 p-2" to=" ">Register</NuxtLink>
                <NuxtLink class="text-gray-500  transition-all duration-200 border border-1 px-4 py-2 rounded-lg font-semibold hover:bg-jean hover:text-white" to=" ">Login</NuxtLink>
            </nav>
        </div>
    </div>
</template>


<style>
.router-link-exact-active{
    text-decoration: underline;
}
</style>