<template>
    <a 
    class="group rounded-lg ring-1 ring-black ring-opacity-5" 
    :href="'/templates/'+contentSection.title+'/'+section.title+'-'+card.id" 
    v-if="card">
        <div class="aspect-h-1 aspect-w-2 rounded-lg">
            <img v-if="card.image" class="object-cover rounded-t-lg contrast-100" :src="card.image" :alt="card.image">
            <img v-else class="object-cover rounded-t-lg contrast-100" src="@/assets/images/bg.jpg" alt="bg.jpg">
        </div>
        <div class="flex justify-center flex-col items-start p-2">
            <h2 class="text-dark tracking-wide font-bold text-sm capitalize">{{card.title}}</h2>
            <p class="text-gray-400 text-sm" v-if="card && card.cards">
                <span class="text-dark tracking-wide font-bold">{{card.cards.length}}</span>
                <span v-if="card.cards.length >1"> elements.</span>
                <span v-else> element.</span>
            </p>
        </div>
    </a>
</template>

<script>
export default {
    props:{
        card:{
            type:Object,
            required:true
        },
        section:{
            type:Object,
            required:true
        },
        contentSection:{
            type:Object,
            required:true
        },
    }
}
</script>
