
// --------------------
// Request: /Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/css.mjs ($id_cceefde2)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs ($id_96abf442)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/root-component.mjs ($id_c6c082ac)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/app-component.mjs ($id_8c900449)
// --------------------
const $id_0424c648 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("page:finish", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/entry ($id_0424c648)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/layouts.mjs ($id_a03c97d9)
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/github-icon.vue ($id_8657dbc0)
// - /components/instagram-icon.vue ($id_ecce40b1)
// - /components/twitter-icon.vue ($id_635e52bf)
// - /components/facebook-icon.vue ($id_5ac52ef2)
// - /components/Footer.vue ($id_f3d8f325)
// - /layouts/default.vue ($id_7689e89d)
// - /components/header-index.vue ($id_265d4565)
// - /components/services.vue ($id_0fea1836)
// - /components/example.vue ($id_b9253967)
// - /components/get-started.vue ($id_645fb6af)
// - /pages/index.vue ($id_cca58e97)
// - /components/content.vue ($id_3032adb6)
// - /node_modules/vue-prism-editor/dist/prismeditor.esm.js ($id_e506e72f)
// - /pages/templates/[group]/[section]-[id].vue ($id_42acd7e4)
// - /components/Menu.vue ($id_b1d32007)
// - /components/card.vue ($id_d9dfd282)
// - /components/Section.vue ($id_5ff493dc)
// - /components/contents-sections.vue ($id_0b3ec488)
// - /pages/templates/index.vue ($id_83001a7f)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/vue/dist/vue.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/vue/dist/vue.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/entry ($id_0424c648)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, () => plugin(nuxtApp)) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
function callWithNuxt(nuxt, setup) {
  setNuxtAppInstance(nuxt);
  const p = setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/hookable/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/hookable/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_75047751 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = { ...nuxtApp.vueApp };
      legacyApp.$root = legacyApp;
      legacyApp.constructor = legacyApp;
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/unenv/runtime/mock/proxy.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/unenv/runtime/mock/proxy.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useLazyFetch }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useCookie }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRequestHeaders }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  Object.assign(await res, __vite_ssr_import_0__.toRefs(data));
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/vue-router/dist/vue-router.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/vue-router/dist/vue-router.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = asyncData.refresh();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else {
      asyncData.refresh();
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/murmurhash-es/dist/index.mjs ($id_fbf6dac3)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_fbf6dac3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/murmurhash-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/murmurhash-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_792d64c4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(useSSRRes(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function useSSRReq(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.req;
}
function useSSRRes(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.res;
}
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(useSSRReq().headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(res, name, value, opts = {}) {
  if (res) {
    __vite_ssr_import_2__.appendHeader(res, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/cookie-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/cookie-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/h3/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/h3/dist/index.mjs".') })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/destr/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/destr/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_4d0dc923 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/css.mjs
// Parents: 
// - /Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/entry ($id_0424c648)
// Dependencies: 
// - /assets/css/tailwind.scss ($id_a0d95d60)
// --------------------
const $id_cceefde2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.scss");
;
}


// --------------------
// Request: /assets/css/tailwind.scss
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/css.mjs ($id_cceefde2)
// Dependencies: 

// --------------------
const $id_a0d95d60 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n/*\n! tailwindcss v3.0.7 | MIT License | https://tailwindcss.com\n*/\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n[hidden] {\n  display: none;\n}\n*, ::before, ::after{\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n  --tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.aspect-h-1{\n  --tw-aspect-h: 1;\n}\n.aspect-w-2{\n  position: relative;\n  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n  --tw-aspect-w: 2;\n}\n.aspect-w-2 > *{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.absolute{\n  position: absolute;\n}\n.relative{\n  position: relative;\n}\n.sticky{\n  position: -webkit-sticky;\n  position: sticky;\n}\n.inset-x-0{\n  left: 0px;\n  right: 0px;\n}\n.top-0{\n  top: 0px;\n}\n.bottom-full{\n  bottom: 100%;\n}\n.top-full{\n  top: 100%;\n}\n.left-1\\/2{\n  left: 50%;\n}\n.z-50{\n  z-index: 50;\n}\n.col-span-3{\n  grid-column: span 3 / span 3;\n}\n.my-4{\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-16{\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n.my-8{\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.mt-4{\n  margin-top: 1rem;\n}\n.mt-2{\n  margin-top: 0.5rem;\n}\n.ml-4{\n  margin-left: 1rem;\n}\n.mt-16{\n  margin-top: 4rem;\n}\n.mb-2\\.5{\n  margin-bottom: 0.625rem;\n}\n.mb-2{\n  margin-bottom: 0.5rem;\n}\n.-mt-px{\n  margin-top: -1px;\n}\n.-ml-2{\n  margin-left: -0.5rem;\n}\n.block{\n  display: block;\n}\n.inline-block{\n  display: inline-block;\n}\n.flex{\n  display: flex;\n}\n.grid{\n  display: grid;\n}\n.hidden{\n  display: none;\n}\n.h-6{\n  height: 1.5rem;\n}\n.h-\\[50vh\\]{\n  height: 50vh;\n}\n.h-full{\n  height: 100%;\n}\n.h-60{\n  height: 15rem;\n}\n.h-10{\n  height: 2.5rem;\n}\n.h-5{\n  height: 1.25rem;\n}\n.w-screen{\n  width: 100vw;\n}\n.w-full{\n  width: 100%;\n}\n.w-6{\n  width: 1.5rem;\n}\n.w-2\\/3{\n  width: 66.666667%;\n}\n.w-72{\n  width: 18rem;\n}\n.w-10{\n  width: 2.5rem;\n}\n.w-3\\/5{\n  width: 60%;\n}\n.w-5{\n  width: 1.25rem;\n}\n.-translate-y-full{\n  --tw-translate-y: -100%;\n  transform: var(--tw-transform);\n}\n.translate-y-full{\n  --tw-translate-y: 100%;\n  transform: var(--tw-transform);\n}\n.-rotate-\\[8deg\\]{\n  --tw-rotate: -8deg;\n  transform: var(--tw-transform);\n}\n.scale-0{\n  --tw-scale-x: 0;\n  --tw-scale-y: 0;\n  transform: var(--tw-transform);\n}\n.cursor-pointer{\n  cursor: pointer;\n}\n.grid-flow-row{\n  grid-auto-flow: row;\n}\n.grid-cols-1{\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-3{\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-rows-1{\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\n.flex-col{\n  flex-direction: column;\n}\n.flex-col-reverse{\n  flex-direction: column-reverse;\n}\n.flex-wrap{\n  flex-wrap: wrap;\n}\n.items-start{\n  align-items: flex-start;\n}\n.items-end{\n  align-items: flex-end;\n}\n.items-center{\n  align-items: center;\n}\n.justify-start{\n  justify-content: flex-start;\n}\n.justify-end{\n  justify-content: flex-end;\n}\n.justify-center{\n  justify-content: center;\n}\n.justify-between{\n  justify-content: space-between;\n}\n.justify-around{\n  justify-content: space-around;\n}\n.justify-evenly{\n  justify-content: space-evenly;\n}\n.gap-8{\n  gap: 2rem;\n}\n.gap-6{\n  gap: 1.5rem;\n}\n.gap-x-8{\n  -moz-column-gap: 2rem;\n       column-gap: 2rem;\n}\n.gap-y-6{\n  row-gap: 1.5rem;\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-8 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-y-6 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.overflow-hidden{\n  overflow: hidden;\n}\n.overflow-scroll{\n  overflow: scroll;\n}\n.overflow-x-hidden{\n  overflow-x: hidden;\n}\n.scroll-smooth{\n  scroll-behavior: smooth;\n}\n.rounded-lg{\n  border-radius: 0.5rem;\n}\n.rounded-md{\n  border-radius: 0.375rem;\n}\n.rounded-t-lg{\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.border-2{\n  border-width: 2px;\n}\n.border{\n  border-width: 1px;\n}\n.border-t-2{\n  border-top-width: 2px;\n}\n.border-b-2{\n  border-bottom-width: 2px;\n}\n.border-gray-200{\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.bg-white{\n  background-color: #f4faffff;\n}\n.bg-red-600{\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\n}\n.bg-jean{\n  background-color: #00AAFFff;\n}\n.bg-jean\\/10{\n  background-color: rgb(0 170 255 / 0.1);\n}\n.bg-slate-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity));\n}\n.bg-gray-900{\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.bg-bleuTherne{\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n.fill-white{\n  fill: #f4faffff;\n}\n.fill-gray-600{\n  fill: #4b5563;\n}\n.fill-slate-900{\n  fill: #0f172a;\n}\n.stroke-dark{\n  stroke: #020203ff;\n}\n.stroke-jean{\n  stroke: #00AAFFff;\n}\n.stroke-slate-600{\n  stroke: #475569;\n}\n.object-cover{\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.p-2{\n  padding: 0.5rem;\n}\n.p-4{\n  padding: 1rem;\n}\n.p-8{\n  padding: 2rem;\n}\n.px-4{\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2{\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-1{\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.px-8{\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-4{\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-8{\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.px-2{\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-1{\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-3{\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.pb-2{\n  padding-bottom: 0.5rem;\n}\n.text-center{\n  text-align: center;\n}\n.text-5xl{\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-sm{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl{\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-3xl{\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-lg{\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-2xl{\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-\\[0\\.625rem\\]{\n  font-size: 0.625rem;\n}\n.font-extrabold{\n  font-weight: 800;\n}\n.font-bold{\n  font-weight: 700;\n}\n.font-black{\n  font-weight: 900;\n}\n.font-semibold{\n  font-weight: 600;\n}\n.font-medium{\n  font-weight: 500;\n}\n.uppercase{\n  text-transform: uppercase;\n}\n.capitalize{\n  text-transform: capitalize;\n}\n.leading-4{\n  line-height: 1rem;\n}\n.tracking-wide{\n  letter-spacing: 0.025em;\n}\n.tracking-wider{\n  letter-spacing: 0.05em;\n}\n.text-dark{\n  color: #020203ff;\n}\n.text-gray-500{\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.text-jean{\n  color: #00AAFFff;\n}\n.text-slate-500{\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity));\n}\n.text-white{\n  color: #f4faffff;\n}\n.text-gray-400{\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.text-gray-600{\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.text-gray-900{\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.opacity-0{\n  opacity: 0;\n}\n.shadow-sm{\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg{\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-red-600\\/30{\n  --tw-shadow-color: rgb(220 38 38 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.shadow-jean\\/30{\n  --tw-shadow-color: rgb(0 170 255 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.outline{\n  outline-style: solid;\n}\n.ring-1{\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-black{\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));\n}\n.ring-opacity-5{\n  --tw-ring-opacity: 0.05;\n}\n.contrast-100{\n  --tw-contrast: contrast(1);\n  filter: var(--tw-filter);\n}\n.drop-shadow-md{\n  --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));\n  filter: var(--tw-filter);\n}\n.filter{\n  filter: var(--tw-filter);\n}\n.transition-all{\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200{\n  transition-duration: 200ms;\n}\n.duration-100{\n  transition-duration: 100ms;\n}\n.duration-300{\n  transition-duration: 300ms;\n}\n.ease-in-out{\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.\\[clip-path\\:cicle\\(70\\%_at_20\\%_30\\%\\)\\]{\n  -webkit-clip-path: cicle(70% at 20% 30%);\n          clip-path: cicle(70% at 20% 30%);\n}\nbody {\n  font-family: \"Raleway\", sans-serif;\n}\n.hover\\:scale-95:hover{\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  transform: var(--tw-transform);\n}\n.hover\\:border-transparent:hover{\n  border-color: transparent;\n}\n.hover\\:bg-jean:hover{\n  background-color: #00AAFFff;\n}\n.hover\\:fill-dark:hover{\n  fill: #020203ff;\n}\n.hover\\:text-dark:hover{\n  color: #020203ff;\n}\n.hover\\:text-jean:hover{\n  color: #00AAFFff;\n}\n.hover\\:text-white:hover{\n  color: #f4faffff;\n}\n.hover\\:shadow-jean\\/30:hover{\n  --tw-shadow-color: rgb(0 170 255 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.hover\\:ring-1:hover{\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.hover\\:ring-red-600:hover{\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(220 38 38 / var(--tw-ring-opacity));\n}\n.group:hover .group-hover\\:h-full{\n  height: 100%;\n}\n.group:hover .group-hover\\:-translate-y-0{\n  --tw-translate-y: -0px;\n  transform: var(--tw-transform);\n}\n.group:hover .group-hover\\:translate-y-0{\n  --tw-translate-y: 0px;\n  transform: var(--tw-transform);\n}\n.group:hover .group-hover\\:scale-100{\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: var(--tw-transform);\n}\n.group:hover .group-hover\\:opacity-100{\n  opacity: 1;\n}\n@media (min-width: 640px){\n  .sm\\:grid-cols-2{\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .sm\\:gap-y-8{\n    row-gap: 2rem;\n  }\n  .sm\\:px-8{\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n@media (min-width: 768px){\n  .md\\:col-span-1{\n    grid-column: span 1 / span 1;\n  }\n  .md\\:row-span-full{\n    grid-row: 1 / -1;\n  }\n  .md\\:mr-auto{\n    margin-right: auto;\n  }\n  .md\\:mt-16{\n    margin-top: 4rem;\n  }\n  .md\\:block{\n    display: block;\n  }\n  .md\\:inline-block{\n    display: inline-block;\n  }\n  .md\\:flex{\n    display: flex;\n  }\n  .md\\:w-full{\n    width: 100%;\n  }\n  .md\\:w-2\\/5{\n    width: 40%;\n  }\n  .md\\:w-3\\/5{\n    width: 60%;\n  }\n  .md\\:grid-cols-2{\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-3{\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .md\\:flex-row{\n    flex-direction: row;\n  }\n  .md\\:justify-between{\n    justify-content: space-between;\n  }\n  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse: 0;\n    margin-right: calc(2rem * var(--tw-space-x-reverse));\n    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .md\\:space-x-4 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1rem * var(--tw-space-x-reverse));\n    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n  .md\\:p-0{\n    padding: 0px;\n  }\n  .md\\:py-2{\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n  .md\\:px-4{\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .md\\:px-16{\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n}\n@media (min-width: 1024px){\n  .lg\\:mx-auto{\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .lg\\:inline-block{\n    display: inline-block;\n  }\n  .lg\\:w-10\\/12{\n    width: 83.333333%;\n  }\n  .lg\\:grid-cols-4{\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .lg\\:gap-x-8{\n    -moz-column-gap: 2rem;\n         column-gap: 2rem;\n  }\n  .lg\\:space-x-2 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .lg\\:space-x-32 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse: 0;\n    margin-right: calc(8rem * var(--tw-space-x-reverse));\n    margin-left: calc(8rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .lg\\:px-0{\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .lg\\:py-2{\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n  .lg\\:px-4{\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media (min-width: 1280px){\n  .xl\\:w-8\\/12{\n    width: 66.666667%;\n  }\n  .xl\\:px-0{\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}";
}


// --------------------
// Request: /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/entry ($id_0424c648)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// --------------------
const $id_96abf442 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
__vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs ($id_96abf442)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs ($id_96abf442)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.getAttribute(n) : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    var _a2;
    const key = getTagKey(t);
    if (key) {
      const uncontrolled = head.querySelector(`${t.tagName.toLowerCase()}[${key.name}="${key.value}"]`);
      if (uncontrolled) {
        (_a2 = uncontrolled.parentNode) == null ? void 0 : _a2.removeChild(uncontrolled);
      }
    }
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document, name, actualTags[name]);
      }
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs ($id_96abf442)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/meta.config.mjs ($id_9b81a6a6)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      __vite_ssr_import_2__.useMeta(options.head);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/index.mjs ($id_ea12a3fb)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/@vue/shared/dist/shared.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/@vue/shared/dist/shared.cjs.js".') })


// --------------------
// Request: /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_9b81a6a6 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs ($id_96abf442)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/routes.mjs ($id_2bd3b053)
// --------------------
const $id_a4d6cb5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/nested-page.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/routes.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_2__.default);
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtLayout", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtLink", __vite_ssr_import_1__.RouterLink);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_2__.default);
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory() : __vite_ssr_import_1__.createMemoryHistory();
  const router = __vite_ssr_import_1__.createRouter({
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp.hook("app:created", async () => {
    if (true) {
      router.push(nuxtApp.ssrContext.url);
    }
    await router.isReady();
    const is404 = router.currentRoute.value.matched.length === 0;
    if (true && is404) {
      const error = new Error(`Page not found: ${nuxtApp.ssrContext.url}`);
      error.statusCode = 404;
      nuxtApp.ssrContext.error = error;
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/nested-page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c268603a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const _sfc_main = {
  name: 'NuxtNestedPage'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_0__.resolveComponent("RouterView")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_0__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        __vite_ssr_import_1__.ssrRenderVNode(_push, __vite_ssr_import_0__.createVNode(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
          key: _ctx.$route.path
        }, null), _parent, _scopeId)
      } else {
        return [
          (__vite_ssr_import_0__.openBlock(), __vite_ssr_import_0__.createBlock(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
            key: _ctx.$route.path
          }))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/nested-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/pages/runtime/nested-page.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/github-icon.vue ($id_8657dbc0)
// - /components/instagram-icon.vue ($id_ecce40b1)
// - /components/twitter-icon.vue ($id_635e52bf)
// - /components/facebook-icon.vue ($id_5ac52ef2)
// - /components/Footer.vue ($id_f3d8f325)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /components/header-index.vue ($id_265d4565)
// - /components/services.vue ($id_0fea1836)
// - /components/example.vue ($id_b9253967)
// - /components/get-started.vue ($id_645fb6af)
// - /pages/index.vue ($id_cca58e97)
// - /components/content.vue ($id_3032adb6)
// - /pages/templates/[group]/[section]-[id].vue ($id_42acd7e4)
// - /components/Menu.vue ($id_b1d32007)
// - /components/card.vue ($id_d9dfd282)
// - /components/Section.vue ($id_5ff493dc)
// - /components/contents-sections.vue ($id_0b3ec488)
// - /pages/templates/index.vue ($id_83001a7f)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/vue/server-renderer/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/vue/server-renderer/index.js".') })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/github-icon.vue ($id_8657dbc0)
// - /components/instagram-icon.vue ($id_ecce40b1)
// - /components/twitter-icon.vue ($id_635e52bf)
// - /components/facebook-icon.vue ($id_5ac52ef2)
// - /components/Footer.vue ($id_f3d8f325)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /components/header-index.vue ($id_265d4565)
// - /components/services.vue ($id_0fea1836)
// - /components/example.vue ($id_b9253967)
// - /components/get-started.vue ($id_645fb6af)
// - /pages/index.vue ($id_cca58e97)
// - /components/content.vue ($id_3032adb6)
// - /pages/templates/[group]/[section]-[id].vue ($id_42acd7e4)
// - /components/Menu.vue ($id_b1d32007)
// - /components/card.vue ($id_d9dfd282)
// - /components/Section.vue ($id_5ff493dc)
// - /components/contents-sections.vue ($id_0b3ec488)
// - /pages/templates/index.vue ($id_83001a7f)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_10628d40 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  name: 'NuxtPage',
  components: { NuxtLayout: __vite_ssr_import_1__.default },
  props: {
    layout: {
      type: String,
      default: null
    }
  },
  setup () {
    // Disable HMR reactivity in production
    const updatedComponentLayout = true ? __vite_ssr_import_0__.ref(null) : null

    const nuxtApp = __vite_ssr_import_2__.useNuxtApp()

    function onSuspensePending (Component) {
      if (true) {
        updatedComponentLayout.value = Component.type.layout || null
      }
      return nuxtApp.callHook('page:start', Component)
    }

    function onSuspenseResolved (Component) {
      return nuxtApp.callHook('page:finish', Component)
    }

    return {
      updatedComponentLayout,
      onSuspensePending,
      onSuspenseResolved
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_3__.resolveComponent("RouterView")
  const _component_NuxtLayout = __vite_ssr_import_3__.resolveComponent("NuxtLayout")

  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_3__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        if (Component) {
          _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLayout, {
            name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
          }, {
            default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<!-- <keep-alive> -->`)
                __vite_ssr_import_4__.ssrRenderSuspense(_push, {
                  default: () => {
                    __vite_ssr_import_4__.ssrRenderVNode(_push, __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                      key: _ctx.$route.path
                    }, null), _parent, _scopeId)
                  },
                  _: 2 /* DYNAMIC */
                })
                _push(`<!-- <keep-alive -->`)
              } else {
                return [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        } else {
          _push(`<!---->`)
        }
        _push(`<!-- TODO: Handle 404 placeholder -->`)
      } else {
        return [
          Component
            ? (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(_component_NuxtLayout, {
                key: 0,
                name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
              }, {
                default: __vite_ssr_import_3__.withCtx(() => [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]))
            : __vite_ssr_import_3__.createCommentVNode("v-if", true),
          __vite_ssr_import_3__.createCommentVNode(" TODO: Handle 404 placeholder ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/pages/runtime/page.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/layout.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/layouts.mjs ($id_a03c97d9)
// --------------------
const $id_9b68c93f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/layouts.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean],
      default: "default"
    }
  },
  setup(props, context) {
    return () => {
      const layout = props.name;
      if (!__vite_ssr_import_1__.default[layout]) {
        if (true && layout && layout !== "default") {
          console.warn(`Invalid layout \`${layout}\` selected.`);
        }
        return context.slots.default();
      }
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default[layout], props, context.slots);
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_a03c97d9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  "default": __vite_ssr_import_0__.defineAsyncComponent({ suspensible: false, loader: () => __vite_ssr_dynamic_import__('/layouts/default.vue') })
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/layouts.mjs ($id_a03c97d9)
// Dependencies: 
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/Footer.vue ($id_f3d8f325)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/navbar.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Footer.vue");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_navbar = __vite_ssr_import_0__.default
  const _component_Footer = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "overflow-hidden" }, _attrs))}><div class="bg-white">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_navbar, null, null, _parent))
  _push(`<div class="w-full lg:w-10/12 xl:w-8/12 lg:mx-auto">`)
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Footer, null, null, _parent))
  _push(`</div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/layouts/default.vue"]]);
}


// --------------------
// Request: /components/navbar.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ccd51fbe = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "overflow-x-hidden w-screen sticky top-0 bg-white z-50 sm:px-8 lg:px-0 xl:px-0 border border-b-2 border-gray-200" }, _attrs))}><div class="overflow-hidden w-full lg:w-10/12 xl:w-8/12 lg:mx-auto flex justify-between items-center"><div class="flex justify-between items-center space-x-4 md:space-x-8 lg:space-x-32"><a class="tracking-wide p-2 text-3xl font-extrabold text-jean hover:text-jean cursor-pointer transition-all duration-100" href="/">Helpers</a><nav class="space-x-1 lg:space-x-2"><a class="p-2 text-gray-500 hover:text-dark transition-all duration-200" href="/templates">Templates</a><a class="p-2 text-gray-500 hover:text-dark transition-all duration-200" href="#">Functionalities</a><a class="p-2 text-gray-500 hover:text-dark transition-all duration-200" href="#">Plugins</a></nav></div><nav class="space-x-1 lg:space-x-2"><a class="text-gray-500 hover:text-dark transition-all duration-200 p-2" href="#">Register</a><a class="text-gray-500 transition-all duration-200 border border-1 px-4 py-2 rounded-lg font-semibold hover:bg-jean hover:text-white" href="#">Login</a></nav></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/navbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/navbar.vue"]]);
}


// --------------------
// Request: /components/Footer.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /components/github-icon.vue ($id_8657dbc0)
// - /components/instagram-icon.vue ($id_ecce40b1)
// - /components/twitter-icon.vue ($id_635e52bf)
// - /components/facebook-icon.vue ($id_5ac52ef2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f3d8f325 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/github-icon.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/instagram-icon.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/twitter-icon.vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/facebook-icon.vue");

const _sfc_main = {}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_github_icon = __vite_ssr_import_0__.default
  const _component_instagram_icon = __vite_ssr_import_1__.default
  const _component_twitter_icon = __vite_ssr_import_2__.default
  const _component_facebook_icon = __vite_ssr_import_3__.default

  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "w-screen mt-4 bg-white px-4 sm:px-8 lg:px-0 xl:px-0 border-t-2 border-gray-200" }, _attrs))}><div class="w-full lg:w-10/12 xl:w-8/12 lg:mx-auto flex flex-col-reverse md:flex-row space-y-2 flex-wrap justify-center md:justify-between items-center border-b-2 border-gray-200"><nav class="my-4 flex space-x-1 lg:space-x-2"><a class="text-gray-500 hover:text-dark transition-all duration-200" href="#">`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_github_icon, null, null, _parent))
  _push(`</a><a class="text-gray-500 hover:text-dark transition-all duration-200" href="#">`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_instagram_icon, null, null, _parent))
  _push(`</a><a class="text-gray-500 hover:text-dark transition-all duration-200" href="#">`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_twitter_icon, null, null, _parent))
  _push(`</a><a class="text-gray-500 hover:text-dark transition-all duration-200" href="#">`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_facebook_icon, null, null, _parent))
  _push(`</a></nav><div class="flex justify-between items-center space-x-4 md:space-x-8 lg:space-x-32"><a class="tracking-wide p-2 text-5xl font-extrabold text-jean hover:text-jean cursor-pointer transition-all duration-100" href="/"> Helpers </a></div></div><div class="lg:w-10/12 xl:w-8/12 lg:mx-auto flex justify-between items-center"><div class="w-full flex justify-between items-center pb-2"><span class="text-sm text-slate-500">make by Anders</span><span class="text-sm text-slate-500">© 2021 Helpers</span></div></div></div>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Footer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/Footer.vue"]]);
}


// --------------------
// Request: /components/github-icon.vue
// Parents: 
// - /components/Footer.vue ($id_f3d8f325)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8657dbc0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


    const _sfc_main = {
        props:{
            className:{
                type:String,
                required:false,
                default:"h-6 w-6 transition-all duration-300" 
            },
        }
    }

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    class: [$props.className, "fill-gray-600 hover:fill-dark"],
    viewBox: "0 0 25 25",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path clip-rule="evenodd" d="M15.7481 24.9471C24.0901 24.7061 24.9111 22.9501 24.9111 12.9811C24.9111 1.98108 23.9111 0.981079 12.9111 0.981079C1.91113 0.981079 0.911133 1.98108 0.911133 12.9811C0.911133 22.9761 1.73713 24.7151 10.1391 24.9491C10.2121 24.8581 10.2391 24.7441 10.2391 24.6281C10.2391 24.3781 10.2291 21.8121 10.2241 20.9291C7.18713 21.5681 6.54613 19.5101 6.54613 19.5101C6.04913 18.2881 5.33313 17.9621 5.33313 17.9621C4.34213 17.3061 5.40813 17.3191 5.40813 17.3191C6.50413 17.3941 7.08113 18.4101 7.08113 18.4101C8.05513 20.0271 9.63713 19.5601 10.2591 19.2891C10.3581 18.6061 10.6401 18.1391 10.9521 17.8751C8.52713 17.6081 5.97813 16.7001 5.97813 12.6451C5.97813 11.4901 6.40413 10.5461 7.10213 9.80608C6.98913 9.53808 6.61513 8.46208 7.20913 7.00608C7.20913 7.00608 8.12613 6.72108 10.2121 8.09008C11.0831 7.85508 12.0171 7.73808 12.9461 7.73408C13.8731 7.73808 14.8071 7.85508 15.6801 8.09008C17.7651 6.72108 18.6801 7.00608 18.6801 7.00608C19.2761 8.46208 18.9011 9.53808 18.7881 9.80608C19.4881 10.5461 19.9111 11.4901 19.9111 12.6451C19.9111 16.7101 17.3581 17.6051 14.9251 17.8661C15.3171 18.1931 15.6661 18.8391 15.6661 19.8261C15.6661 20.7721 15.6601 22.4451 15.6561 23.5541C15.6541 24.1031 15.6531 24.5131 15.6531 24.6281C15.6531 24.7371 15.6821 24.8521 15.7481 24.9471V24.9471Z" fill-rule="evenodd"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/github-icon.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/github-icon.vue"]]);
}


// --------------------
// Request: /components/instagram-icon.vue
// Parents: 
// - /components/Footer.vue ($id_f3d8f325)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ecce40b1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


    const _sfc_main = {
        props:{
            className:{
                type:String,
                required:false,
                default:"h-6 w-6 transition-all duration-300"
            }
        }
    }

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    class: [$props.className, "fill-gray-600 hover:fill-dark"],
    "data-name": "Layer 1",
    id: "Layer_1",
    viewBox: "0 0 500 500",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><title></title><path d="M250,193.27A56.73,56.73,0,1,0,306.73,250,56.8,56.8,0,0,0,250,193.27Z"></path><path d="M316.74,105.49H183.26a77.86,77.86,0,0,0-77.77,77.77V316.74a77.86,77.86,0,0,0,77.77,77.77H316.74a77.86,77.86,0,0,0,77.77-77.77V183.26A77.86,77.86,0,0,0,316.74,105.49ZM250,336.7A86.7,86.7,0,1,1,336.7,250,86.8,86.8,0,0,1,250,336.7Zm95.27-160.26A21.41,21.41,0,1,1,366.68,155,21.41,21.41,0,0,1,345.27,176.45Z"></path><path d="M484.85,124.74a144.17,144.17,0,0,0-2.32-25.29c-1.94-10.19-4.67-20.12-9.55-29.33A101.84,101.84,0,0,0,453.39,44a97.14,97.14,0,0,0-42.76-24.4c-14.83-4-30-4.84-45.21-4.82a.46.46,0,0,1-.09-.23H134.59c0,.08,0,.16,0,.23-8.65.16-17.32.09-25.92,1.16A123.46,123.46,0,0,0,81,22.14,97.48,97.48,0,0,0,44.25,46.26,97.15,97.15,0,0,0,19.68,89.17c-3.94,14.72-4.8,29.73-4.82,44.85L14.7,365.69v0c.28,10.45.37,21,2.13,31.36,1.87,11,4.54,21.71,9.64,31.69A101.36,101.36,0,0,0,54.77,463a91.91,91.91,0,0,0,28.31,15.35c15.12,4.88,30.72,6.75,46.55,6.84,9.88.06,19.74.31,29.62.27,71.74-.3,143.49.52,215.23-.44a169.32,169.32,0,0,0,28.23-3A95.61,95.61,0,0,0,450,459c15.78-14.08,26.43-31.3,31.24-52.09,3.15-13.59,3.93-27.38,4.07-41.21v-2.76C485.3,361.86,484.89,127.84,484.85,124.74Zm-60.38,192A107.87,107.87,0,0,1,316.74,424.48H183.26A107.87,107.87,0,0,1,75.52,316.74V183.26A107.87,107.87,0,0,1,183.26,75.52H316.74A107.87,107.87,0,0,1,424.48,183.26Z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/instagram-icon.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/instagram-icon.vue"]]);
}


// --------------------
// Request: /components/twitter-icon.vue
// Parents: 
// - /components/Footer.vue ($id_f3d8f325)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_635e52bf = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


    const _sfc_main = {
        props:{
            className:{
                type:String,
                required:false,
                default:"h-6 w-6 transition-all duration-300"
            }
        }
    }

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    class: [$props.className, "fill-gray-600 hover:fill-dark"],
    style: {"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},
    version: "1.1",
    viewBox: "0 0 512 512",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:serif": "http://www.serif.com/",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-253.927,424.544c135.939,0 210.268,-112.643 210.268,-210.268c0,-3.218 0,-6.437 -0.153,-9.502c14.406,-10.421 26.973,-23.448 36.935,-38.314c-13.18,5.824 -27.433,9.809 -42.452,11.648c15.326,-9.196 26.973,-23.602 32.49,-40.92c-14.252,8.429 -30.038,14.56 -46.896,17.931c-13.487,-14.406 -32.644,-23.295 -53.946,-23.295c-40.767,0 -73.87,33.104 -73.87,73.87c0,5.824 0.613,11.494 1.992,16.858c-61.456,-3.065 -115.862,-32.49 -152.337,-77.241c-6.284,10.881 -9.962,23.601 -9.962,37.088c0,25.594 13.027,48.276 32.95,61.456c-12.107,-0.307 -23.448,-3.678 -33.41,-9.196l0,0.92c0,35.862 25.441,65.594 59.311,72.49c-6.13,1.686 -12.72,2.606 -19.464,2.606c-4.751,0 -9.348,-0.46 -13.946,-1.38c9.349,29.426 36.628,50.728 68.965,51.341c-25.287,19.771 -57.164,31.571 -91.8,31.571c-5.977,0 -11.801,-0.306 -17.625,-1.073c32.337,21.15 71.264,33.41 112.95,33.41Z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/twitter-icon.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/twitter-icon.vue"]]);
}


// --------------------
// Request: /components/facebook-icon.vue
// Parents: 
// - /components/Footer.vue ($id_f3d8f325)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5ac52ef2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


    const _sfc_main = {
        props:{
            className:{
                type:String,
                required:false,
                default:"h-6 w-6 transition-all duration-300"
            }
        }
    }

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    class: [$props.className, "fill-gray-600 hover:fill-dark"],
    style: {"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},
    version: "1.1",
    viewBox: "0 0 512 512",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:serif": "http://www.serif.com/",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/facebook-icon.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/facebook-icon.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/index.vue ($id_cca58e97)
// - /pages/templates/[group]/[section]-[id].vue ($id_42acd7e4)
// - /pages/templates/index.vue ($id_83001a7f)
// --------------------
const $id_2bd3b053 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
  {
    "name": "index",
    "path": "/",
    "file": "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/pages/index.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    "name": "templates-group-section-id",
    "path": "/templates/:group/:section-:id",
    "file": "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/pages/templates/[group]/[section]-[id].vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/templates/[group]/[section]-[id].vue')
  },
  {
    "name": "templates",
    "path": "/templates",
    "file": "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/pages/templates/index.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/templates/index.vue')
  }
];
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/routes.mjs ($id_2bd3b053)
// Dependencies: 
// - /components/header-index.vue ($id_265d4565)
// - /components/services.vue ($id_0fea1836)
// - /components/example.vue ($id_b9253967)
// - /components/get-started.vue ($id_645fb6af)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/header-index.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/services.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/example.vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/get-started.vue");

const _sfc_main = {}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_header_index = __vite_ssr_import_0__.default
  const _component_services = __vite_ssr_import_1__.default
  const _component_example = __vite_ssr_import_2__.default
  const _component_get_started = __vite_ssr_import_3__.default

  _push(`<!--[-->`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_header_index, { class: "mt-2 md:mt-16" }, null, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_services, { class: "mt-2 md:mt-16" }, null, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_example, { class: "mt-16" }, null, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_get_started, { class: "my-8" }, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/pages/index.vue"]]);
}


// --------------------
// Request: /components/header-index.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/images/header-bg.jpg ($id_dcd7c19c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_265d4565 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/images/header-bg.jpg");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __vite_ssr_import_1__.resolveComponent("nuxt-link")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "w-full h-[50vh]" }, _attrs))}><div class="w-full h-full flex justify-around items-center"><div class="w-full p-2 md:p-0 md:w-2/5 flex justify-center items-center text-center flex-col space-y-6"><h1 class="text-dark text-5xl tracking-wide font-black"> Code quickly and reliably with <span class="text-jean">Helpers</span>. </h1><p class="text-lg text-gray-500"> Create a project and help you with our various tools and templates. </p><a href="#" class="bg-jean/10 text-jean w-2/3 block cursor-pointer px-8 py-4 rounded-lg font-semibold tracking-wider shadow-sm hover:border-transparent hover:text-white hover:bg-jean hover:shadow-jean/30 transition-all duration-300"> See our latest creation </a>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    to: "/templates",
    class: "bg-jean w-2/3 block cursor-pointer px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95 transition-all duration-300"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Get started `)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" Get started ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="hidden md:flex md:w-3/5 justify-center items-center"><img${__vite_ssr_import_2__.ssrRenderAttr("src", __vite_ssr_import_3__.default)} alt="header-bg.jpg"></div></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/header-index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/header-index.vue"]]);
}


// --------------------
// Request: /assets/images/header-bg.jpg
// Parents: 
// - /components/header-index.vue ($id_265d4565)
// Dependencies: 

// --------------------
const $id_dcd7c19c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/header-bg.jpg";
}


// --------------------
// Request: /components/services.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0fea1836 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full overflow-hidden" }, _attrs))
  }><div class="flex flex-wrap justify-evenly items-center"><div class="w-72 h-60 flex justify-center items-center group p-4 shsmow-md relative afficher"><div class="flex flex-col justify-center items-center space-y-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-slate-900" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg><h1 class="text-xl text-jean font-bold capitalize tracking-wider">Templates</h1><p class="text-md text-gray-400"> helpers is about <span class="text-dark font-bold">300 templates</span> for you. </p></div><a class="absolute h-full w-full opacity-0 -translate-y-full scale-0 group-hover:scale-100 group-hover:-translate-y-0 bg-jean group-hover:opacity-100 group-hover:h-full transition-all duration-300 ease-in-out text-white rounded-lg text-3xl flex justify-center items-center uppercase p-2 text-center tracking-wide" href="#"><span class="translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-100"> use now for free </span></a></div><div class="w-72 h-60 group flex justify-center items-center p-4 shadow-sm relative"><div class="flex flex-col justify-center items-center space-y-4 text-center"><svg enable-background="new 0 0 50 50" class="h-10 w-10 fill-slate-900 stroke-dark" id="Layer_1" version="1.1" viewBox="0 0 50 50" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" stroke="none" height="50" width="50"></rect><path d="  M45,17.388c0-1.513-0.932-2.115-2.051-2.448c0,0-7.561,0.748-10.251,1.061c-2.122,0.246-3.235-1.375-1.565-4.035  c1.115-1.777,1.565-2.438,1.565-3.965c0-3.314-2.753-6-6.15-6c-3.398,0-6.151,2.686-6.151,6c0,1.504,0.522,2.533,1.538,3.969  c1.922,2.719,0.769,4.188-1.538,4.031c-2.525-0.171-10.251-1.061-10.251-1.061c-1.346-0.221-1.89,0.904-2.05,2.385  c0,0-0.417,1.713-1.069,10.383c-0.052,0.199-0.005,0.422,0.012,0.512c0.353,1.812,2.23,0.688,4.169-0.688  C12.456,26.646,13.764,26,15.308,26c3.398,0,6.151,2.686,6.151,6s-2.753,6-6.151,6c-1.633,0-2.764-0.508-4.209-1.645  c-1.446-1.137-3.42-2.387-3.997-0.98c-0.102,0.25-0.128,0.75-0.076,1.072c0.599,6.24,0.836,6.537,1.069,7.553s0.918,2,2.05,2h32.035  C44.007,46,45,44.906,45,43.25C45,42.375,45,18.9,45,17.388z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path></svg><h1 class="text-xl text-jean font-bold capitalize tracking-wider">Plugins</h1><p class="text-md text-gray-400"> helpers offers you a <span class="text-dark font-bold">detailed explanation</span> on the use of vuejs plugins. </p></div><a class="absolute h-full w-full translate-y-full scale-0 opacity-0 bg-jean group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:h-full transition-all duration-300 ease-in-out text-white rounded-lg text-3xl flex justify-center items-center uppercase p-2 text-center tracking-wide" href="#"><span class="-translate-y-full scale-0 group-hover:-translate-y-0 group-hover:scale-100 transition-all ease-in-out duration-100"> use now for free </span></a></div><div class="w-72 h-60 group flex justify-center items-center p-4 shadow-sm relative"><div class="flex flex-col justify-center items-center space-y-4 text-center"><svg class="h-10 w-10 fill-slate-900 stroke-dark" id="Layer_1" style="${
    __vite_ssr_import_1__.ssrRenderStyle({"enable-background":"new 0 0 128 128"})
  }" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M117.488,78.948l-10.427-7.741c0.026-0.158,0.045-0.317,0.07-0.476  c0.011-0.065,0.019-0.131,0.029-0.195c0.102-0.675,0.188-1.349,0.257-2.024c0.004-0.036,0.007-0.07,0.011-0.106  c0.071-0.704,0.125-1.409,0.16-2.114c0.003-0.03,0.004-0.062,0.005-0.092c0.034-0.698,0.053-1.396,0.054-2.094  c0-0.035,0.002-0.07,0.002-0.105c0-0.039-0.002-0.078-0.002-0.117c0-0.152,0.003-0.306,0.001-0.458c-0.001-0.028,0-0.056,0-0.085  c-0.005-0.304-0.018-0.606-0.029-0.91c-0.008-0.188-0.017-0.374-0.026-0.561c-0.02-0.372-0.034-0.744-0.062-1.115  c-0.004-0.038-0.009-0.077-0.011-0.115c-0.009-0.109-0.02-0.219-0.027-0.327c-0.017-0.197-0.04-0.394-0.059-0.591  c-0.005-0.043-0.009-0.086-0.013-0.128c-0.003-0.024-0.005-0.05-0.008-0.074c-0.011-0.099-0.019-0.199-0.029-0.298  c-0.014-0.123-0.021-0.246-0.036-0.368c-0.008-0.064-0.018-0.127-0.024-0.19c-0.009-0.069-0.021-0.14-0.03-0.209  c-0.063-0.507-0.134-1.012-0.216-1.514c-0.007-0.044-0.01-0.088-0.017-0.132l10.441-7.752c2.478-1.43,3.326-4.597,1.896-7.074  l-8.631-14.949c-1.43-2.477-4.598-3.325-7.074-1.895l-11.936,5.167c-0.066-0.055-0.138-0.102-0.204-0.155  c-0.031-0.025-0.061-0.05-0.092-0.075c-0.154-0.125-0.313-0.245-0.47-0.368c-0.171-0.135-0.341-0.268-0.513-0.398  c-0.141-0.107-0.283-0.211-0.424-0.316c-0.065-0.05-0.133-0.099-0.199-0.148c-0.116-0.085-0.229-0.174-0.346-0.258  c-0.064-0.047-0.128-0.093-0.193-0.14c-0.162-0.115-0.326-0.226-0.49-0.339c-0.041-0.028-0.082-0.058-0.124-0.086  c-0.071-0.049-0.143-0.098-0.214-0.146c-0.239-0.163-0.479-0.323-0.721-0.481c-0.027-0.017-0.055-0.034-0.082-0.052  c-0.396-0.256-0.794-0.508-1.198-0.751c-0.103-0.062-0.206-0.12-0.31-0.181c-0.868-0.513-1.752-0.999-2.656-1.451  c-0.018-0.009-0.034-0.017-0.053-0.025c-1.171-0.585-2.373-1.117-3.602-1.598c-0.034-0.013-0.068-0.026-0.102-0.04  c-0.157-0.061-0.313-0.127-0.47-0.187l-1.493-12.922c0.001-2.86-2.317-5.179-5.178-5.179H55.365c-2.86,0-5.178,2.318-5.178,5.179  l-1.493,12.922c-0.07,0.026-0.137,0.056-0.207,0.082c-0.081,0.031-0.163,0.064-0.244,0.097c-0.477,0.185-0.949,0.376-1.417,0.577  c-0.084,0.035-0.168,0.074-0.251,0.11c-0.424,0.185-0.846,0.375-1.264,0.572c-0.044,0.021-0.088,0.043-0.132,0.064  c-0.055,0.026-0.11,0.051-0.165,0.077c-0.153,0.074-0.305,0.15-0.457,0.226c-0.351,0.175-0.698,0.355-1.043,0.54  c-0.25,0.133-0.502,0.264-0.751,0.401c-0.157,0.088-0.311,0.182-0.467,0.271c-0.012,0.006-0.024,0.014-0.036,0.021  c-0.029,0.017-0.06,0.029-0.088,0.046c-0.051,0.029-0.098,0.063-0.148,0.091c-0.565,0.328-1.122,0.669-1.672,1.023  c-0.063,0.04-0.125,0.08-0.187,0.121c-0.063,0.041-0.128,0.082-0.192,0.123c-0.018,0.013-0.037,0.023-0.054,0.035  c-0.47,0.311-0.933,0.632-1.392,0.961c-0.064,0.046-0.129,0.092-0.193,0.139c-0.513,0.372-1.019,0.757-1.517,1.152  c-0.086,0.068-0.173,0.137-0.258,0.206c-0.109,0.089-0.221,0.172-0.329,0.262l-11.92-5.16c-2.477-1.43-5.645-0.581-7.075,1.896  L8.602,41.99c-1.431,2.479-0.581,5.646,1.895,7.076l10.429,7.742c-0.021,0.125-0.036,0.251-0.056,0.376  c-0.022,0.143-0.043,0.285-0.063,0.428c-0.087,0.594-0.164,1.187-0.227,1.78c-0.012,0.117-0.023,0.233-0.035,0.351  c-0.052,0.531-0.096,1.063-0.128,1.594c-0.002,0.041-0.004,0.083-0.006,0.124c-0.003,0.045-0.004,0.09-0.007,0.135  c-0.007,0.117-0.012,0.235-0.018,0.353c-0.028,0.605-0.043,1.211-0.045,1.815c-0.001,0.085-0.007,0.167-0.007,0.252  c0,0.092,0.005,0.185,0.005,0.277c0,0.067-0.001,0.135,0,0.202c0,0.073-0.002,0.146,0,0.22c0.004,0.247,0.015,0.495,0.024,0.742  c0.01,0.321,0.027,0.641,0.044,0.96c0.015,0.269,0.026,0.537,0.046,0.805c0.003,0.038,0.006,0.077,0.008,0.115  c0.01,0.133,0.022,0.266,0.033,0.397c0.014,0.171,0.034,0.341,0.05,0.511c0.037,0.385,0.074,0.769,0.121,1.15  c0,0.005,0.002,0.011,0.002,0.016c0.07,0.569,0.151,1.135,0.244,1.698c0.005,0.032,0.007,0.065,0.013,0.099L10.498,78.95  c-2.478,1.43-3.326,4.597-1.895,7.073l8.63,14.949c1.43,2.478,4.598,3.326,7.074,1.896l11.918-5.156  c0.082,0.068,0.169,0.125,0.251,0.191c0.014,0.013,0.03,0.022,0.044,0.033c0,0.002,0.002,0.002,0.002,0.003  c0.128,0.104,0.26,0.204,0.39,0.307c0.204,0.161,0.408,0.322,0.615,0.479c0.12,0.092,0.241,0.18,0.362,0.271  c0.159,0.118,0.317,0.238,0.478,0.355c0.018,0.013,0.034,0.025,0.051,0.039c0.076,0.055,0.15,0.11,0.227,0.164  c0.185,0.132,0.374,0.259,0.561,0.387c0.016,0.013,0.033,0.023,0.049,0.033c0.074,0.052,0.147,0.103,0.221,0.152  c0.655,0.446,1.321,0.877,2.002,1.287c0.119,0.071,0.238,0.14,0.357,0.208c0.853,0.504,1.723,0.981,2.612,1.428  c0.03,0.016,0.061,0.029,0.091,0.045c1.346,0.67,2.729,1.28,4.149,1.812l1.492,12.904c0,2.859,2.318,5.179,5.179,5.179l17.261,0.001  c2.859-0.001,5.179-2.318,5.179-5.18l1.493-12.906c0.073-0.027,0.143-0.058,0.216-0.085c0.072-0.027,0.144-0.058,0.215-0.086  c0.481-0.186,0.959-0.379,1.432-0.581c0.093-0.039,0.185-0.082,0.277-0.122c0.422-0.185,0.842-0.373,1.256-0.569  c0.039-0.02,0.079-0.039,0.118-0.059c0.003-0.001,0.007-0.003,0.011-0.005c0.044-0.021,0.09-0.04,0.134-0.063  c0.163-0.079,0.326-0.159,0.487-0.24c0.345-0.171,0.685-0.349,1.023-0.529c0.258-0.137,0.516-0.27,0.771-0.411  c0.13-0.072,0.258-0.15,0.387-0.225c0.043-0.024,0.087-0.051,0.13-0.076c0.022-0.012,0.045-0.021,0.066-0.034  c0.038-0.021,0.073-0.046,0.111-0.067c0.588-0.341,1.169-0.696,1.741-1.065c0.042-0.027,0.083-0.055,0.125-0.08  c0.089-0.059,0.179-0.114,0.267-0.173c0.483-0.318,0.961-0.649,1.433-0.988c0.047-0.033,0.092-0.066,0.138-0.101  c0.531-0.385,1.056-0.782,1.57-1.192c0.07-0.055,0.141-0.11,0.209-0.165c0.116-0.096,0.236-0.186,0.352-0.281l11.92,5.159  c2.478,1.431,5.645,0.581,7.074-1.896l8.631-14.948C120.813,83.545,119.965,80.378,117.488,78.948z M64,82.013  c-9.948,0-18.013-8.064-18.013-18.013S54.052,45.986,64,45.986S82.014,54.052,82.014,64S73.948,82.013,64,82.013z"></path></svg><h1 class="text-xl text-jean font-bold capitalize tracking-wider">Functionality</h1><p class="text-md text-gray-400"> helpers offers you a detailed explanation on the <span class="text-dark font-bold">execution</span> of your <span class="text-dark font-bold">different actions</span>. </p></div><a class="absolute h-full w-full opacity-0 -translate-y-full scale-0 group-hover:scale-100 group-hover:-translate-y-0 bg-jean group-hover:opacity-100 group-hover:h-full transition-all duration-300 ease-in-out text-white rounded-lg text-3xl flex justify-center items-center uppercase p-2 text-center tracking-wide" href="#"><span class="translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-100"> use now for free </span></a></div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/services.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/services.vue"]]);
}


