
<script setup>
    const {data} =  await useFetch('/api/departements',{ pick: ['id','title','categories'],params: {search: 106} })
    console.log(data.value)
</script>

<template>
    <div>
        <pre>{{ data }}</pre>
        <h1 v-for="c in data.categories" :key="c.id"  class="mb-4"> {{c.title}}</h1>
    </div>
</template>
