<template>
    <div :id="contentSection.title.replace(' ','')" class="w-full my-16 p-4">
        <div class="border-b-2 border-gray-200">
            <h1 class="text-xl font-bold text-dark capitalize">{{contentSection.title}}</h1>
            <p class="text-gray-400 text-sm mt-2">
                {{contentSection.description}}
            </p>
        </div>
        <Section
        v-for="section in contentSection.sub_categories" 
        :key="section.title"
        :section="section"
        :contentSection="contentSection"
        />
    </div>
</template>

<script>
export default {
    props:{
        contentSection:{
            type:Object,
            required:true,
        },
    }
}
</script>