// --------------------
// Request: /components/example.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/images/bureau.png ($id_68a17cc4)
// - /assets/images/ajust.png ($id_0362fbec)
// - /assets/images/rename.png ($id_2ddbc618)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b9253967 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/images/bureau.png");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/images/ajust.png");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/images/rename.png");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __vite_ssr_import_1__.resolveComponent("nuxt-link")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "w-full overflow-hidden space-y-8 md:space-y-0 p-4 md:p-0" }, _attrs))}><div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8"><div class="col md:col flex flex-col justify-center space-y-4 items-center text-center"><h1 class="text-3xl font-black text-dark">Template</h1><p class="text-gray-400 text-md p-2 md:px-16"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab at cupiditate! Fuga autem consectetur placeat aspernatur sapiente magni, quisquam sint exercitationem aliquid velit facilis ex explicabo nulla? Alias necessitatibus totam quaerat iusto minus at sunt optio ab fugit tenetur. </p>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    to: "/templates",
    class: "bg-jean flex cursor-pointer justify-evenly items-center px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95 transition-all duration-300"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<span${
          _scopeId
        }>Go to Templates</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white ml-4" viewBox="0 0 24 24" stroke="currentColor"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${
          _scopeId
        }></path></svg>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("span", null, "Go to Templates"),
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6 fill-white ml-4",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M14 5l7 7m0 0l-7 7m7-7H3"
            })
          ]))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="hidden md:col md:block"><img${
    __vite_ssr_import_2__.ssrRenderAttr("src", __vite_ssr_import_3__.default)
  } alt="bureau.png" class="[clip-path:cicle(70%_at_20%_30%)]"></div></div><div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8"><div class="hidden md:col md:block"><img${
    __vite_ssr_import_2__.ssrRenderAttr("src", __vite_ssr_import_4__.default)
  } alt="bureau.png" class="[clip-path:cicle(70%_at_20%_30%)]"></div><div class="col md:col flex flex-col justify-center space-y-4 items-center text-center"><h1 class="text-3xl font-black text-dark">Plugins</h1><p class="text-gray-400 text-md p-2 md:px-16"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit nesciunt esse placeat culpa laboriosam molestias incidunt atque dolorum delectus distinctio, nostrum eum natus dolores officiis sequi quisquam hic modi, minima quod amet dicta quae! Minima quidem totam officia fuga! </p>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "bg-jean flex cursor-pointer justify-evenly items-center px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95 transition-all duration-300"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<span${
          _scopeId
        }>Go to plugins</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white ml-4" viewBox="0 0 24 24" stroke="currentColor"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${
          _scopeId
        }></path></svg>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("span", null, "Go to plugins"),
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6 fill-white ml-4",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M14 5l7 7m0 0l-7 7m7-7H3"
            })
          ]))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8"><div class="col md:col flex flex-col justify-center space-y-4 items-center text-center"><h1 class="text-3xl font-black text-dark">Functionality</h1><p class="text-gray-400 text-md p-2 md:px-16"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates repudiandae facilis nostrum cupiditate dolorem deserunt natus dolorum reprehenderit est, delectus laborum nisi aliquam, hic odio assumenda veniam consequatur repellendus sequi autem nemo ipsa? Earum iure et dolorum consectetur sit facere! </p>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    to: "#",
    class: "bg-jean flex cursor-pointer justify-evenly items-center px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95 transition-all duration-300"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<span${
          _scopeId
        }>Go to Functionality</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white ml-4" viewBox="0 0 24 24" stroke="currentColor"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${
          _scopeId
        }></path></svg>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("span", null, "Go to Functionality"),
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6 fill-white ml-4",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M14 5l7 7m0 0l-7 7m7-7H3"
            })
          ]))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="hidden md:col md:block"><img${__vite_ssr_import_2__.ssrRenderAttr("src", __vite_ssr_import_5__.default)} alt="rename.png" class="object-cover [clip-path:cicle(70%_at_20%_30%)]"></div></div></div>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/example.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/example.vue"]]);
}


