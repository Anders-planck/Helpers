<template>
    <div 
    :id="contentSection.title.replace(' ','')+'-'+section.title.replace(' ','')"
    class="my-4 grid  gap-x-8 gap-y-6 grid-cols-3  lg:grid-cols-4 py-8 border-b-2 border-gray-200"
    >
        <h1 class="col-span-3 md:col-span-1 md:row-span-full  text-md font-bold text-dark">
            {{section.title}}
        </h1>
        <div class="col-span-3 grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
            <card 
            v-for="card in section.blocks"
            :key="card.id"
            :card="card"
            :contentSection="contentSection"
            :section="section"/>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        section:{
            type:Object,
            required:true
        },
        contentSection:{
            type:Object,
            required:true,
        },
    }
}
</script>
