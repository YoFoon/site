(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(e,t,a){"use strict";a.r(t);var n=a(4),u=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"enqueueupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enqueueupdate","aria-hidden":"true"}},[e._v("#")]),e._v(" enqueueUpdate")]),e._v(" "),a("h3",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[e._v("#")]),e._v(" Update")]),e._v(" "),a("p",[e._v("创建 update 的时机在 03 章节中提到过，位于"),a("code",[e._v("scheduleRootUpdate")]),e._v("这个函数中")]),e._v(" "),a("p",[a("code",[e._v("const update = createUpdate(expirationTime);")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export type Update<State> = {\n  expirationTime: ExpirationTime,//过期时间\n\n  // export const UpdateState = 0;\n  // export const ReplaceState = 1;\n  // export const ForceUpdate = 2;\n  // export const CaptureUpdate = 3;\n\n  //重点提下CaptureUpdate，在React16后有一个ErrorBoundaries功能\n  //即在渲染过程中报错了，可以选择新的渲染状态（提示有错误的状态），来更新页面\n  tag: 0 | 1 | 2 | 3, //0更新 1替换 2强制更新 3捕获性的更新\n  payload: any,// 待更新的值，比如setState里面需要更新的值\n  callback: (() => mixed) | null,//setState的回调函数\n\n  next: Update<State> | null,//指向下一个 update的指针\n  nextEffect: Update<State> | null, //指向下一个effect（变化）\n};\n")])])]),a("h3",{attrs:{id:"updatequeue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updatequeue","aria-hidden":"true"}},[e._v("#")]),e._v(" updateQueue")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export type UpdateQueue<State> = {\n\t//应用更新后的state\n\t// 在组件setState后，渲染并更新state，在下次更新时，拿的就是这次更新过的state\n  baseState: State,\n\n\t// 队列中的第一个update\n  firstUpdate: Update<State> | null,\n  // 队列中的最后一个updte\n  lastUpdate: Update<State> | null,\n\n\t// 队列中第一个捕获类型的update\n  firstCapturedUpdate: Update<State> | null,\n  // 队列中最后一个捕获类型的update\n  lastCapturedUpdate: Update<State> | null,\n\n\t// 队列中第一个side effect\n  firstEffect: Update<State> | null,\n  // 队列中最后一个side effect\n  lastEffect: Update<State> | null,\n\n\n  firstCapturedEffect: Update<State> | null,\n  lastCapturedEffect: Update<State> | null,\n};\n")])])]),a("p",[e._v("###enqueueUpdate")]),e._v(" "),a("p",[e._v(" 作用：把 update 放入更新队列里 react 更新会在一个节点上整体进行很多个更新，是一个单向列表")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export function enqueueUpdate<State>(\n\tfiber: Fiber, // 传入的current\n\tupdate: Update<State> // update\n) {\n  // Update queues are created lazily.\n\n  // 在Fiber树更新的过程中，每个Fiber都会有一个跟其对应的Fiber\n  // 我们称他为`current <==> workInProgress`\n  // 在渲染完成之后他们会交换位置\n  // 当前fiber节点的alternate属性指向workInProgress节点\n  // 对应workInProgress节点的alternate属性指向当前fiber节点\n  const alternate = fiber.alternate;\n\n  // current 队列\n  let queue1;\n  // alternate 队列\n  let queue2;\n\n  // fiber刚创建时候是没有 alternate 的, 更新过一次之后就有了\n  if (alternate === null) {\n    queue1 = fiber.updateQueue;\n    queue2 = null;\n    if (queue1 === null) {\n      queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);\n    }\n  } else {\n    queue1 = fiber.updateQueue;\n    queue2 = alternate.updateQueue;\n    if (queue1 === null) {\n      if (queue2 === null) {\n      \t//  都为空。。似乎没有在代码中找到过这种场景，感觉是用来做错误检测这种场景\n        // Neither fiber has an update queue. Create new ones.\n        queue1 = fiber.updateQueue = createUpdateQueue(fiber.memoizedState);\n        queue2 = alternate.updateQueue = createUpdateQueue(\n          alternate.memoizedState,\n        );\n      } else {\n        // Only one fiber has an update queue. Clone to create a new one.\n        queue1 = fiber.updateQueue = cloneUpdateQueue(queue2);\n      }\n    } else {\n      if (queue2 === null) {\n        // Only one fiber has an update queue. Clone to create a new one.\n        queue2 = alternate.updateQueue = cloneUpdateQueue(queue1);\n      } else {\n        // Both owners have an update queue.\n      }\n    }\n  }\n  if (queue2 === null || queue1 === queue2) {\n    // There's only a single queue.\n    // 发生在首次更新场景\n    // 将update放入queue1中\n    appendUpdateToQueue(queue1, update);\n  } else {\n    // react不想多次将同一个的update放入队列中\n    // 如果两个都是空队列，则添加update\n    if (queue1.lastUpdate === null || queue2.lastUpdate === null) {\n      // One of the queues is not empty. We must add the update to both queues.\n      appendUpdateToQueue(queue1, update);\n      appendUpdateToQueue(queue2, update);\n    } else {\n    \t//如果两个都不是空队列，由于两个结构共享，所以只在queue1加入update\n    \t//在queue2中，将lastUpdate指向update\n      appendUpdateToQueue(queue1, update);\n      queue2.lastUpdate = update;\n    }\n  }\n\n  if (__DEV__) {\n  \t...\n  }\n}\n\n")])])])])},[],!1,null,null,null);t.default=u.exports}}]);