// --------------------
// Request: /assets/images/bureau.png
// Parents: 
// - /components/example.vue ($id_b9253967)
// Dependencies: 

// --------------------
const $id_68a17cc4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/bureau.png";
}


// --------------------
// Request: /assets/images/ajust.png
// Parents: 
// - /components/example.vue ($id_b9253967)
// Dependencies: 

// --------------------
const $id_0362fbec = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/ajust.png";
}


// --------------------
// Request: /assets/images/rename.png
// Parents: 
// - /components/example.vue ($id_b9253967)
// Dependencies: 

// --------------------
const $id_2ddbc618 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/rename.png";
}


// --------------------
// Request: /components/get-started.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_645fb6af = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "p-8 md:p-0 w-full overflow-hidden" }, _attrs))}><div class="flex justify-end items-end text-center"><a href="#" class="bg-jean flex cursor-pointer justify-evenly items-center px-8 py-4 text-white rounded-lg font-semibold tracking-wider shadow-lg shadow-jean/30 hover:scale-95 transition-all duration-300"><span>Get started</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white ml-4" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/get-started.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/get-started.vue"]]);
}


// --------------------
// Request: /pages/templates/[group]/[section]-[id].vue
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/routes.mjs ($id_2bd3b053)
// Dependencies: 
// - /components/content.vue ($id_3032adb6)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_42acd7e4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/content.vue");


