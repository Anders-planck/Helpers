<template>
    <div class="w-full">
        <Menu/>
        <contents-sections v-for="contentSection in categories" :key="contentSection.title" :contentSection="contentSection"/>
    </div>
</template>

<script>
    export default {
         setup () {
            useMeta({
                htmlAttrs: {
                    class: 'scroll-smooth'
                }
            })
        },
        data: () =>({
            categories:[
                {
                    title: 'Marketing',
                    description: "Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautifull marketing websites.",
                    subCategories:[
                        {
                            title:'pages content',
                            items:[
                                {
                                    id:1,
                                    image:'assets/images/bureau.png',
                                    title:'hero section',
                                    items:[
                                        {
                                            id: 1,
                                            title:"classic hero",
                                            content: `
                                                    <template>
                                                    <div class="w-full  h-[50vh]">
                                                        <div class="w-full h-full flex justify-around items-center">
                                                            <div class="w-full p-2 md:p-0 md:2/5  flex justify-center items-center text-center flex-col space-y-6 ">
                                                                <h1 class="text-dark text-5xl tracking-wide font-black">
                                                                    Code quickly and reliably with <span class="text-jean">Helpers</span>.
                                                                </h1>
                                                                <p class="text-lg text-gray-500">
                                                                    Create a project and help you with our various tools and templates.
                                                                </p>
                                                                <a href="#"
                                                                    class="border-2 border-gray-200 w-2/3 block cursor-pointer   px-8 py-4 text-dark rounded-lg font-semibold tracking-wider shadow-sm hover:border-transparent hover:text-white hover:bg-jean hover:shadow-jean/30  transition-all duration-300">
                                                                    See our latest creation
                                                                </a>

                                                                <a href="#"
                                                                    class="bg-jean w-2/3 block cursor-pointer  px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95  transition-all duration-300 ">
                                                                    Get started
                                                                </a>
                                                            </div>
                                                            <div class="hidden md:flex w-3/5  justify-center items-center flex-col space-y-6 bg-slate-400">
                                                                <img src="@/assets/images/header-bg.jpg" alt="header-bg.jpg" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            `
                                        },
                                    ]
                                },
                                {
                                    id:2,
                                    image:'assets/images/bureau1.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:3,
                                    image:'assets/images/ajust.png',
                                    title:'CTA section',
                                    items:[]
                                },
                                {
                                    id:4,
                                    image:'assets/images/header-1.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:5,
                                    image:'assets/images/header-2.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:6,
                                    image:'assets/images/rename.png',
                                    title:'CTA section',
                                    items:[]
                                },
                            ]
                        },
                        {
                            title:'Feedback',
                            items:[
                                {
                                    id:2,
                                    image:'assets/images/bureau1.png',
                                    title:'features section',
                                    items:[]
                                },
                                
                            ]
                        },
                        {
                            title:'Elements',
                            items:[
                                {
                                    id:4,
                                    image:'assets/images/header-1.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:5,
                                    image:'assets/images/header-2.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:6,
                                    image:'assets/images/rename.png',
                                    title:'CTA section',
                                    items:[]
                                },
                            ]
                        },
                        {
                            title:'pages Exemples',
                            items:[
                                {
                                    id:1,
                                    image:'assets/images/bureau.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:2,
                                    image:'assets/images/bureau1.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:3,
                                    image:'assets/images/ajust.png',
                                    title:'CTA section',
                                    items:[]
                                },
                                {
                                    id:4,
                                    image:'assets/images/header-1.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:5,
                                    image:'assets/images/header-2.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:6,
                                    image:'assets/images/rename.png',
                                    title:'CTA section',
                                    items:[]
                                },
                            ]
                        }
                    ]
                },
                {
                    title: 'Application',
                    description: "Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautifull marketing websites.",
                    subCategories:[
                        {
                            title:'Feedback',
                            items:[
                                {
                                    id:2,
                                    image:'assets/images/bureau1.png',
                                    title:'features section',
                                    items:[]
                                },
                                
                            ]
                        },
                        {
                            title:'pages Exemples',
                            items:[
                                {
                                    id:1,
                                    image:'assets/images/bureau.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:2,
                                    image:'assets/images/bureau1.png',
                                    title:'features section',
                                    items:[]
                                },
                                
                                {
                                    id:5,
                                    image:'assets/images/header-2.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:6,
                                    image:'assets/images/rename.png',
                                    title:'CTA section',
                                    items:[]
                                },
                            ]
                        },
                        {
                            title:'Elements',
                            items:[
                                {
                                    id:4,
                                    image:'assets/images/header-1.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:5,
                                    image:'assets/images/header-2.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:6,
                                    image:'assets/images/rename.png',
                                    title:'CTA section',
                                    items:[]
                                },
                            ]
                        },
                    ]
                },
                {
                    title: 'Ecommerce',
                    description: "Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautifull marketing websites.",
                    subCategories:[
                        {
                            title:'pages content',
                            items:[
                                {
                                    id:1,
                                    image:'assets/images/bureau.png',
                                    title:'hero section',
                                    items:[
                                        {
                                            id: 1,
                                            title:"classic hero",
                                            content: `
                                                    <template>
                                                    <div class="w-full  h-[50vh]">
                                                        <div class="w-full h-full flex justify-around items-center">
                                                            <div class="w-full p-2 md:p-0 md:2/5  flex justify-center items-center text-center flex-col space-y-6 ">
                                                                <h1 class="text-dark text-5xl tracking-wide font-black">
                                                                    Code quickly and reliably with <span class="text-jean">Helpers</span>.
                                                                </h1>
                                                                <p class="text-lg text-gray-500">
                                                                    Create a project and help you with our various tools and templates.
                                                                </p>
                                                                <a href="#"
                                                                    class="border-2 border-gray-200 w-2/3 block cursor-pointer   px-8 py-4 text-dark rounded-lg font-semibold tracking-wider shadow-sm hover:border-transparent hover:text-white hover:bg-jean hover:shadow-jean/30  transition-all duration-300">
                                                                    See our latest creation
                                                                </a>

                                                                <a href="#"
                                                                    class="bg-jean w-2/3 block cursor-pointer  px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95  transition-all duration-300 ">
                                                                    Get started
                                                                </a>
                                                            </div>
                                                            <div class="hidden md:flex w-3/5  justify-center items-center flex-col space-y-6 bg-slate-400">
                                                                <img src="@/assets/images/header-bg.jpg" alt="header-bg.jpg" >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            `
                                        },
                                    ]
                                },
                                {
                                    id:2,
                                    image:'assets/images/bureau1.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:3,
                                    image:'assets/images/ajust.png',
                                    title:'CTA section',
                                    items:[]
                                },
                                {
                                    id:4,
                                    image:'assets/images/header-1.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:5,
                                    image:'assets/images/header-2.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:6,
                                    image:'assets/images/rename.png',
                                    title:'CTA section',
                                    items:[]
                                },
                            ]
                        },
                        {
                            title:'Feedback',
                            items:[
                                {
                                    id:2,
                                    image:'assets/images/bureau1.png',
                                    title:'features section',
                                    items:[]
                                },
                                
                            ]
                        },
                        {
                            title:'Elements',
                            items:[
                                {
                                    id:4,
                                    image:'assets/images/header-1.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:5,
                                    image:'assets/images/header-2.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:6,
                                    image:'assets/images/rename.png',
                                    title:'CTA section',
                                    items:[]
                                },
                            ]
                        },
                        {
                            title:'pages Exemples',
                            items:[
                                {
                                    id:1,
                                    image:'assets/images/bureau.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:2,
                                    image:'assets/images/bureau1.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:3,
                                    image:'assets/images/ajust.png',
                                    title:'CTA section',
                                    items:[]
                                },
                                {
                                    id:4,
                                    image:'assets/images/header-1.png',
                                    title:'hero section',
                                    items:[]
                                },
                                {
                                    id:5,
                                    image:'assets/images/header-2.png',
                                    title:'features section',
                                    items:[]
                                },
                                {
                                    id:6,
                                    image:'assets/images/rename.png',
                                    title:'CTA section',
                                    items:[]
                                },
                            ]
                        }
                    ]
                },
            ]
        })
    }
</script>