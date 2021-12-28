<template>
    <div class="w-full my-16 space-y-1" v-if="block">
        <div class="text-gray-400 text-sm ">
            <a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-400 font-bold hover:text-dark transition-all duration-200"
                :href="'/templates#'+$route.params.group.toString().replace(' ','')"> {{$route.params.group}}</a> >
            <a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-400 font-bold hover:text-dark transition-all duration-200"
                :href="'/templates#'+$route.params.group.toString().replace(' ','')+'-'+$route.params.section.toString().replace(' ','')">{{$route.params.section}}</a>
        </div>
        <h1 v-if="block" class="hidden p-2 lg:py-2 lg:px-4  md:inline-block text-2xl font-black tracking-wide text-dark capitalize">
            {{block.title}} 
        </h1>

        <content class="my-8"/>
        
        <div class="w-full" v-if="block.cards && block.cards.length>0">
            <content  :content="card" v-for="card in block.cards" :key="card.id"/>
        </div>
        
        <div class="w-full  h-96 p-8 " v-else>
            <div class="flex w-full h-full justify-center items-center space-x-4">
            <h1 class="text-4xl text-center tracking-wide text-black font-black">
                this block is empty.
            </h1>
            <a href="/new_content"
                class="bg-jean/20  md:w-auto flex cursor-pointer  justify-center items-center space-x-2 px-4 py-2 md:px-6 md:py-4 text-jean rounded-lg font-bold tracking-wider shadow-lg shadow-jean/10 hover:scale-95 hover:ring-1  hover:ring-jean  transition-all duration-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-center hidden md:block">Create</span>
            </a>
        </div>
        </div>



        
    </div>
</template>

<script >
import {Axios} from "@/services/axios.js"

export default {
    created(){
        this.get_cards()
    },
    data:()=>({
        block:null
    }),
    methods:{
        async get_cards(){
            var response = await Axios.get("/blocks/"+this.$route.params.id)
            this.block= response.data
        }
    }
}
</script>

<style scoped>

</style>