const _sfc_main = {

}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_content = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "w-full my-16 space-y-1" }, _attrs))
  }><div class="text-gray-400 text-sm"><a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-400 font-bold hover:text-dark transition-all duration-200"${
    __vite_ssr_import_2__.ssrRenderAttr("href", '/templates#'+_ctx.$route.params.group)
  }>${
    __vite_ssr_import_2__.ssrInterpolate(_ctx.$route.params.group)
  }</a> &gt; <a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-400 font-bold hover:text-dark transition-all duration-200"${
    __vite_ssr_import_2__.ssrRenderAttr("href", '/templates#'+_ctx.$route.params.section.toString().replace(' ',''))
  }>${
    __vite_ssr_import_2__.ssrInterpolate(_ctx.$route.params.section.toString())
  }</a></div><h1 class="hidden p-2 lg:py-2 lg:px-4 md:inline-block text-2xl font-black tracking-wide text-dark capitalize">${
    __vite_ssr_import_2__.ssrInterpolate(_ctx.$route.params.id)
  }</h1>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_content, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/templates/[group]/[section]-[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/pages/templates/[group]/[section]-[id].vue"]]);
}


// --------------------
// Request: /components/content.vue
// Parents: 
// - /pages/templates/[group]/[section]-[id].vue ($id_42acd7e4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-prism-editor/dist/prismeditor.esm.js ($id_e506e72f)
// - /node_modules/vue-prism-editor/dist/prismeditor.min.css ($id_209a256d)
// - /node_modules/prismjs/prism.js ($id_e07646f6)
// - /node_modules/prismjs/components/prism-clike.js ($id_b75c5470)
// - /node_modules/prismjs/components/prism-javascript.js ($id_bdb60b25)
// - /node_modules/prismjs/themes/prism-editor.css ($id_494b41e7)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/content.vue?vue&type=style&index=0&scoped=true&lang.css ($id_8fdbd1fd)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3032adb6 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-prism-editor/dist/prismeditor.esm.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue-prism-editor/dist/prismeditor.min.css");
 
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/prismjs/prism.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/prismjs/components/prism-clike.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/prismjs/components/prism-javascript.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/prismjs/themes/prism-editor.css");

