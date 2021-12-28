<script setup>
    const {data} =  await useFetch('/api/departements',{ pick: ['id','title','categories'],params: {search: 106} })
    //this.departements = data.value
</script>
<template>
    <div class="p-4  my-16 w-full flex flex-col justify-center">
        <div class="flex justify-between items-center">
            <h1 class="text-4xl text-center tracking-wide text-black font-black">
                create new content.
            </h1>
            <a href="#"
                class="bg-jean/20  md:w-auto flex cursor-pointer  justify-center items-center space-x-2 px-4 py-2 md:px-6 md:py-4 text-jean rounded-lg font-bold tracking-wider shadow-lg shadow-jean/10 hover:scale-95 hover:ring-1  hover:ring-jean  transition-all duration-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-center hidden md:block">Create</span>
            </a>
        </div>

        <div class="mt-8">
            <form>
                <div class="flex flex-col justify-center space-y-8">
                    <div class="col-span-3 grid grid-cols-3 gap-y-4 md:gap-x-4 md:gap-y-0">
                        <div class="col-span-3 md:col-span-1 flex flex-col justify-center space-y-2 ">
                                <label
                                    class="underline decoration-red-900/30 decoration-wavy font-bold text-sm capitalize text-gray-400">choose
                                    the departement of your content.</label>
                                <select v-if="departements && departements.length>0" v-model="departement"  class="border-gray-200 text-lg rounded-lg text-dark font-medium">
                                    <option disabled >Please select one</option>
                                    <option 
                                        :value="option.id"
                                        v-for="option in departements" 
                                        :key="option.id">
                                    {{option.title}}
                                    </option>
                                </select >
                                    <select v-else id="" class="border-gray-200 text-lg rounded-lg text-dark font-medium">
                                <option value="Marketing">Marketing</option>
                                <option value="Application">Application UI</option>
                                <option value="Ecommerce">Ecommerce</option>
                            </select>
                            </div>
                            <div class="col-span-3 md:col-span-2 flex flex-col justify-center space-y-2 ">
                                <label
                                    class="underline decoration-green-900/30 decoration-wavy font-bold text-sm capitalize text-gray-400">Title
                                    of your content.</label>
                                <input type="text" id="title"
                                    class="rounded-lg border-gray-200 text-lg placeholder:text-gray-400 placeholder:italic"
                                    placeholder="Title of your content...">
                            </div>
                        </div>
                    <div class="grid grid-cols-3 gap-y-4 md:gap-y-0 md:gap-x-4">
                        
                        <div class="col-span-3 sm:col-span-1 flex flex-col justify-center space-y-2 ">
                            <label
                                class="underline decoration-jean/30 decoration-wavy font-bold text-sm capitalize text-gray-400">choose
                                the category.</label>
                            <select id="" class="border-gray-200 text-lg rounded-lg text-dark font-medium">
                                <option value="Marketing">Marketing</option>
                                <option value="Application">Application UI</option>
                                <option value="Ecommerce">Ecommerce</option>
                            </select>
                        </div>
                        <div class="col-span-3 sm:col-span-1 flex flex-col justify-center space-y-2 ">
                            <label
                                class="underline decoration-red-900/30 decoration-wavy font-bold text-sm capitalize text-gray-400">choose
                                the sub-category content.</label>
                            <select id="" class="border-gray-200 text-lg rounded-lg text-dark font-medium">
                                <option value="Pagecontent">Page content</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Elements">Elements</option>
                            </select>
                        </div>
                        <div class="col-span-3 sm:col-span-1 flex flex-col justify-center space-y-2 ">
                            <label
                                class="underline decoration-indigo-900/30 decoration-wavy font-bold text-sm capitalize text-gray-400">choose
                                the block content.</label>
                            <select id="" class="border-gray-200 text-lg rounded-lg text-dark font-medium">
                                <option value="Hero section">Hero section</option>
                                <option value="Feature section">Feature section</option>
                                <option value="CTA section">CTA section</option>
                            </select>
                        </div>
                    </div>

                </div>
            </form>
        </div>

        <div class="rounded-lg mt-4 col-span-1 h-full space-y-4">
            <label
                class="underline decoration-indigo-900/30 decoration-wavy font-bold text-sm capitalize text-gray-400">paste
                your code here </label>
            <prism-editor ref="editor" 
            class="my-editor bg-bleuTherne overflow-scroll rounded-lg"
            v-model="code"
            :highlight="highlighter"
            :tabSize="4">
            </prism-editor>
        </div>
    </div>
</template>


<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; 
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import '@/assets/css/prism-editor.css';

export default {
    data: () => ({
        code: '<h1 class="text-4xl text-center text-black font-black">new content</h1>',
        state:'preview',
        departements:[],
        departement:'',
    }),

    methods:{
        highlighter(code) {
            return Prism.highlight(code, Prism.languages.html, 'html'); // languages.<insert language> to return html with markup
        },
        
    },

    components: {
        PrismEditor
    },
}
</script>




<style  scoped>
.my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: 'Fira code', Consolas, Menlo, Courier, monospace;
    font-size: 1rem;
    line-height: 1.5;
    overflow: scroll;
     padding: 1rem;
    overflow: auto;
    max-height:  70vh;
    width: 100%;
    margin:0 auto;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
    overflow-x: scroll;
  }

  

</style>



