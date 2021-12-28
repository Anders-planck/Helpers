<template>
    <div class="w-full md:w-11/12  lg:w-10/12 lg:mx-auto md:mx-auto overflow-hidden space-y-16 p-4 md:p-0">
        <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8">
            <div class="col md:col flex flex-col justify-center space-y-4 items-center text-center">
                <h1 class="text-3xl font-black text-dark ">Template</h1>
                <p class="text-gray-400 text-md p-2 md:px-16">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab at cupiditate! Fuga autem
                    consectetur placeat aspernatur sapiente magni, quisquam sint exercitationem aliquid velit facilis ex
                    explicabo nulla? Alias necessitatibus totam quaerat iusto minus at sunt optio ab fugit tenetur.
                </p>
                <nuxt-link to="/templates"
                    class="bg-jean flex cursor-pointer  justify-evenly items-center  px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95  transition-all duration-300 ">
                    <span>Go to Templates</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white ml-4" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </nuxt-link>
            </div>
            <div class="hidden md:col md:block">
                <img src="@/assets/images/bureau.png" alt="bureau.png" class="[clip-path:cicle(70%_at_20%_30%)]">
            </div>
        </div>
        <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8">
            <div class="hidden md:col-span-1 md:block">
                <img src="@/assets/images/ajust.png" alt="bureau.png" class="[clip-path:cicle(70%_at_20%_30%)]">
            </div>
            <div class="col-span-1  flex flex-col justify-center space-y-4 items-center text-center">
                <h1 class="text-3xl font-black text-dark ">Plugins</h1>
                <p class="text-gray-400 text-md p-2 md:px-16">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit nesciunt esse placeat culpa
                    laboriosam molestias incidunt atque dolorum delectus distinctio, nostrum eum natus dolores officiis
                    sequi quisquam hic modi, minima quod amet dicta quae! Minima quidem totam officia fuga!
                </p>
                <nuxt-link to="#"
                    class="bg-jean  flex cursor-pointer  justify-evenly items-center  px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95  transition-all duration-300 ">
                    <span>Go to plugins</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white ml-4" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </nuxt-link>
            </div>
        </div>
        <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8">
            <div class="col md:col flex flex-col justify-center space-y-4 items-center text-center">
                <h1 class="text-3xl font-black text-dark ">Functionality</h1>
                <p class="text-gray-400 text-md p-2 md:px-16">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates repudiandae facilis nostrum
                    cupiditate dolorem deserunt natus dolorum reprehenderit est, delectus laborum nisi aliquam, hic odio
                    assumenda veniam consequatur repellendus sequi autem nemo ipsa? Earum iure et dolorum consectetur
                    sit facere!
                </p>
                <nuxt-link to="#"
                    class="bg-jean  flex cursor-pointer  justify-evenly items-center  px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95  transition-all duration-300 ">
                    <span>Go to Functionality</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white ml-4" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </nuxt-link>
            </div>
            <div class="hidden md:col md:block">
                <img src="@/assets/images/rename.png" alt="rename.png"
                    class="object-cover [clip-path:cicle(70%_at_20%_30%)]">
            </div>
        </div>
    </div>
</template>