const _sfc_main = {
    data: () => ({
        code: 'console.log("Hello World")',
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
            copy.value = this.$refs.editor.$el.outerHTML
            document.body.appendChild(copy)
            copy.focus()
            copy.select()
            document.execCommand("copy")
            document.body.removeChild(copy)
        },
        highlighter(code) {
            return __vite_ssr_import_3__.default.highlight(code, __vite_ssr_import_3__.default.languages.html, "html"); // languages.<insert language> to return html with markup
        },
    },
      components: {
    PrismEditor: __vite_ssr_import_1__.PrismEditor
  },
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_prism_editor = __vite_ssr_import_7__.resolveComponent("prism-editor")

  _push(`<div${
    __vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "w-full px-2" }, _attrs))
  } data-v-7a4a808e><div class="flex justify-between items-center" data-v-7a4a808e><h1 class="text-sm font-bold text-gray-500 uppercase" data-v-7a4a808e>Lorem ipsum dolor sit.</h1><nav class="flex justify-between items-center space-x-2" data-v-7a4a808e><button class="text-sm font-medium text-gray-600 flex items-center border-2 border-gray-200 rounded-lg px-2 py-1 space-x-1 hover:scale-95 transition-all duration-300" data-v-7a4a808e><svg xmlns="http://www.w3.org/2000/svg" class="${
    __vite_ssr_import_8__.ssrRenderClass([_ctx.state ==='preview' ? 'stroke-jean' : 'stroke-slate-600', "h-5 w-5"])
  }" fill="none" viewBox="0 0 24 24" data-v-7a4a808e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-7a4a808e></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-7a4a808e></path></svg><span data-v-7a4a808e>preview</span></button><button class="text-sm font-medium text-gray-600 flex items-center border-2 border-gray-200 rounded-lg px-2 py-1 space-x-1 hover:scale-95 transition-all duration-300" data-v-7a4a808e><svg xmlns="http://www.w3.org/2000/svg" class="${
    __vite_ssr_import_8__.ssrRenderClass([_ctx.state ==='code' ? 'stroke-jean' : 'stroke-slate-600', "h-5 w-5 fill-white"])
  }" viewBox="0 0 24 24" data-v-7a4a808e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-v-7a4a808e></path></svg><span data-v-7a4a808e>code</span></button><button class="text-sm font-medium relative text-gray-600 flex items-center rounded-lg px-2 py-1 space-x-1 hover:scale-95 transition-all duration-100" data-v-7a4a808e><svg xmlns="http://www.w3.org/2000/svg" class="${
    __vite_ssr_import_8__.ssrRenderClass([_ctx.isCopy ? 'stroke-jean  -rotate-[8deg]' : 'stroke-slate-600', "h-6 w-6"])
  }" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-7a4a808e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" data-v-7a4a808e></path></svg>`)
  if (_ctx.isCopy) {
    _push(`<span class="absolute inset-x-0 bottom-full mb-2.5 flex justify-center" data-v-7a4a808e><span class="bg-gray-900 text-white rounded-md text-[0.625rem] leading-4 tracking-wide font-semibold uppercase py-1 px-3 filter drop-shadow-md" data-v-7a4a808e><svg aria-hidden="true" width="16" height="6" viewBox="0 0 16 6" class="text-gray-900 absolute top-full left-1/2 -mt-px -ml-2" data-v-7a4a808e><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z" fill="currentColor" data-v-7a4a808e></path></svg> Copied! </span></span>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</button></nav></div>`)
  if (_ctx.state=='preview') {
    _push(`<div class="mt-4" data-v-7a4a808e><div data-v-7a4a808e>${_ctx.item.content}</div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<div style="${__vite_ssr_import_8__.ssrRenderStyle((_ctx.state=='code') ? null : { display: "none" })}" class="rounded-lg mt-4" data-v-7a4a808e>`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_prism_editor, {
    ref: "editor",
    class: "my-editor bg-bleuTherne overflow-scroll rounded-lg",
    modelValue: _ctx.item.content,
    "onUpdate:modelValue": $event => ((_ctx.item.content) = $event),
    readonly: "",
    highlight: $options.highlighter
  }, null, _parent))
  _push(`</div></div>`)
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("/components/content.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/content.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-7a4a808e"],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/content.vue"]]);
}


// --------------------
// Request: /node_modules/vue-prism-editor/dist/prismeditor.esm.js
// Parents: 
// - /components/content.vue ($id_3032adb6)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_e506e72f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var KEYCODE_ENTER = 13;
var KEYCODE_TAB = 9;
var KEYCODE_BACKSPACE = 8;
var KEYCODE_Y = 89;
var KEYCODE_Z = 90;
var KEYCODE_M = 77;
var KEYCODE_PARENS = 57;
var KEYCODE_BRACKETS = 219;
var KEYCODE_QUOTE = 222;
var KEYCODE_BACK_QUOTE = 192;
var KEYCODE_ESCAPE = 27;
var HISTORY_LIMIT = 100;
var HISTORY_TIME_GAP = 3000;
var isWindows = "undefined" !== 'undefined' && navigator && /*#__PURE__*/ /Win/i.test(navigator.platform);
var isMacLike = "undefined" !== 'undefined' && navigator && /*#__PURE__*/ /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
var PrismEditor = /*#__PURE__*/__vite_ssr_import_0__.defineComponent({
  props: {
    lineNumbers: {
      type: Boolean,
      "default": false
    },
    autoStyleLineNumbers: {
      type: Boolean,
      "default": true
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    modelValue: {
      type: String,
      "default": ''
    },
    highlight: {
      type: Function,
      required: true
    },
    tabSize: {
      type: Number,
      "default": 2
    },
    insertSpaces: {
      type: Boolean,
      "default": true
    },
    ignoreTabKey: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      capture: true,
      history: {
        stack: [],
        offset: -1
      },
      lineNumbersHeight: '20px',
      codeData: ''
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function handler(newVal) {
        if (!newVal) {
          this.codeData = '';
        } else {
          this.codeData = newVal;
        }
      }
    },
    content: {
      immediate: true,
      handler: function handler() {
        var _this = this;

        if (this.lineNumbers) {
          this.$nextTick(function () {
            _this.setLineNumbersHeight();
          });
        }
      }
    },
    lineNumbers: function lineNumbers() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.styleLineNumbers();

        _this2.setLineNumbersHeight();
      });
    }
  },
  computed: {
    isEmpty: function isEmpty() {
      return this.codeData.length === 0;
    },
    content: function content() {
      var result = this.highlight(this.codeData) + '<br />'; // todo: VNode support?

      return result;
    },
    lineNumbersCount: function lineNumbersCount() {
      var totalLines = this.codeData.split(/\r\n|\n/).length;
      return totalLines;
    }
  },
  mounted: function mounted() {
    this._recordCurrentState();

    this.styleLineNumbers();
  },
  methods: {
    setLineNumbersHeight: function setLineNumbersHeight() {
      this.lineNumbersHeight = getComputedStyle(this.$refs.pre).height;
    },
    styleLineNumbers: function styleLineNumbers() {
      if (!this.lineNumbers || !this.autoStyleLineNumbers) return;
      var $editor = this.$refs.pre;
      var $lineNumbers = this.$el.querySelector('.prism-editor__line-numbers');
      var editorStyles = window.getComputedStyle($editor);
      this.$nextTick(function () {
        var btlr = 'border-top-left-radius';
        var bblr = 'border-bottom-left-radius';
        if (!$lineNumbers) return;
        $lineNumbers.style[btlr] = editorStyles[btlr];
        $lineNumbers.style[bblr] = editorStyles[bblr];
        $editor.style[btlr] = '0';
        $editor.style[bblr] = '0';
        var stylesList = ['background-color', 'margin-top', 'padding-top', 'font-family', 'font-size', 'line-height'];
        stylesList.forEach(function (style) {
          $lineNumbers.style[style] = editorStyles[style];
        });
        $lineNumbers.style['margin-bottom'] = '-' + editorStyles['padding-top'];
      });
    },
    _recordCurrentState: function _recordCurrentState() {
      var input = this.$refs.textarea;
      if (!input) return; // Save current state of the input

      var value = input.value,
          selectionStart = input.selectionStart,
          selectionEnd = input.selectionEnd;

      this._recordChange({
        value: value,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      });
    },
    _getLines: function _getLines(text, position) {
      return text.substring(0, position).split('\n');
    },
    _applyEdits: function _applyEdits(record) {
      // Save last selection state
      var input = this.$refs.textarea;
      var last = this.history.stack[this.history.offset];

      if (last && input) {
        this.history.stack[this.history.offset] = _extends({}, last, {
          selectionStart: input.selectionStart,
          selectionEnd: input.selectionEnd
        });
      } // Save the changes


      this._recordChange(record);

      this._updateInput(record);
    },
    _recordChange: function _recordChange(record, overwrite) {
      if (overwrite === void 0) {
        overwrite = false;
      }

      var _this$history = this.history,
          stack = _this$history.stack,
          offset = _this$history.offset;

      if (stack.length && offset > -1) {
        // When something updates, drop the redo operations
        this.history.stack = stack.slice(0, offset + 1); // Limit the number of operations to 100

        var count = this.history.stack.length;

        if (count > HISTORY_LIMIT) {
          var extras = count - HISTORY_LIMIT;
          this.history.stack = stack.slice(extras, count);
          this.history.offset = Math.max(this.history.offset - extras, 0);
        }
      }

      var timestamp = Date.now();

      if (overwrite) {
        var last = this.history.stack[this.history.offset];

        if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
          var _this$_getLines$pop, _this$_getLines$pop2;

          // A previous entry exists and was in short interval
          // Match the last word in the line
          var re = /[^a-z0-9]([a-z0-9]+)$/i; // Get the previous line

          var previous = (_this$_getLines$pop = this._getLines(last.value, last.selectionStart).pop()) === null || _this$_getLines$pop === void 0 ? void 0 : _this$_getLines$pop.match(re); // Get the current line

          var current = (_this$_getLines$pop2 = this._getLines(record.value, record.selectionStart).pop()) === null || _this$_getLines$pop2 === void 0 ? void 0 : _this$_getLines$pop2.match(re);

          if (previous && current && current[1].startsWith(previous[1])) {
            // The last word of the previous line and current line match
            // Overwrite previous entry so that undo will remove whole word
            this.history.stack[this.history.offset] = _extends({}, record, {
              timestamp: timestamp
            });
            return;
          }
        }
      } // Add the new operation to the stack


      this.history.stack.push(_extends({}, record, {
        timestamp: timestamp
      }));
      this.history.offset++;
    },
    _updateInput: function _updateInput(record) {
      var input = this.$refs.textarea;
      if (!input) return; // Update values and selection state

      input.value = record.value;
      input.selectionStart = record.selectionStart;
      input.selectionEnd = record.selectionEnd;
      this.$emit('update:modelValue', record.value); // this.props.onValueChange(record.value);
    },
    handleChange: function handleChange(e) {
      var _e$target = e.target,
          value = _e$target.value,
          selectionStart = _e$target.selectionStart,
          selectionEnd = _e$target.selectionEnd;

      this._recordChange({
        value: value,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      }, true);

      this.$emit('update:modelValue', value); // this.props.onValueChange(value);
    },
    _undoEdit: function _undoEdit() {
      var _this$history2 = this.history,
          stack = _this$history2.stack,
          offset = _this$history2.offset; // Get the previous edit

      var record = stack[offset - 1];

      if (record) {
        // Apply the changes and update the offset
        this._updateInput(record);

        this.history.offset = Math.max(offset - 1, 0);
      }
    },
    _redoEdit: function _redoEdit() {
      var _this$history3 = this.history,
          stack = _this$history3.stack,
          offset = _this$history3.offset; // Get the next edit

      var record = stack[offset + 1];

      if (record) {
        // Apply the changes and update the offset
        this._updateInput(record);

        this.history.offset = Math.min(offset + 1, stack.length - 1);
      }
    },
    handleKeyDown: function handleKeyDown(e) {
      // console.log(navigator.platform);
      var tabSize = this.tabSize,
          insertSpaces = this.insertSpaces,
          ignoreTabKey = this.ignoreTabKey; // onKeyDown(e);

      this.$emit('keydown', e);

      if (e.defaultPrevented) {
        return;
      }

      if (e.keyCode === KEYCODE_ESCAPE) {
        e.target.blur();
        this.$emit('blur', e);
      }

      var _e$target2 = e.target,
          value = _e$target2.value,
          selectionStart = _e$target2.selectionStart,
          selectionEnd = _e$target2.selectionEnd;
      var tabCharacter = (insertSpaces ? ' ' : '\t').repeat(tabSize);

      if (e.keyCode === KEYCODE_TAB && !ignoreTabKey && this.capture) {
        // Prevent focus change
        e.preventDefault();

        if (e.shiftKey) {
          // Unindent selected lines
          var linesBeforeCaret = this._getLines(value, selectionStart);

          var startLine = linesBeforeCaret.length - 1;
          var endLine = this._getLines(value, selectionEnd).length - 1;
          var nextValue = value.split('\n').map(function (line, i) {
            if (i >= startLine && i <= endLine && line.startsWith(tabCharacter)) {
              return line.substring(tabCharacter.length);
            }

            return line;
          }).join('\n');

          if (value !== nextValue) {
            var startLineText = linesBeforeCaret[startLine];

            this._applyEdits({
              value: nextValue,
              // Move the start cursor if first line in selection was modified
              // It was modified only if it started with a tab
              selectionStart: startLineText.startsWith(tabCharacter) ? selectionStart - tabCharacter.length : selectionStart,
              // Move the end cursor by total number of characters removed
              selectionEnd: selectionEnd - (value.length - nextValue.length)
            });
          }
        } else if (selectionStart !== selectionEnd) {
          // Indent selected lines
          var _linesBeforeCaret = this._getLines(value, selectionStart);

          var _startLine = _linesBeforeCaret.length - 1;

          var _endLine = this._getLines(value, selectionEnd).length - 1;

          var _startLineText = _linesBeforeCaret[_startLine];

          this._applyEdits({
            value: value.split('\n').map(function (line, i) {
              if (i >= _startLine && i <= _endLine) {
                return tabCharacter + line;
              }

              return line;
            }).join('\n'),
            // Move the start cursor by number of characters added in first line of selection
            // Don't move it if it there was no text before cursor
            selectionStart: /\S/.test(_startLineText) ? selectionStart + tabCharacter.length : selectionStart,
            // Move the end cursor by total number of characters added
            selectionEnd: selectionEnd + tabCharacter.length * (_endLine - _startLine + 1)
          });
        } else {
          var updatedSelection = selectionStart + tabCharacter.length;

          this._applyEdits({
            // Insert tab character at caret
            value: value.substring(0, selectionStart) + tabCharacter + value.substring(selectionEnd),
            // Update caret position
            selectionStart: updatedSelection,
            selectionEnd: updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_BACKSPACE) {
        var hasSelection = selectionStart !== selectionEnd;
        var textBeforeCaret = value.substring(0, selectionStart);

        if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
          // Prevent default delete behaviour
          e.preventDefault();

          var _updatedSelection = selectionStart - tabCharacter.length;

          this._applyEdits({
            // Remove tab character at caret
            value: value.substring(0, selectionStart - tabCharacter.length) + value.substring(selectionEnd),
            // Update caret position
            selectionStart: _updatedSelection,
            selectionEnd: _updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_ENTER) {
        // Ignore selections
        if (selectionStart === selectionEnd) {
          // Get the current line
          var line = this._getLines(value, selectionStart).pop();

          var matches = line === null || line === void 0 ? void 0 : line.match(/^\s+/);

          if (matches && matches[0]) {
            e.preventDefault(); // Preserve indentation on inserting a new line

            var indent = '\n' + matches[0];

            var _updatedSelection2 = selectionStart + indent.length;

            this._applyEdits({
              // Insert indentation character at caret
              value: value.substring(0, selectionStart) + indent + value.substring(selectionEnd),
              // Update caret position
              selectionStart: _updatedSelection2,
              selectionEnd: _updatedSelection2
            });
          }
        }
      } else if (e.keyCode === KEYCODE_PARENS || e.keyCode === KEYCODE_BRACKETS || e.keyCode === KEYCODE_QUOTE || e.keyCode === KEYCODE_BACK_QUOTE) {
        var chars;

        if (e.keyCode === KEYCODE_PARENS && e.shiftKey) {
          chars = ['(', ')'];
        } else if (e.keyCode === KEYCODE_BRACKETS) {
          if (e.shiftKey) {
            chars = ['{', '}'];
          } else {
            chars = ['[', ']'];
          }
        } else if (e.keyCode === KEYCODE_QUOTE) {
          if (e.shiftKey) {
            chars = ['"', '"'];
          } else {
            chars = ["'", "'"];
          }
        } else if (e.keyCode === KEYCODE_BACK_QUOTE && !e.shiftKey) {
          chars = ['`', '`'];
        } // console.log(isMacLike, "navigator" in global && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
        // If text is selected, wrap them in the characters


        if (selectionStart !== selectionEnd && chars) {
          e.preventDefault();

          this._applyEdits({
            value: value.substring(0, selectionStart) + chars[0] + value.substring(selectionStart, selectionEnd) + chars[1] + value.substring(selectionEnd),
            // Update caret position
            selectionStart: selectionStart,
            selectionEnd: selectionEnd + 2
          });
        }
      } else if ((isMacLike ? // Trigger undo with ⌘+Z on Mac
      e.metaKey && e.keyCode === KEYCODE_Z : // Trigger undo with Ctrl+Z on other platforms
      e.ctrlKey && e.keyCode === KEYCODE_Z) && !e.shiftKey && !e.altKey) {
        e.preventDefault();

        this._undoEdit();
      } else if ((isMacLike ? // Trigger redo with ⌘+Shift+Z on Mac
      e.metaKey && e.keyCode === KEYCODE_Z && e.shiftKey : isWindows ? // Trigger redo with Ctrl+Y on Windows
      e.ctrlKey && e.keyCode === KEYCODE_Y : // Trigger redo with Ctrl+Shift+Z on other platforms
      e.ctrlKey && e.keyCode === KEYCODE_Z && e.shiftKey) && !e.altKey) {
        e.preventDefault();

        this._redoEdit();
      } else if (e.keyCode === KEYCODE_M && e.ctrlKey && (isMacLike ? e.shiftKey : true)) {
        e.preventDefault(); // Toggle capturing tab key so users can focus away

        this.capture = !this.capture;
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var lineNumberWidthCalculator = __vite_ssr_import_0__.h('div', {
      "class": 'prism-editor__line-width-calc',
      style: 'height: 0px; visibility: hidden; pointer-events: none;'
    }, '999');
    var lineNumbers = __vite_ssr_import_0__.h('div', {
      "class": 'prism-editor__line-numbers',
      style: {
        'min-height': this.lineNumbersHeight
      },
      'aria-hidden': 'true'
    }, [lineNumberWidthCalculator, Array.from(Array(this.lineNumbersCount).keys()).map(function (_, index) {
      return __vite_ssr_import_0__.h('div', {
        "class": 'prism-editor__line-number token comment'
      }, "" + ++index);
    })]);
    var textarea = __vite_ssr_import_0__.h('textarea', {
      ref: 'textarea',
      onInput: this.handleChange,
      onKeydown: this.handleKeyDown,
      onClick: function onClick($event) {
        _this3.$emit('click', $event);
      },
      onKeyup: function onKeyup($event) {
        _this3.$emit('keyup', $event);
      },
      onFocus: function onFocus($event) {
        _this3.$emit('focus', $event);
      },
      onBlur: function onBlur($event) {
        _this3.$emit('blur', $event);
      },
      "class": {
        'prism-editor__textarea': true,
        'prism-editor__textarea--empty': this.isEmpty
      },
      spellCheck: 'false',
      autocapitalize: 'off',
      autocomplete: 'off',
      autocorrect: 'off',
      'data-gramm': 'false',
      placeholder: this.placeholder,
      'data-testid': 'textarea',
      readonly: this.readonly,
      value: this.codeData
    });
    var preview = __vite_ssr_import_0__.h('pre', {
      ref: 'pre',
      "class": 'prism-editor__editor',
      'data-testid': 'preview',
      innerHTML: this.content
    });
    var editorContainer = __vite_ssr_import_0__.h('div', {
      "class": 'prism-editor__container'
    }, [textarea, preview]);
    return __vite_ssr_import_0__.h('div', {
      "class": 'prism-editor-wrapper'
    }, [this.lineNumbers && lineNumbers, editorContainer]);
  }
});


Object.defineProperty(__vite_ssr_exports__, "PrismEditor", { enumerable: true, configurable: true, get(){ return PrismEditor }});
//# sourceMappingURL=prismeditor.esm.js.map
;
}


// --------------------
// Request: /node_modules/vue-prism-editor/dist/prismeditor.min.css
// Parents: 
// - /components/content.vue ($id_3032adb6)
// Dependencies: 

// --------------------
const $id_209a256d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".prism-editor-wrapper{width:100%;height:100%;display:flex;align-items:flex-start;overflow:auto;-o-tab-size:1.5em;tab-size:1.5em;-moz-tab-size:1.5em}@media (-ms-high-contrast:active), (-ms-high-contrast:none){.prism-editor-wrapper .prism-editor__textarea{color:transparent!important}.prism-editor-wrapper .prism-editor__textarea::-moz-selection{background-color:#accef7!important;color:transparent!important}.prism-editor-wrapper .prism-editor__textarea::selection{background-color:#accef7!important;color:transparent!important}}.prism-editor-wrapper .prism-editor__container{position:relative;text-align:left;box-sizing:border-box;padding:0;overflow:hidden;width:100%}.prism-editor-wrapper .prism-editor__line-numbers{height:100%;overflow:hidden;flex-shrink:0;padding-top:4px;margin-top:0;margin-right:10px}.prism-editor-wrapper .prism-editor__line-number{text-align:right;white-space:nowrap}.prism-editor-wrapper .prism-editor__textarea{position:absolute;top:0;left:0;height:100%;width:100%;resize:none;color:inherit;overflow:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-text-fill-color:transparent}.prism-editor-wrapper .prism-editor__editor,.prism-editor-wrapper .prism-editor__textarea{margin:0;border:0;background:none;box-sizing:inherit;display:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-variant-ligatures:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;-moz-tab-size:inherit;-o-tab-size:inherit;tab-size:inherit;text-indent:inherit;text-rendering:inherit;text-transform:inherit;white-space:pre-wrap;word-wrap:keep-all;overflow-wrap:break-word;padding:0}.prism-editor-wrapper .prism-editor__textarea--empty{-webkit-text-fill-color:inherit!important}.prism-editor-wrapper .prism-editor__editor{position:relative;pointer-events:none}";
}


// --------------------
// Request: /node_modules/prismjs/prism.js
// Parents: 
// - /components/content.vue ($id_3032adb6)
// Dependencies: 

// --------------------
const $id_e07646f6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/prismjs/prism.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/prismjs/prism.js".') })


// --------------------
// Request: /node_modules/prismjs/components/prism-clike.js
// Parents: 
// - /components/content.vue ($id_3032adb6)
// Dependencies: 

// --------------------
const $id_b75c5470 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/prismjs/components/prism-clike.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/prismjs/components/prism-clike.js".') })


// --------------------
// Request: /node_modules/prismjs/components/prism-javascript.js
// Parents: 
// - /components/content.vue ($id_3032adb6)
// Dependencies: 

// --------------------
const $id_bdb60b25 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/prismjs/components/prism-javascript.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/prismjs/components/prism-javascript.js".') })


// --------------------
// Request: /node_modules/prismjs/themes/prism-editor.css
// Parents: 
// - /components/content.vue ($id_3032adb6)
// Dependencies: 

// --------------------
const $id_494b41e7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n\n @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');\n/**\n * atom-dark theme for `prism.js`\n * Based on Atom's `atom-dark` theme: https://github.com/atom/atom-dark-syntax\n * @author Joe Gibson (@gibsjose)\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: #c5c8c6;\n\ttext-shadow: 0 1px #1F2937;\n\tfont-family: 'Fira Code',Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;\n\tdirection: ltr;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding:.5em  1em;\n\tmargin: .5em 0;\n\toverflow-x: scroll;\n\toverflow-y: scroll;\n\tborder-radius: 0.3em;\n}\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #1F2937;\n}\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: #4D5663;\n}\n.token.punctuation {\n\tcolor: #A8D1E7;\n}\n.namespace {\n\topacity: .7;\n}\n.token.property,\n.token.keyword,\n.token.tag {\n\tcolor: #e56fff;\n}\n.token.class-name {\n\tcolor: #219CB2;\n\ttext-decoration: underline;\n}\n.token.boolean,\n.token.constant {\n\tcolor: #99CC99;\n}\n.token.symbol,\n.token.deleted {\n\tcolor: #f92672;\n}\n.token.number {\n\tcolor: #FF73FD;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #21C9E3;\n}\n.token.variable {\n\tcolor: #C6C5FE;\n}\n.token.operator {\n\tcolor: #EDEDED;\n}\n.token.entity {\n\tcolor: #FFFFB6;\n\tcursor: help;\n}\n.token.url {\n\tcolor: #96CBFE;\n}\n.language-css .token.string,\n.style .token.string {\n\tcolor: #87C38A;\n}\n.token.atrule,\n.token.attr-value {\n\tcolor: #96BF58;\n}\n.token.function {\n\tcolor: #DAD085;\n}\n.token.regex {\n\tcolor: #E9C062;\n}\n.token.important {\n\tcolor: #fd971f;\n}\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}";
}


// --------------------
// Request: /components/content.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/content.vue ($id_3032adb6)
// Dependencies: 

// --------------------
const $id_8fdbd1fd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.my-editor[data-v-7a4a808e] {\n    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */\n    color: #ccc;\n\n    /* you must provide font-family font-size line-height. Example: */\n    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;\n    font-size: 14px;\n    line-height: 1.5;\n\n    padding: 0px 10px;\n    overflow: scroll;\n    overflow-x: scroll;\n    max-height:  70vh;\n    width: 95%;\n    margin:0 auto;\n}\n\n  /* optional class for removing the outline */\n.prism-editor__textarea[data-v-7a4a808e]:focus {\n    outline: none;\n    overflow-x: scroll;\n}\n";
}


// --------------------
// Request: /pages/templates/index.vue
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/routes.mjs ($id_2bd3b053)
// Dependencies: 
// - /node_modules/nuxt3/dist/meta/runtime/index.mjs ($id_ea12a3fb)
// - /components/Menu.vue ($id_b1d32007)
// - /components/contents-sections.vue ($id_0b3ec488)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_83001a7f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Menu.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/contents-sections.vue");


    const _sfc_main = {
         setup () {
            __vite_ssr_import_0__.useMeta({
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

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Menu = __vite_ssr_import_1__.default
  const _component_contents_sections = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "w-full" }, _attrs))}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Menu, null, null, _parent))
  _push(`<!--[-->`)
  __vite_ssr_import_4__.ssrRenderList(_ctx.categories, (contentSection) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_contents_sections, {
      key: contentSection.title,
      contentSection: contentSection
    }, null, _parent))
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/templates/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/pages/templates/index.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/index.mjs
// Parents: 
// - /pages/templates/index.vue ($id_83001a7f)
// Dependencies: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_ea12a3fb = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /components/Menu.vue
// Parents: 
// - /pages/templates/index.vue ($id_83001a7f)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b1d32007 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "overflow-hidden w-full sticky top-0 bg-white z-50 flex justify-between items-center md:w-full md:mr-auto my-4 border-b-2 border-gray-200 p-2" }, _attrs))}><div class="flex justify-start items-center space-x-1 md:space-x-4"><h1 class="hidden p-2 lg:py-2 lg:px-4 md:inline-block font-bold tracking-wide text-dark">Templates &gt;</h1><a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-500 hover:text-dark transition-all duration-200" href="#Marketing">Marketing</a><a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-500 hover:text-dark transition-all duration-200" href="#Application">Application</a><a class="p-2 lg:py-2 cursor-pointer lg:px-4 inline-block text-gray-500 hover:text-dark transition-all duration-200" href="#Ecommerce">Ecommerce</a></div><div class="flex justify-end items-center space-x-2 md:space-x-4"><h1 class="hidden py-2 px-4 lg:inline-block font-bold tracking-wide text-dark">Options &gt;</h1><button class="cursor-pointer text-sm md:text-md font-bold tracking-wide rounded-lg px-1 py-2 md:py-2 md:px-4 inline-block text-gray-500 shadow-sm border-gray-200 border-2 transition-all duration-200">Add section</button><button class="cursor-pointer text-sm md:text-md font-bold tracking-wide rounded-lg px-1 py-2 md:py-2 md:px-4 inline-block text-white hover:ring-1 hover:ring-red-600 hover:scale-95 bg-red-600 shadow-lg shadow-red-600/30 transition-all duration-200">Remove section</button></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Menu.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/Menu.vue"]]);
}


