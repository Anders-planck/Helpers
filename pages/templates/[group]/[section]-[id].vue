<template>
    <div class="w-full my-16 space-y-1">
        <div class="text-gray-400 text-sm ">
            <a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-400 font-bold hover:text-dark transition-all duration-200"
                :href="'/templates#'+$route.params.group"> {{$route.params.group}}</a> >
            <a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-400 font-bold hover:text-dark transition-all duration-200"
                :href="'/templates#'+$route.params.section.toString().replace(' ','')">{{$route.params.section.toString()}}</a>
        </div>
        <h1 class="hidden p-2 lg:py-2 lg:px-4  md:inline-block text-2xl font-black tracking-wide text-dark capitalize">
            {{$route.params.id}} 
        </h1>

        <content />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>