<template>
    <div class="w-full px-2 space-y-16">
        <div v-if="content">
            <div class="flex justify-between items-center ">
                <h1 class="text-sm font-bold text-gray-500 uppercase">{{content.title}}</h1>
                <nav class="flex justify-between items-center space-x-2">
                    <button @click="state='preview'"
                        class="text-sm font-medium text-gray-600 flex items-center border-2 border-gray-200 rounded-lg px-2 py-1 space-x-1 hover:scale-95 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 "
                            :class="state ==='preview' ? 'stroke-jean' : 'stroke-slate-600'" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>preview</span>
                    </button>
                    <button @click="state='code'"
                        class="text-sm font-medium text-gray-600 flex items-center border-2 border-gray-200 rounded-lg px-2 py-1 space-x-1 hover:scale-95 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  fill-white"
                            :class="state ==='code' ? 'stroke-jean' : 'stroke-slate-600'" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <span>code</span>
                    </button>
                    <button @click="copy"
                        class="text-sm font-medium relative text-gray-600 flex items-center  rounded-lg px-2 py-1 space-x-1 hover:scale-95 transition-all duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 "
                            :class="isCopy ? 'stroke-jean  -rotate-[8deg]' : 'stroke-slate-600'" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>

                        <span class="absolute inset-x-0 bottom-full mb-2.5 flex justify-center " v-if="isCopy">
                            <span
                                class="bg-gray-900 text-white rounded-md text-[0.625rem] leading-4 tracking-wide font-semibold uppercase py-1 px-3 filter drop-shadow-md">
                                <svg aria-hidden="true" width="16" height="6" viewBox="0 0 16 6"
                                    class="text-gray-900 absolute top-full left-1/2 -mt-px -ml-2">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
                                        fill="currentColor"></path>
                                </svg>
                                Copied!
                            </span>
                        </span>
                    </button>
                </nav>
            </div>
            <div v-if="state=='preview'" class="mt-4">
                <div v-html="content.content"></div>
            </div>
            <div v-show="state=='code'" class="rounded-lg mt-4">
                <prism-editor ref="editor" class="my-editor bg-bleuTherne overflow-scroll rounded-lg"
                    v-model="content.content" readonly :highlight="highlighter">
                </prism-editor>
            </div>
        </div>
        <div>
            <div class="flex justify-between items-center my-32">
                <h1 class="text-sm font-bold text-gray-500 uppercase">{{item.title}}</h1>
                <nav class="flex justify-between items-center space-x-2">
                    <button @click="state='preview'"
                        class="text-sm font-medium text-gray-600 flex items-center border-2 border-gray-200 rounded-lg px-2 py-1 space-x-1 hover:scale-95 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 "
                            :class="state ==='preview' ? 'stroke-jean' : 'stroke-slate-600'" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>preview</span>
                    </button>
                    <button @click="state='code'"
                        class="text-sm font-medium text-gray-600 flex items-center border-2 border-gray-200 rounded-lg px-2 py-1 space-x-1 hover:scale-95 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  fill-white"
                            :class="state ==='code' ? 'stroke-jean' : 'stroke-slate-600'" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <span>code</span>
                    </button>
                    <button @click="copy"
                        class="text-sm font-medium relative text-gray-600 flex items-center  rounded-lg px-2 py-1 space-x-1 hover:scale-95 transition-all duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 "
                            :class="isCopy ? 'stroke-jean  -rotate-[8deg]' : 'stroke-slate-600'" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>

                        <span class="absolute inset-x-0 bottom-full mb-2.5 flex justify-center " v-if="isCopy">
                            <span
                                class="bg-gray-900 text-white rounded-md text-[0.625rem] leading-4 tracking-wide font-semibold uppercase py-1 px-3 filter drop-shadow-md">
                                <svg aria-hidden="true" width="16" height="6" viewBox="0 0 16 6"
                                    class="text-gray-900 absolute top-full left-1/2 -mt-px -ml-2">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
                                        fill="currentColor"></path>
                                </svg>
                                Copied!
                            </span>
                        </span>
                    </button>
                </nav>
            </div>
            <div v-if="state=='preview'" class="mt-4">
                <div v-html="item.content"></div>
            </div>
            <div v-show="state=='code'" class="rounded-lg mt-4">
                <prism-editor ref="editor" class="my-editor bg-bleuTherne overflow-scroll rounded-lg"
                    v-model="item.content" readonly :highlight="highlighter">
                </prism-editor>
            </div>
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
    props:{
        content:{
            type:Object,
            required:true
        }
    },
    data: () => ({
        state:'preview',
        isCopy:false,
        item: {
            id: 1,
            title: "classic hero",
            content: `
            <div class="w-full  h-[50vh]">
                <div class="w-full h-full flex justify-evenly items-center">
                    <div
                        class="w-full p-2 md:p-0 md:w-2/5 flex justify-center items-center text-center flex-col space-y-6 ">
                        <h1 class="text-dark text-5xl tracking-wide font-black">
                            Code quickly and reliably with <span class="text-jean">Helpers</span>.
                        </h1>
                        <p class="text-lg text-gray-500">
                            Create a project and help you with our various tools and templates.
                        </p>
                        <a href="#"
                            class="bg-jean/10 text-jean  w-2/3 block cursor-pointer   px-8 py-4 rounded-lg font-semibold tracking-wider shadow-sm hover:border-transparent hover:text-white hover:bg-jean hover:shadow-jean/30  transition-all duration-300">
                            See our latest creation
                        </a>

                        <nuxt-link to="/templates"
                            class="bg-jean w-2/3 block cursor-pointer  px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95  transition-all duration-300 ">
                            Get started
                        </nuxt-link>
                    </div>
                    <div class="hidden md:flex md:w-3/5  justify-center items-center flex-col space-y-6">
                        <img src="https://cdn0.iconfinder.com/data/icons/azure-illustrations/1000/settings___preferences_options_dial_configuration_configure_man-2048.png" alt="header-bg.jpg">
                    </div>
                </div>
            </div>
              `
        },
    }),
    methods:{
         copy() {

             this.isCopy=true
             var vm = this
             setTimeout(()=>{
                vm.isCopy=false
             },2000)
            var copy= document.createElement("textarea")
            copy.classList.add("hidden")
            copy.value = this.item.content
            document.body.appendChild(copy)
            copy.focus()
            copy.select()
            document.execCommand("copy")
            document.body.removeChild(copy)
        },
        highlighter(code) {
            return Prism.highlight(code, Prism.languages.html, "html"); // languages.<insert language> to return html with markup
        },
    },
      components: {
    PrismEditor
  },
}
</script>

<style scoped>
.my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;

    padding: 0px 10px;
    overflow: scroll;
    overflow-x: scroll;
    max-height:  70vh;
    width: 95%;
    margin:0 auto;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
    overflow-x: scroll;
  }
</style>