// --------------------
// Request: /components/contents-sections.vue
// Parents: 
// - /pages/templates/index.vue ($id_83001a7f)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /components/Section.vue ($id_5ff493dc)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0b3ec488 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Section.vue");


const _sfc_main = {
    props:{
        contentSection:{
            type:Object,
            required:true,
        },
    }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Section = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      id: $props.contentSection.title.replace(' ',''),
      class: "w-full my-16 p-4"
    }, _attrs))
  }><div class="border-b-2 border-gray-200"><h1 class="text-xl font-bold text-dark capitalize">${
    __vite_ssr_import_2__.ssrInterpolate($props.contentSection.title)
  }</h1><p class="text-gray-400 text-sm mt-2">${
    __vite_ssr_import_2__.ssrInterpolate($props.contentSection.description)
  }</p></div><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($props.contentSection.subCategories, (section) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Section, {
      key: section.title,
      section: section
    }, null, _parent))
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/contents-sections.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/contents-sections.vue"]]);
}


// --------------------
// Request: /components/Section.vue
// Parents: 
// - /components/contents-sections.vue ($id_0b3ec488)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /components/card.vue ($id_d9dfd282)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5ff493dc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/card.vue");


const _sfc_main = {
    props:{
        section:{
            type:Object,
            required:true
        }
    }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_card = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      id: $props.section.title.replace(' ',''),
      class: "my-4 grid gap-x-8 gap-y-6 grid-cols-3 lg:grid-cols-4 py-8 border-b-2 border-gray-200"
    }, _attrs))
  }><h1 class="col-span-3 md:col-span-1 md:row-span-full text-md font-bold text-dark">${
    __vite_ssr_import_2__.ssrInterpolate($props.section.title)
  }</h1><div class="col-span-3 grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($props.section.items, (card) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_card, {
      key: card.id,
      card: card,
      section: $props.section
    }, null, _parent))
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Section.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/Section.vue"]]);
}


