/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8931e86a1a1ef15b47bb7c5dbd7794d8"
  },
  {
    "url": "assets/css/0.styles.05cc7eb5.css",
    "revision": "7b44f7d70564866c5bff49fa46f3f606"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.92e21c8d.js",
    "revision": "5db1bcd2627f76753b1cd7d9186b1d74"
  },
  {
    "url": "assets/js/11.cc1411d8.js",
    "revision": "dd61c25dfd088c73544e13b260450eb9"
  },
  {
    "url": "assets/js/12.2d961c16.js",
    "revision": "a280fa157828838e80fcb666394cc188"
  },
  {
    "url": "assets/js/13.205676dc.js",
    "revision": "6426af9975baecfe74e3ed3875bdbc9e"
  },
  {
    "url": "assets/js/14.b165508a.js",
    "revision": "120a7c9a3d5cc468b0f10ae163ca7192"
  },
  {
    "url": "assets/js/15.486ed8f4.js",
    "revision": "c07c3891da9b850cee78d19a51caccfb"
  },
  {
    "url": "assets/js/16.ac82d50a.js",
    "revision": "5477ae4a4dfe22ef6aaa7280fd84a49c"
  },
  {
    "url": "assets/js/17.db1abd0b.js",
    "revision": "ce25d60b6bfb2823929ce7343fca6de2"
  },
  {
    "url": "assets/js/18.bd9497b5.js",
    "revision": "51d835c3542838fba2f03d4f6d74e498"
  },
  {
    "url": "assets/js/19.081301d7.js",
    "revision": "eb6cf40637c80d8100a367dd793995f1"
  },
  {
    "url": "assets/js/20.b8d7b737.js",
    "revision": "0d09fa8bb9570a4a645be830e9e4f2b9"
  },
  {
    "url": "assets/js/21.086584d3.js",
    "revision": "ef8cbb87f7ea68e3175c2ae2e25fda0e"
  },
  {
    "url": "assets/js/22.70d87ff4.js",
    "revision": "5482b17fd990c5b78fb99d7583f996e2"
  },
  {
    "url": "assets/js/23.cf08daab.js",
    "revision": "350b0efa5f15feeb653750593aa1e862"
  },
  {
    "url": "assets/js/24.07387fb5.js",
    "revision": "211005332c17029fc666b4d0a4ad1f3c"
  },
  {
    "url": "assets/js/25.4e770138.js",
    "revision": "b55b7a592f5d73194994d9af781bdb61"
  },
  {
    "url": "assets/js/26.4bf8b93c.js",
    "revision": "0ee92ee0a05818c6f3ed7d200f7a7eca"
  },
  {
    "url": "assets/js/27.38076681.js",
    "revision": "f16ae3bb4cbcfd317e9754bba6f79694"
  },
  {
    "url": "assets/js/28.eddd4fec.js",
    "revision": "5135f3520c4b5ce7a272fe34b1f021fb"
  },
  {
    "url": "assets/js/29.10d1433e.js",
    "revision": "0471af959d5b3c93dace1a3bf60956bd"
  },
  {
    "url": "assets/js/3.e5f6c01d.js",
    "revision": "fc400464cd0c13987d38342ba6ed9650"
  },
  {
    "url": "assets/js/30.4a707e0a.js",
    "revision": "c9f9081f2a4c0400b2b1e956bd1e4487"
  },
  {
    "url": "assets/js/31.8677c398.js",
    "revision": "b168324f0a6dbd20cbd595eba4346254"
  },
  {
    "url": "assets/js/32.12c7f3b9.js",
    "revision": "7de713d420f76e3e888f406e0d0aac21"
  },
  {
    "url": "assets/js/33.932ee82b.js",
    "revision": "3136fca3887dc90a8e72ced5195fc79a"
  },
  {
    "url": "assets/js/34.d4b9aeb4.js",
    "revision": "ac81952ffb5c1da80ccdde7b7d89d4c4"
  },
  {
    "url": "assets/js/35.acc1896e.js",
    "revision": "470c6474d258300624a8731674d92102"
  },
  {
    "url": "assets/js/36.527e7284.js",
    "revision": "ebf92ab559128f53b3c190e63db0443d"
  },
  {
    "url": "assets/js/37.a3f87927.js",
    "revision": "5cf1041bd8b5cc26e8122b95ebc2558a"
  },
  {
    "url": "assets/js/38.88ddbf7a.js",
    "revision": "2e228cde621120732ea8931dca567282"
  },
  {
    "url": "assets/js/39.fd7962a1.js",
    "revision": "fea5a2f4d0297e235032edc99b4950b0"
  },
  {
    "url": "assets/js/4.d584cd42.js",
    "revision": "cf4dd6338be0bf0a9389f268bf32bec8"
  },
  {
    "url": "assets/js/40.15dc2bae.js",
    "revision": "dd0561b3c7025065c59d060fcf2ce48e"
  },
  {
    "url": "assets/js/41.92269fcd.js",
    "revision": "beb5904321f89e48631022b502f646b5"
  },
  {
    "url": "assets/js/42.b6a87d96.js",
    "revision": "7ac0be80649e396b7833add9b48271c3"
  },
  {
    "url": "assets/js/43.84bcdfb9.js",
    "revision": "a9ab46d17dfbe5052c568cbe34c15a7d"
  },
  {
    "url": "assets/js/44.86791ad1.js",
    "revision": "dbc1b38bc902349e54e06d0336d5b4d2"
  },
  {
    "url": "assets/js/45.6a3fb16d.js",
    "revision": "2052ce87a5140db22a9f35855de63d8f"
  },
  {
    "url": "assets/js/46.b5293326.js",
    "revision": "856997973ae87140fa518416d02ae5bd"
  },
  {
    "url": "assets/js/47.7d80c117.js",
    "revision": "7a47b443093241184b9748d11d061653"
  },
  {
    "url": "assets/js/48.5085aee1.js",
    "revision": "865a3f5f90dd745f25c46dde3621aa83"
  },
  {
    "url": "assets/js/49.45b201a6.js",
    "revision": "bce520c24c57b1d027c7685d21095fbe"
  },
  {
    "url": "assets/js/5.e3a314f7.js",
    "revision": "abad925f5fda94643f34a242a9c2c239"
  },
  {
    "url": "assets/js/50.3ea3c47a.js",
    "revision": "bc88fe2305d6265a41ed86283623ba08"
  },
  {
    "url": "assets/js/51.7319689a.js",
    "revision": "f8e9a35ca51848f61fd0b82e5caf979d"
  },
  {
    "url": "assets/js/52.c4d9b204.js",
    "revision": "1a378974c87c021b3f71cdc68acd788b"
  },
  {
    "url": "assets/js/53.3114bf6b.js",
    "revision": "4b5e91e3f609734f20a610ee7282fc11"
  },
  {
    "url": "assets/js/54.995bca0e.js",
    "revision": "45cdd8c0a8173a876a88a0e95f175255"
  },
  {
    "url": "assets/js/55.e27397eb.js",
    "revision": "bf23373889630a0e9c8e273e5a07a2aa"
  },
  {
    "url": "assets/js/56.e4513a4e.js",
    "revision": "84aba111e680d63bad5ee4c226ea55e7"
  },
  {
    "url": "assets/js/57.1159b507.js",
    "revision": "00982a7c682ca6a16d6d3d26a8758b43"
  },
  {
    "url": "assets/js/58.7d58a545.js",
    "revision": "c7a1f6a320447eeb0bc64437fd912c51"
  },
  {
    "url": "assets/js/59.dbd46eb1.js",
    "revision": "48844d76ba77bf362c430ad0a69ee5f3"
  },
  {
    "url": "assets/js/6.da654ace.js",
    "revision": "d5b8479ffc50807434e8af24c7d4c8b3"
  },
  {
    "url": "assets/js/60.92e88ec9.js",
    "revision": "9a1c04571a49f4a892aa8e764d034988"
  },
  {
    "url": "assets/js/61.8d5cdca3.js",
    "revision": "6174cfd1fd6873fec3ac98b6810bd6c0"
  },
  {
    "url": "assets/js/62.9af7431d.js",
    "revision": "33b4385a351a9b4eaab30d7987c1a872"
  },
  {
    "url": "assets/js/63.b41e9a05.js",
    "revision": "5a23fb8d3c43c5f67fd57e98b6f3e7cd"
  },
  {
    "url": "assets/js/64.4a3c4ea7.js",
    "revision": "36a77ca5cfc8c84a6633fc56d9e155b9"
  },
  {
    "url": "assets/js/65.835613ef.js",
    "revision": "6d4fa12c5c97d15fa059aeef23d7317c"
  },
  {
    "url": "assets/js/66.8cd25ac9.js",
    "revision": "9af7252000f631113e85632e845b7328"
  },
  {
    "url": "assets/js/67.2fdfc8d2.js",
    "revision": "e0a22d79e85b8f71ef758b48b6c91fe1"
  },
  {
    "url": "assets/js/68.1a6fa670.js",
    "revision": "48f45fc74eb17ff4a55e30bf452373c7"
  },
  {
    "url": "assets/js/69.24c523fc.js",
    "revision": "2e80570b8d3de3ee184f3396fccea31b"
  },
  {
    "url": "assets/js/7.0f973c56.js",
    "revision": "c5794b63912c773a8c2d2a8b5b1542c5"
  },
  {
    "url": "assets/js/70.afc49943.js",
    "revision": "89933483065cd04e239c02a3588d3c5c"
  },
  {
    "url": "assets/js/71.425d9845.js",
    "revision": "ded6bf6bc817a142ee4ee210fe680a61"
  },
  {
    "url": "assets/js/72.df82cb35.js",
    "revision": "6763c3ee29d27baebb576689b85a1d2b"
  },
  {
    "url": "assets/js/73.6461ff8b.js",
    "revision": "059687b14b5d741865529d47f368834e"
  },
  {
    "url": "assets/js/74.42fdc9ca.js",
    "revision": "26828da4018ae98343847d188d0de015"
  },
  {
    "url": "assets/js/75.6029d9dd.js",
    "revision": "1fe4a620417842b7eca02ebb8a65c597"
  },
  {
    "url": "assets/js/76.ac5c877d.js",
    "revision": "fab5bd7e32fb2268e7c5c174e2b9e154"
  },
  {
    "url": "assets/js/77.91697145.js",
    "revision": "52326d404fe45e55f54b683af2d1c897"
  },
  {
    "url": "assets/js/78.3f23eaf7.js",
    "revision": "df337afe232e2c29bf572921c0069686"
  },
  {
    "url": "assets/js/79.3390703e.js",
    "revision": "573203ec7eb2a51936c3d385e38604fe"
  },
  {
    "url": "assets/js/8.cd0d92c8.js",
    "revision": "97ee1bbd6a8566cb79c44edaf8ed5196"
  },
  {
    "url": "assets/js/80.14cf59a6.js",
    "revision": "35933adced01d8d57939546c11b8614f"
  },
  {
    "url": "assets/js/81.df106301.js",
    "revision": "f1e7e1aa065df1a6887b057878de6b2c"
  },
  {
    "url": "assets/js/82.b9c47d41.js",
    "revision": "f0f9ebba005bb4a12f6e42a03eee7202"
  },
  {
    "url": "assets/js/83.7d601b24.js",
    "revision": "fcb4c3b842a768dc212c159f51dcffdf"
  },
  {
    "url": "assets/js/84.8f06dfd5.js",
    "revision": "a31f78cf70612bf3082eed146fada711"
  },
  {
    "url": "assets/js/85.0361ac05.js",
    "revision": "d1d86f658879acc2c271ba5a14f103ed"
  },
  {
    "url": "assets/js/86.cfc2ea02.js",
    "revision": "e84574ca220d1f63074e3344c15c14be"
  },
  {
    "url": "assets/js/87.04b875f6.js",
    "revision": "ce1a5d15c0c07ce767d2a37b88dfafa1"
  },
  {
    "url": "assets/js/9.cd570fc8.js",
    "revision": "81727864cbaa5a5ced2d2547941ad7bf"
  },
  {
    "url": "assets/js/app.1274b19c.js",
    "revision": "a42643eca91331ec2b0969c379f33fcf"
  },
  {
    "url": "assets/js/vendors~notification.7bcb2342.js",
    "revision": "f1da5da4d829aadd97d7df812de33155"
  },
  {
    "url": "blog/20200414-enqueue-update.html",
    "revision": "885718b87e18c7a2abc0a5449f8007bc"
  },
  {
    "url": "blog/20200414-expiration-time.html",
    "revision": "5bb6b94947cb24412b554b8028b60c85"
  },
  {
    "url": "blog/20200414-hide-element.html",
    "revision": "255961a5efdd35a34e6ca7409584108b"
  },
  {
    "url": "blog/20200414-intersection-observer.html",
    "revision": "0da93cfcba7815d34556bd511c3db2cd"
  },
  {
    "url": "blog/20200414-jsx-2-virtual-dom.html",
    "revision": "7cd98c6bf076d862378668c1e6172c46"
  },
  {
    "url": "blog/20200414-react-data-struct.html",
    "revision": "f5a5611f21e0f221edb6d752bc69b8a3"
  },
  {
    "url": "blog/20200414-react-dom-render.html",
    "revision": "daa883623cf484d5878b3db4799e6007"
  },
  {
    "url": "blog/20200414-schedule-work.html",
    "revision": "8b55cada6437adab3f9af2f120683445"
  },
  {
    "url": "blog/20200414-shell-push-git.html",
    "revision": "a8b601a8d6ddbbe0993228ee11e1068a"
  },
  {
    "url": "blog/20200421-wang-editor-add-upload-file.html",
    "revision": "8c254bb995b18c01bb3e7abbf2f77c85"
  },
  {
    "url": "blog/20200422-ye-mian-zhu-ru-50-wan-ge-li.html",
    "revision": "53fd0e2c175e9065dbdcc04c4ff6938f"
  },
  {
    "url": "blog/20200424-qian-duan-gong-cheng-hua.html",
    "revision": "02771f1e7cc1a50dd4e85b57136c9577"
  },
  {
    "url": "blog/20200428-BitMap.html",
    "revision": "66cc4de984c32d95fbef2e7e9a65a2ea"
  },
  {
    "url": "blog/20200430-ArrayBuffer-Blob-File.html",
    "revision": "3cf49f7d9093deed8b74abf3f983110e"
  },
  {
    "url": "blog/20200509-node-big-text.html",
    "revision": "168e3c076cbd4f6a6f0814b7d4584f2f"
  },
  {
    "url": "blog/20200605-monit-jiagou.html",
    "revision": "9adcab25cf808ed46d93fb4d8a361625"
  },
  {
    "url": "blog/20200914-tong-guo-localStorage-tong-yuan-fa-song-xin-xi.html",
    "revision": "9eb57851c54c8741b5e400eea664c237"
  },
  {
    "url": "blog/index.html",
    "revision": "b0b6bcc4830fe2c4e786d652e51c5199"
  },
  {
    "url": "icons/logo.png",
    "revision": "8a06f1fcf7da0b3b325dddf37b13e6c0"
  },
  {
    "url": "icons/logo.svg",
    "revision": "5fc7259e99f5c7a940ca887923c6d8c1"
  },
  {
    "url": "index.html",
    "revision": "0b69be3f3bd5c1931a5b8dc40351ffa3"
  },
  {
    "url": "knowledge/abstract.html",
    "revision": "33c84ad6161bc6d92a64c903d3cbab5b"
  },
  {
    "url": "knowledge/algorithm.html",
    "revision": "7de1f40d98fe2fd616fb2d1bdaec4f94"
  },
  {
    "url": "knowledge/ast.html",
    "revision": "1113922d9582ba85fc96218b60d611de"
  },
  {
    "url": "knowledge/babelPlugin.html",
    "revision": "19f4f062a7dba9a03eaa67a210a67e97"
  },
  {
    "url": "knowledge/book.html",
    "revision": "6916912577d3444cb5d2b384b97dad66"
  },
  {
    "url": "knowledge/browser.html",
    "revision": "e28e4be8b2d55701878770f1e845d3d7"
  },
  {
    "url": "knowledge/cache.html",
    "revision": "28a092aadc1c5be9a095aed5f7451222"
  },
  {
    "url": "knowledge/cdn.html",
    "revision": "23d8c3a92b9b554cc9851ef59d3cc2d9"
  },
  {
    "url": "knowledge/chain.html",
    "revision": "09ffc02042cd1563786545bf7ee5ac8d"
  },
  {
    "url": "knowledge/common.html",
    "revision": "39147629e847ad99c7734ea734681915"
  },
  {
    "url": "knowledge/css.html",
    "revision": "eeb08b0ceac4a10d7d559b1d9da3c7df"
  },
  {
    "url": "knowledge/deepclone.html",
    "revision": "3ffd3e0887aa83f4db2b946d7b57e642"
  },
  {
    "url": "knowledge/devsProxy.html",
    "revision": "b6a5e1698f4ee25db5051922692af7a6"
  },
  {
    "url": "knowledge/dom.html",
    "revision": "8917308fab240db5a601bf1bd247a361"
  },
  {
    "url": "knowledge/domRender.html",
    "revision": "77d228620f0bc703171ce5ef423a1ccb"
  },
  {
    "url": "knowledge/engineering.html",
    "revision": "9fd7866e451259a66a47e4740bfb5eef"
  },
  {
    "url": "knowledge/event.html",
    "revision": "565227ff0baf97f3ae8d21f79ce965a5"
  },
  {
    "url": "knowledge/eventLoop.html",
    "revision": "26c67fba9c5b1a114b890f2933ac852b"
  },
  {
    "url": "knowledge/execute.html",
    "revision": "b2a4b08c9018517482c6713749cdf16e"
  },
  {
    "url": "knowledge/fiber.html",
    "revision": "6b3a63bae73e881e21b7ae450c978d6c"
  },
  {
    "url": "knowledge/hoisting.html",
    "revision": "762937ad438c12986b3dcb06d9efcae0"
  },
  {
    "url": "knowledge/html.html",
    "revision": "6c160547db928da7d5ec94c4a8b6f67c"
  },
  {
    "url": "knowledge/http.html",
    "revision": "12bc70af711dd8c9281d579f991c41ea"
  },
  {
    "url": "knowledge/http2.html",
    "revision": "38644ffcc2c6fe4a956de8cdae1aae48"
  },
  {
    "url": "knowledge/https.html",
    "revision": "e80e538ec5af9f77e3e72939a7ee9629"
  },
  {
    "url": "knowledge/httpWritten.html",
    "revision": "129eebc0a5cee2d91c1f5cb9dfde2de4"
  },
  {
    "url": "knowledge/immutable.html",
    "revision": "72512fba2c3163465b7f298cee6f3538"
  },
  {
    "url": "knowledge/index.html",
    "revision": "f6c8a1bed1f71f110fad667d649e0321"
  },
  {
    "url": "knowledge/jsBasic.html",
    "revision": "eea092dda8bddf07d78bb14f125cbd55"
  },
  {
    "url": "knowledge/jsonp.html",
    "revision": "277a77b186d52a703a396a614f42b109"
  },
  {
    "url": "knowledge/jsWritten.html",
    "revision": "dcf68fa1871756951d04eb7267caac05"
  },
  {
    "url": "knowledge/load.html",
    "revision": "8dcf78c36e69643a9313ee037b80ee3c"
  },
  {
    "url": "knowledge/mechanism.html",
    "revision": "ae5c5f4391856df40b9434325a5ea40f"
  },
  {
    "url": "knowledge/memory.html",
    "revision": "4a9826cb230a84602c7ea95b73b1a1cb"
  },
  {
    "url": "knowledge/node.html",
    "revision": "672c5db19f134f83f845aa261fe5827a"
  },
  {
    "url": "knowledge/react.html",
    "revision": "4a462369d7d0754954e139b9ccaf7887"
  },
  {
    "url": "knowledge/reactError.html",
    "revision": "43e44c561878468b3bd6fdee4805bfab"
  },
  {
    "url": "knowledge/reactHook.html",
    "revision": "d3e44b8ce9b9aebaa98a2a07b1af8839"
  },
  {
    "url": "knowledge/reactivity.html",
    "revision": "edfac4dab9654b91751708340fb4198d"
  },
  {
    "url": "knowledge/redux.html",
    "revision": "4717bbdc22f88355bd624fbe97ef7eb3"
  },
  {
    "url": "knowledge/requestHeader.html",
    "revision": "64b7faf6f97ea0c504bcf761cf5d8798"
  },
  {
    "url": "knowledge/router.html",
    "revision": "9028e850abd608ae0c93a8963df58c1c"
  },
  {
    "url": "knowledge/security.html",
    "revision": "986892f078430196411c4bade335a087"
  },
  {
    "url": "knowledge/setState.html",
    "revision": "eef9c88faf07a43a1e85fdf49fc1b471"
  },
  {
    "url": "knowledge/string.html",
    "revision": "47691fae4ddbf894109ed9f818e41444"
  },
  {
    "url": "knowledge/tcp.html",
    "revision": "c152b42eeffdaea18e74301a02ed0570"
  },
  {
    "url": "knowledge/tree.html",
    "revision": "dc1220ae9d24be1f2aee4a7088af877c"
  },
  {
    "url": "knowledge/url.html",
    "revision": "e352848db0b32e91cd7930b98a88744d"
  },
  {
    "url": "knowledge/virtualDom.html",
    "revision": "d54a25196a96895754f0af2504d3c6ff"
  },
  {
    "url": "knowledge/vue.html",
    "revision": "2dbbd2d5f3376bc1e150533693cb4ea5"
  },
  {
    "url": "knowledge/webpack.html",
    "revision": "7b3eac3db4f3bde91491a667e49bb231"
  },
  {
    "url": "knowledge/WebpackHMR.html",
    "revision": "0e0c508899a145c7667c96196f8a3ad7"
  },
  {
    "url": "knowledge/webpackLoader.html",
    "revision": "3b81523e2b18d429c1b416ec0cde8c1c"
  },
  {
    "url": "knowledge/webpackMoudle.html",
    "revision": "45badc2a559b5bb00de67a8c6a7b7993"
  },
  {
    "url": "knowledge/webpackPlugin.html",
    "revision": "5e61638b9f433fdc87d0b8f4427f37e0"
  },
  {
    "url": "knowledge/webpackPluginDesign.html",
    "revision": "d02abf91f8cadc9ce4fed59ce611fdaa"
  },
  {
    "url": "logo.png",
    "revision": "8a06f1fcf7da0b3b325dddf37b13e6c0"
  },
  {
    "url": "logo.svg",
    "revision": "5fc7259e99f5c7a940ca887923c6d8c1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
