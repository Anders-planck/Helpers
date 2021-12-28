<template>
    <div class="w-full" v-if="categories">
        <Menu :items="categories"/>
        <contents-sections v-for="contentSection in categories" :key="contentSection.title" :contentSection="contentSection"/>
    </div>
</template>

<script >
import {Axios} from "@/services/axios.js"
export default {
         setup () {
            useMeta({
                htmlAttrs: {
                    class: 'scroll-smooth'
                }
            })
        },
        created(){
            this.get_categories()
        },
        data: () =>({
            categories:null
        }),
        methods:{
            async get_categories() {
                var response = await Axios.get("/categories")
                this.categories= response.data
            }
        }
    }
</script>