// --------------------
// Request: /components/card.vue
// Parents: 
// - /components/Section.vue ($id_5ff493dc)
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs ($id_71de6cd0)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d9dfd282 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const _sfc_main = {
    props:{
        card:{
            type:Object,
            required:true
        },
        section:{
            type:Object,
            required:true
        }
    }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
      class: "group rounded-lg ring-1 ring-black ring-opacity-5",
      href: '/templates/'+$props.section.title+'/'+$props.section.title+'-'+$props.card.title
    }, _attrs))
  }><div class="aspect-h-1 aspect-w-2 rounded-lg"><img class="object-cover rounded-t-lg contrast-100"${
    __vite_ssr_import_1__.ssrRenderAttr("src", $props.card.image)
  }${
    __vite_ssr_import_1__.ssrRenderAttr("alt", $props.card.image)
  }></div><div class="flex justify-center flex-col items-start p-2"><h2 class="text-dark tracking-wide font-bold text-sm capitalize">${
    __vite_ssr_import_1__.ssrInterpolate($props.card.title)
  }</h2><p class="text-gray-400 text-sm"><span class="text-dark tracking-wide font-bold">${
    __vite_ssr_import_1__.ssrInterpolate($props.card.items.length)
  }</span>`)
  if ($props.card.items.length >1) {
    _push(`<span> elements.</span>`)
  } else {
    _push(`<span> element.</span>`)
  }
  _push(`</p></div></a>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/card.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/components/card.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs ($id_96abf442)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/ohmyfetch/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/ohmyfetch/dist/index.mjs".') })


