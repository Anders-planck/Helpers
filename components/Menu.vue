<template>
    <div class="overflow-hidden w-full sticky top-0 bg-white z-50 flex justify-between items-center md:w-full md:mr-auto my-4  border-b-2 border-gray-200 p-2">
        <div class="flex justify-start items-center space-x-1 md:space-x-4 ">
            <h1 class="hidden p-2 lg:py-2 lg:px-4 md:inline-block  font-bold tracking-wide text-dark ">Templates ></h1>
            <a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-500 hover:text-dark transition-all duration-200" href="#Marketing">Marketing</a>
            <a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-500 hover:text-dark transition-all duration-200" href="#Application">Application</a>
            <a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-500 hover:text-dark transition-all duration-200" href="#Ecommerce">Ecommerce</a>
        </div>
        <div class="flex justify-end items-center space-x-2 md:space-x-4">
            <h1 class="hidden py-2 px-4 lg:inline-block  font-bold tracking-wide text-dark ">Options ></h1>
            <button class="cursor-pointer  text-sm md:text-md font-bold tracking-wide rounded-lg px-1 py-2 md:py-2 md:px-4 inline-block text-gray-500 shadow-sm border-gray-200 border-2 hover:ring-1 hover:ring-dark hover:scale-95 transition-all duration-200">Add section</button>
            <button class="cursor-pointer  text-sm md:text-md font-bold tracking-wide rounded-lg px-1 py-2 md:py-2 md:px-4 inline-block text-red-900  hover:ring-1 hover:ring-red-600 hover:scale-95 bg-red-100 shadow-lg shadow-red-100/30  transition-all duration-200">Remove section</button>
        </div>
    </div>
</template>