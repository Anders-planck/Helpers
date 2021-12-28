<template>
    <div class="overflow-hidden w-full sticky top-0 bg-white z-50 flex justify-between items-center md:w-full md:mr-auto my-4  border-b-2 border-gray-200 p-2">
        <div class="flex justify-start items-center space-x-1 md:space-x-4 ">
            <h1 class="hidden p-2 lg:py-2 lg:px-4 md:inline-block  font-bold tracking-wide text-dark ">Templates ></h1>
            <a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-500 hover:text-dark transition-all duration-200" :href="'#'+item.title.replace(' ','')" v-for="item in items" :key="item.title">{{item.title}}</a>
        </div>
        <div class="flex justify-end items-center space-x-2 md:space-x-4">
            <a class="cursor-pointer bg-jean/20  text-sm md:text-md font-bold tracking-wide rounded-lg px-1 py-2 md:py-2 md:px-4 inline-block text-jean shadow-sm  hover:ring-1 hover:ring-jean hover:scale-95 transition-all duration-200" href="/new_content">Add section</a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        items:{
            type:Array,
            required:true
        }
    }
}
</script>