// --------------------
// Request: /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs ($id_96abf442)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/Footer.vue ($id_f3d8f325)
// - /components/Menu.vue ($id_b1d32007)
// - /components/Section.vue ($id_5ff493dc)
// - /components/card.vue ($id_d9dfd282)
// - /components/contents-sections.vue ($id_0b3ec488)
// - /components/example.vue ($id_b9253967)
// - /components/facebook-icon.vue ($id_5ac52ef2)
// - /components/get-started.vue ($id_645fb6af)
// - /components/github-icon.vue ($id_8657dbc0)
// - /components/header-index.vue ($id_265d4565)
// - /components/instagram-icon.vue ($id_ecce40b1)
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/services.vue ($id_0fea1836)
// - /components/twitter-icon.vue ($id_635e52bf)
// --------------------
const $id_71de6cd0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  'Footer': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Footer.vue').then(c => c.default || c)),
  'Menu': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Menu.vue').then(c => c.default || c)),
  'Section': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/Section.vue').then(c => c.default || c)),
  'Card': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/card.vue').then(c => c.default || c)),
  'ContentsSections': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/contents-sections.vue').then(c => c.default || c)),
  'Example': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/example.vue').then(c => c.default || c)),
  'FacebookIcon': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/facebook-icon.vue').then(c => c.default || c)),
  'GetStarted': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/get-started.vue').then(c => c.default || c)),
  'GithubIcon': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/github-icon.vue').then(c => c.default || c)),
  'HeaderIndex': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/header-index.vue').then(c => c.default || c)),
  'InstagramIcon': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/instagram-icon.vue').then(c => c.default || c)),
  'Navbar': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/navbar.vue').then(c => c.default || c)),
  'Services': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/services.vue').then(c => c.default || c)),
  'TwitterIcon': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/twitter-icon.vue').then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/root-component.mjs
// Parents: 
// - /Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/entry ($id_0424c648)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// --------------------
const $id_c6c082ac = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/root-component.mjs ($id_c6c082ac)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f8564e04 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  setup () {
    const nuxtApp = __vite_ssr_import_0__.useNuxtApp()
    const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
    if (true && results && results.some(i => i && 'then' in i)) {
      console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_1__.resolveComponent("App")

  __vite_ssr_import_2__.ssrRenderSuspense(_push, {
    default: () => {
      _push(__vite_ssr_import_2__.ssrRenderComponent(_component_App, null, null, _parent))
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/app-component.mjs
// Parents: 
// - /Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/entry ($id_0424c648)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// --------------------
const $id_8c900449 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/app.vue
// Parents: 
// - /@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/app-component.mjs ($id_8c900449)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0851ff57 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __vite_ssr_import_0__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/pages/runtime/app.vue"]]);
}


const __modules__ = {
 '/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/entry': $id_0424c648,
 '/node_modules/vue/dist/vue.cjs.js': $id_60f0615f,
 '/node_modules/nuxt3/dist/app/index.mjs': $id_d8c2af0f,
 '/node_modules/nuxt3/dist/app/nuxt.mjs': $id_bf77ef36,
 '/node_modules/hookable/dist/index.mjs': $id_a2c811c4,
 '/node_modules/nuxt3/dist/app/compat/legacy-app.mjs': $id_75047751,
 '/node_modules/unenv/runtime/mock/proxy.mjs': $id_39e12da7,
 '/node_modules/nuxt3/dist/app/composables/index.mjs': $id_42ae3d5d,
 '/node_modules/nuxt3/dist/app/composables/component.mjs': $id_b47c3881,
 '/node_modules/vue-router/dist/vue-router.cjs.js': $id_f9a4a698,
 '/node_modules/nuxt3/dist/app/composables/asyncData.mjs': $id_a2ef143e,
 '/node_modules/nuxt3/dist/app/composables/hydrate.mjs': $id_43a772c2,
 '/node_modules/nuxt3/dist/app/composables/state.mjs': $id_d232db97,
 '/node_modules/nuxt3/dist/app/composables/fetch.mjs': $id_765a0ed7,
 '/node_modules/murmurhash-es/dist/index.mjs': $id_fbf6dac3,
 '/node_modules/nuxt3/dist/app/composables/cookie.mjs': $id_792d64c4,
 '/node_modules/cookie-es/dist/index.mjs': $id_f4975261,
 '/node_modules/h3/dist/index.mjs': $id_57d7ded6,
 '/node_modules/destr/dist/index.mjs': $id_03d15ecd,
 '/node_modules/nuxt3/dist/app/composables/ssr.mjs': $id_4d0dc923,
 '/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/css.mjs': $id_cceefde2,
 '/assets/css/tailwind.scss': $id_a0d95d60,
 '/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/plugins/server.mjs': $id_96abf442,
 '/node_modules/nuxt3/dist/app/plugins/preload.server.mjs': $id_b9f3c557,
 '/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs': $id_cbe5172d,
 '/node_modules/@vueuse/head/dist/index.mjs': $id_c032264e,
 '/node_modules/nuxt3/dist/meta/runtime/plugin.mjs': $id_9fd5f35e,
 '/node_modules/nuxt3/dist/meta/runtime/components.mjs': $id_94744df3,
 '/node_modules/nuxt3/dist/meta/runtime/composables.mjs': $id_ca9295be,
 '/node_modules/@vue/shared/dist/shared.cjs.js': $id_852b06a2,
 '/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/meta.config.mjs': $id_9b81a6a6,
 '/node_modules/nuxt3/dist/pages/runtime/router.mjs': $id_a4d6cb5b,
 '/node_modules/nuxt3/dist/pages/runtime/nested-page.vue': $id_c268603a,
 '/node_modules/vue/server-renderer/index.js': $id_b215fa1c,
 '/@id/plugin-vue:export-helper': $id_bbb863c1,
 '/node_modules/nuxt3/dist/pages/runtime/page.vue': $id_10628d40,
 '/node_modules/nuxt3/dist/pages/runtime/layout.mjs': $id_9b68c93f,
 '/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/layouts.mjs': $id_a03c97d9,
 '/layouts/default.vue': $id_7689e89d,
 '/components/navbar.vue': $id_ccd51fbe,
 '/components/Footer.vue': $id_f3d8f325,
 '/components/github-icon.vue': $id_8657dbc0,
 '/components/instagram-icon.vue': $id_ecce40b1,
 '/components/twitter-icon.vue': $id_635e52bf,
 '/components/facebook-icon.vue': $id_5ac52ef2,
 '/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/routes.mjs': $id_2bd3b053,
 '/pages/index.vue': $id_cca58e97,
 '/components/header-index.vue': $id_265d4565,
 '/assets/images/header-bg.jpg': $id_dcd7c19c,
 '/components/services.vue': $id_0fea1836,
 '/components/example.vue': $id_b9253967,
 '/assets/images/bureau.png': $id_68a17cc4,
 '/assets/images/ajust.png': $id_0362fbec,
 '/assets/images/rename.png': $id_2ddbc618,
 '/components/get-started.vue': $id_645fb6af,
 '/pages/templates/[group]/[section]-[id].vue': $id_42acd7e4,
 '/components/content.vue': $id_3032adb6,
 '/node_modules/vue-prism-editor/dist/prismeditor.esm.js': $id_e506e72f,
 '/node_modules/vue-prism-editor/dist/prismeditor.min.css': $id_209a256d,
 '/node_modules/prismjs/prism.js': $id_e07646f6,
 '/node_modules/prismjs/components/prism-clike.js': $id_b75c5470,
 '/node_modules/prismjs/components/prism-javascript.js': $id_bdb60b25,
 '/node_modules/prismjs/themes/prism-editor.css': $id_494b41e7,
 '/components/content.vue?vue&type=style&index=0&scoped=true&lang.css': $id_8fdbd1fd,
 '/pages/templates/index.vue': $id_83001a7f,
 '/node_modules/nuxt3/dist/meta/runtime/index.mjs': $id_ea12a3fb,
 '/components/Menu.vue': $id_b1d32007,
 '/components/contents-sections.vue': $id_0b3ec488,
 '/components/Section.vue': $id_5ff493dc,
 '/components/card.vue': $id_d9dfd282,
 '/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs': $id_7b587af2,
 '/node_modules/ohmyfetch/dist/index.mjs': $id_780217c4,
 '/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/components.mjs': $id_71de6cd0,
 '/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/root-component.mjs': $id_c6c082ac,
 '/node_modules/nuxt3/dist/app/components/nuxt-root.vue': $id_f8564e04,
 '/@id/__x00__virtual:/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/.nuxt/app-component.mjs': $id_8c900449,
 '/node_modules/nuxt3/dist/pages/runtime/app.vue': $id_0851ff57
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__('/Users/anders/Desktop/work/nuxt/site-nuxt/Helpers/node_modules/nuxt3/dist/app/entry')