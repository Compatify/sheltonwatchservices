import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CoSFV7qv.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/cash-for-watches.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/guide/how-often-service-rolex.astro.mjs');
const _page5 = () => import('./pages/guide/how-to-service-watch-at-home.astro.mjs');
const _page6 = () => import('./pages/guide/is-my-watch-worth-repairing.astro.mjs');
const _page7 = () => import('./pages/guide/rolex-service-cost.astro.mjs');
const _page8 = () => import('./pages/guide/watch-stopped-working.astro.mjs');
const _page9 = () => import('./pages/guide/why-is-my-watch-losing-time.astro.mjs');
const _page10 = () => import('./pages/guide.astro.mjs');
const _page11 = () => import('./pages/pre-owned-watches-for-sale.astro.mjs');
const _page12 = () => import('./pages/sell/rolex.astro.mjs');
const _page13 = () => import('./pages/sell.astro.mjs');
const _page14 = () => import('./pages/sell-my-watch-today.astro.mjs');
const _page15 = () => import('./pages/service/battery-replacement.astro.mjs');
const _page16 = () => import('./pages/service/cartier.astro.mjs');
const _page17 = () => import('./pages/service/crystal-replacement.astro.mjs');
const _page18 = () => import('./pages/service/full-overhaul.astro.mjs');
const _page19 = () => import('./pages/service/mechanical-watch.astro.mjs');
const _page20 = () => import('./pages/service/omega.astro.mjs');
const _page21 = () => import('./pages/service/rolex.astro.mjs');
const _page22 = () => import('./pages/service/seiko.astro.mjs');
const _page23 = () => import('./pages/service/tag-heuer.astro.mjs');
const _page24 = () => import('./pages/service/tudor.astro.mjs');
const _page25 = () => import('./pages/service/vintage-restoration.astro.mjs');
const _page26 = () => import('./pages/service/watch-appraisal.astro.mjs');
const _page27 = () => import('./pages/service.astro.mjs');
const _page28 = () => import('./pages/shop/omega.astro.mjs');
const _page29 = () => import('./pages/shop/rolex.astro.mjs');
const _page30 = () => import('./pages/shop/seiko.astro.mjs');
const _page31 = () => import('./pages/shop/watches/_slug_.astro.mjs');
const _page32 = () => import('./pages/shop.astro.mjs');
const _page33 = () => import('./pages/sitemap.astro.mjs');
const _page34 = () => import('./pages/tools/repair-or-sell.astro.mjs');
const _page35 = () => import('./pages/tools.astro.mjs');
const _page36 = () => import('./pages/watch-repair-allentown-pa.astro.mjs');
const _page37 = () => import('./pages/watch-repair-bethlehem-pa.astro.mjs');
const _page38 = () => import('./pages/watch-repair-lehigh-valley.astro.mjs');
const _page39 = () => import('./pages/watches-for-sale-allentown-pa.astro.mjs');
const _page40 = () => import('./pages/watches-for-sale-bethlehem-pa.astro.mjs');
const _page41 = () => import('./pages/watches-for-sale-lehigh-valley.astro.mjs');
const _page42 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404/index.astro", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/cash-for-watches.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/guide/how-often-service-rolex.astro", _page4],
    ["src/pages/guide/how-to-service-watch-at-home.astro", _page5],
    ["src/pages/guide/is-my-watch-worth-repairing.astro", _page6],
    ["src/pages/guide/rolex-service-cost.astro", _page7],
    ["src/pages/guide/watch-stopped-working.astro", _page8],
    ["src/pages/guide/why-is-my-watch-losing-time.astro", _page9],
    ["src/pages/guide/index.astro", _page10],
    ["src/pages/pre-owned-watches-for-sale.astro", _page11],
    ["src/pages/sell/rolex.astro", _page12],
    ["src/pages/sell/index.astro", _page13],
    ["src/pages/sell-my-watch-today.astro", _page14],
    ["src/pages/service/battery-replacement.astro", _page15],
    ["src/pages/service/cartier.astro", _page16],
    ["src/pages/service/crystal-replacement.astro", _page17],
    ["src/pages/service/full-overhaul.astro", _page18],
    ["src/pages/service/mechanical-watch.astro", _page19],
    ["src/pages/service/omega.astro", _page20],
    ["src/pages/service/rolex.astro", _page21],
    ["src/pages/service/seiko.astro", _page22],
    ["src/pages/service/tag-heuer.astro", _page23],
    ["src/pages/service/tudor.astro", _page24],
    ["src/pages/service/vintage-restoration.astro", _page25],
    ["src/pages/service/watch-appraisal.astro", _page26],
    ["src/pages/service/index.astro", _page27],
    ["src/pages/shop/omega.astro", _page28],
    ["src/pages/shop/rolex.astro", _page29],
    ["src/pages/shop/seiko.astro", _page30],
    ["src/pages/shop/watches/[slug].astro", _page31],
    ["src/pages/shop/index.astro", _page32],
    ["src/pages/sitemap.astro", _page33],
    ["src/pages/tools/repair-or-sell.astro", _page34],
    ["src/pages/tools/index.astro", _page35],
    ["src/pages/watch-repair-allentown-pa.astro", _page36],
    ["src/pages/watch-repair-bethlehem-pa.astro", _page37],
    ["src/pages/watch-repair-lehigh-valley.astro", _page38],
    ["src/pages/watches-for-sale-allentown-pa.astro", _page39],
    ["src/pages/watches-for-sale-bethlehem-pa.astro", _page40],
    ["src/pages/watches-for-sale-lehigh-valley.astro", _page41],
    ["src/pages/index.astro", _page42]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8373e999-d5cf-4286-b119-bb08ba684f85"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
