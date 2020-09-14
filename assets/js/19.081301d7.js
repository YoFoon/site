(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{218:function(e,n,t){"use strict";t.r(n);var o=t(4),a=Object(o.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"reactdom-render"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reactdom-render","aria-hidden":"true"}},[e._v("#")]),e._v(" ReactDOM.render")]),e._v(" "),t("p",[e._v("上文说的是把 jsx 转换成 VDom")]),e._v(" "),t("p",[e._v("而 ReactDom.render 则是把 VDom 渲染成真实的 Dom 节点（本篇幅只涉及到渲染，没有涉及到更新、调度等等）")]),e._v(" "),t("p",[e._v("我们在写 react 的时候，写到最后一步肯定是 ReactDom.render，比如")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ReactDOM.render(<App name='app' />, document.getElementById('app'));\n")])])]),t("p",[e._v("把"),t("code",[e._v("<App />")]),e._v("解析成 Vdom")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ReactDOM.render(React.createElement(App, {\n  name: \"app\"\n}), document.getElementById('app'));\n")])])]),t("p",[e._v("终于撸到 render 了呀，找到"),t("code",[e._v("react-dom")]),e._v("库里面的"),t("code",[e._v("ReactDom.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const ReactDOM: Object = {\n\n  ...\n\n  render(\n    element: React$Element<any>, // ReactElement\n    container: DOMContainer, // 页面上挂载的dom节点\n    callback: ?Function, // callback 渲染完成后的回调，一般不使用\n  ) {\n    return legacyRenderSubtreeIntoContainer(\n      null,\n      element,\n      container,\n      false,\n      callback,\n    );\n  }\n\n  ...\n\n};\n")])])]),t("p",[e._v("我们看到 ReactDom.render 传入了 Vdom，挂载的 dom 节点，还有一个回调函数，终于返回了一个"),t("code",[e._v("legacyRenderSubtreeIntoContainer")]),e._v(",直译这个函数可能大概是："),t("strong",[e._v("渲染子树给容器")]),e._v("，这个函数，实际上就是初始化了"),t("code",[e._v("root")]),e._v("，并且调用了"),t("code",[e._v("root.render")]),e._v("方法，而"),t("code",[e._v("root")]),e._v("是由"),t("code",[e._v("legacyCreateRootFromDOMContainer")]),e._v("返回的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function legacyRenderSubtreeIntoContainer(\n\t// 父组件，React.Dom传入的为null\n  parentComponent: ?React$Component<any, any>,\n  // 子组件，就是React.Dom中传入的组件\n  children: ReactNodeList,\n  // 容器，挂载子组件的节点\n  container: DOMContainer,\n  // 用来判断是否为服务端渲染。hydrate和render唯一的区别就这个值。服务端渲染用了hydrate而不是render\n  // render 中的值就是false\n  forceHydrate: boolean,\n  // 渲染完成后的回调\n  callback: ?Function,\n) {\n  // 对容易进行检测，是否为一个真实的dom节点，确保容器可挂载\n  invariant(\n    isValidContainer(container),\n    'Target container is not a DOM element.',\n  );\n\n  if (__DEV__) {\n    ...\n  }\n\n\t// 取root对象，一般如果非服务器端渲染这个root是不存在的\n  let root: Root = (container._reactRootContainer: any);\n  if (!root) {\n  \t// 初始化root和container._reactRootContainer，创建一个HostRoot对象，是Fiber对象的一种\n    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(\n      container,\n      forceHydrate,\n    );\n\n    if (typeof callback === 'function') {\n      ...\n    }\n    // Initial mount should not be batched.\n    // DOMRenderer.unbatchedUpdates不使用batchedUpdates，因为这是初次渲染，需要尽快完成\n    DOMRenderer.unbatchedUpdates(() => {\n      if (parentComponent != null) {\n        // 向真实dom中挂载虚拟dom\n        root.legacy_renderSubtreeIntoContainer(\n          parentComponent,\n          children,\n          callback,\n        );\n      } else {\n      \t// 直接render\n        root.render(children, callback);\n      }\n    });\n  } else {\n  \t// 此处涉及到更新这一块\n    ...\n  }\n  // 返回container 中的dom\n  return DOMRenderer.getPublicRootInstance(root._internalRoot);\n}\n")])])]),t("p",[e._v("然后我们来看一下我们是如何初始化 root，创建一个 Fiber 对象的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function legacyCreateRootFromDOMContainer(\n  container: DOMContainer, // 这个传进来的是挂载子组件的节点，dom根节点\n  forceHydrate: boolean,\n): Root {\n\t// 是否服务端渲染 或者 判断dom节点是否已经被挂载\n  const shouldHydrate =\n    forceHydrate || shouldHydrateDueToLegacyHeuristic(container);\n  // First clear any existing content.\n  if (!shouldHydrate) {\n    let warned = false;\n    let rootSibling;\n    // 清空挂载dom根节点\n    while ((rootSibling = container.lastChild)) {\n      if (__DEV__) {\n        ...\n      }\n      container.removeChild(rootSibling);\n    }\n  }\n  if (__DEV__) {\n    ...\n  }\n  // Legacy roots are not async by default.\n  // 默认为同步状态\n  const isConcurrent = false;\n  return new ReactRoot(container, isConcurrent, shouldHydrate);\n}\n")])])]),t("p",[e._v("我们发现"),t("code",[e._v("legacyCreateRootFromDOMContainer")]),e._v("实际上做的只是在非 ssr 的情况下，将 dom 根节点清空，然后返回一个"),t("code",[e._v("new ReactRoot")]),e._v("，这里需要注意一点， root 默认是同步更新的， 即"),t("strong",[e._v("isConcurrent")]),e._v(" 默认为 false")]),e._v(" "),t("p",[e._v("那么重点就跑到了"),t("code",[e._v("ReactRoot")]),e._v("中")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function ReactRoot(\n  container: Container,// 这个传进来的是挂载子组件的节点，dom根节点\n  isConcurrent: boolean,  //root默认是同步更新的， isConcurrent 为false\n  hydrate: boolean,\n) {\n  const root = DOMRenderer.createContainer(container, isConcurrent, hydrate);\n  this._internalRoot = root;\n}\n")])])]),t("p",[e._v("从"),t("code",[e._v("ReactRoot")]),e._v("中， 我们把"),t("code",[e._v("createContainer")]),e._v("返回值赋给了 实例的"),t("code",[e._v("_internalRoot")]),e._v("， 往下看"),t("code",[e._v("createContainer")])]),e._v(" "),t("p",[t("code",[e._v("createContainer")]),e._v("这个函数不在"),t("code",[e._v("ReactDOM.js")]),e._v("中，找到"),t("code",[e._v("ReactFiberReconciler.js")]),e._v(",打开它，并找到")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function createContainer(\n  containerInfo: Container, // 这个传进来的是挂载子组件的节点，dom根节点\n  isConcurrent: boolean, //root默认是同步更新的， isConcurrent 为false\n  hydrate: boolean,\n): OpaqueRoot {\n  return createFiberRoot(containerInfo, isConcurrent, hydrate);\n}\n")])])]),t("p",[e._v("从"),t("code",[e._v("createContainer")]),e._v("看出， "),t("code",[e._v("createContainer")]),e._v("实际上是直接返回了"),t("code",[e._v("createFiberRoot")]),e._v(",")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function createFiberRoot(\n  containerInfo: any, // 这个传进来的是挂载子组件的节点，dom根节点\n  isConcurrent: boolean, //root默认是同步更新的， isConcurrent 为false\n  hydrate: boolean,\n): FiberRoot {\n\t// 创建FiberRoot\n  const uninitializedFiber = createHostRootFiber(isConcurrent);\n\n  let root;\n  // 对root赋值,详情在 React中的数据结构中 有\n  if (enableSchedulerTracing) {\n    root = ({\n    \tcurrent: uninitializedFiber\n      ...\n    }: FiberRoot);\n  } else {\n    root = ({\n    \tcurrent: uninitializedFiber\n      ...\n    }: BaseFiberRootProperties);\n  }\n\n  uninitializedFiber.stateNode = root;\n  return ((root: any): FiberRoot);\n}\n")])])]),t("p",[e._v("而"),t("code",[e._v("createFiberRoot")]),e._v("则是通过"),t("code",[e._v("createHostRootFiber")]),e._v("函数的返回值"),t("code",[e._v("uninitializedFiber")]),e._v("，并将其赋值在"),t("code",[e._v("root")]),e._v("对象的"),t("code",[e._v("current")]),e._v("上， 这里需要注意一个点就是，"),t("code",[e._v("uninitializedFiber")]),e._v("的"),t("code",[e._v("stateNode")]),e._v("的值是"),t("code",[e._v("root")]),e._v("， 即他们互相引用\n最后"),t("code",[e._v("createFiberRoot")]),e._v("返回了一个"),t("code",[e._v("fiberNode")]),e._v("的实例")]),e._v(" "),t("p",[e._v("我们来整理一下"),t("code",[e._v("createFiberRoot")]),e._v("中各个实力的关系")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" root为ReactRoot实例，\n root._internalRoot 即为fiberRoot实例，\n root._internalRoot.current即为Fiber实例，\n root._internalRoot.current.stateNode = root._internalRoot\n")])])]),t("p",[e._v("接下来我们看一下"),t("code",[e._v("uninitializedFiber")]),e._v("是什么，是怎么创建的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("createHostRootFiber(isConcurrent: boolean): Fiber { //root默认是同步更新的，isConcurrent为false\n\t// NoContext 的值为 0b000， 由于在一开始就将isAsync初始化为false， 所以mode实际上就代表了同步\n  let mode = isConcurrent ? ConcurrentMode | StrictMode : NoContext;\n\n  // devtools时收集配置文件计时,使得devtools可以在任何点开始捕获时间\n  if (enableProfilerTimer && isDevToolsPresent) {\n    mode |= ProfileMode;\n  }\n\t// HostRoot = 3; // 是一棵树的顶级节点。但是可以存在兄弟节点\n  return createFiber(HostRoot, null, null, mode);\n}\n\nconst createFiber = function(\n  tag: WorkTag, // 就是HostRoot = 3; // 是一棵树的顶级节点。\n  pendingProps: mixed, // 新的变动带来的新的props\n  key: null | string, // 就是react中用到的那个key\n  mode: TypeOfMode, // 同步的还是异步的。上面传入的是false，表示同步\n): Fiber {\n\t// 返回了一个Fiber节点\n  return new FiberNode(tag, pendingProps, key, mode);\n};\n")])])]),t("p",[t("code",[e._v("FiberNode")]),e._v("这个节点在文末具体讲解。到这里为止初始化"),t("code",[e._v("FiberRoot")]),e._v("已经完毕，接下来就要开始挂载节点了，挂载节点我们就要返回到上文提到的"),t("code",[e._v("legacyRenderSubtreeIntoContainer")]),e._v(",接着这个函数中"),t("code",[e._v("legacyCreateRootFromDOMContainer")]),e._v("的执行顺序，往下执行就是"),t("code",[e._v("DOMRenderer.unbatchedUpdates")]),e._v("，执行并传入一个回调函数，在"),t("code",[e._v("ReactFiberSchedule")]),e._v("中找到这个这个函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 这里顺手贴上这两个变量的初始值\nlet isBatchingUpdates: boolean = false; // 正在批量更新的标识\nlet isUnbatchingUpdates: boolean = false; // 未批量更新的标识\n\n// 非批量更新   fn 就是传入的回调的函数\nfunction unbatchedUpdates<A, R>(fn: (a: A) => R, a: A): R {\n\t// 正在批量更新\n  if (isBatchingUpdates && !isUnbatchingUpdates) {\n    isUnbatchingUpdates = true;\n    try {\n    \t// 将为未批量更新设置为true，运行fn，并返回\n      return fn(a);\n    } finally {\n    \t// 重置\n      isUnbatchingUpdates = false;\n    }\n  }\n  // 没有正在批量更新，运行fn，并返回。\n  return fn(a);\n}\n")])])]),t("p",[t("code",[e._v("unbatchedUpdates")]),e._v("中执行完之后，无论怎么判断，都走到了 "),t("code",[e._v("root.legacy_renderSubtreeIntoContainer")]),e._v(" 和 "),t("code",[e._v("root.render")]),e._v("。以为本章不涉及调度更新，所以只讲"),t("code",[e._v("root.render")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// root 是通过 ReactRoot new 出来的\nReactRoot.prototype.render = function(\n  children: ReactNodeList, // 子组件，就是React.Dom中传入的组件\n  callback: ?() => mixed, // 渲染完成后的回调\n): Work {\n\t// 在 ReactRoot 这个构造函数中，_internalRoot = root, 就是fiberRoot实例\n  const root = this._internalRoot;\n\n  const work = new ReactWork();\n  callback = callback === undefined ? null : callback;\n  if (__DEV__) {\n    ...\n  }\n  if (callback !== null) {\n    work.then(callback);\n  }\n  DOMRenderer.updateContainer(children, root, null, work._onCommit);\n  return work;\n};\n")])])]),t("p",[e._v("解释与一下"),t("code",[e._v("ReactWork")]),e._v(",这是一个很简单的东西，它有两个值"),t("code",[e._v("callbacks")]),e._v("和"),t("code",[e._v("didCommit")]),e._v("。通过执行"),t("code",[e._v("then")]),e._v("函数传入"),t("code",[e._v("callback")]),e._v("，如果判断到当前的"),t("code",[e._v("didCommit")]),e._v("为"),t("code",[e._v("false")]),e._v("的情况下，就将"),t("code",[e._v("callback")]),e._v("添加到"),t("code",[e._v("callbacks")]),e._v("数组内。然后通过执行"),t("code",[e._v("onCommit")]),e._v("去改变"),t("code",[e._v("didCommit")]),e._v("的值，之后循环执行"),t("code",[e._v("_callbacks")]),e._v("中的"),t("code",[e._v("callback")]),e._v("。在这里，我们就把"),t("code",[e._v("work._onCommit")]),e._v("当成一个回调函数就好了。")]),e._v(" "),t("p",[e._v("接下来，我们看到"),t("code",[e._v("root")]),e._v("即"),t("code",[e._v("FiberRoot")]),e._v("实例被当成函数传入了"),t("code",[e._v("updateContsainer")]),e._v(",在"),t("code",[e._v("ReactFiberSchedule.js")]),e._v("中找到这个这个函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function updateContainer(\n  element: ReactNodeList, // 子组件，就是React.Dom中传入的组件\n  container: OpaqueRoot, // FiberRoot, 顶级root节点\n  parentComponent: ?React$Component<any, any>, // null\n  callback: ?Function, // callback\n): ExpirationTime {\n\t// container的current 就是container对应的Fiber，就是FiberRoot\n  const current = container.current;\n  // currentTime是用来计算expirationTime\n  const currentTime = requestCurrentTime();\n  // expirationTime代表着优先级，expirationTime越小，优先级越高\n  // 同步模式下该值为 1， 每个层级的任务都是以链表的形式存在\n  // expirationTime 顾名思义就是这次更新的 超时时间, 留在后续分析\n  const expirationTime = computeExpirationForFiber(currentTime, current);\n\n  return updateContainerAtExpirationTime(\n    element,\n    container,\n    parentComponent,\n    expirationTime,\n    callback,\n  );\n}\n")])])]),t("p",[e._v("往下继续查看"),t("code",[e._v("updateContainerAtExpirationTime")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function updateContainerAtExpirationTime(\n  element: ReactNodeList, // 子组件，就是React.Dom中传入的组件\n  container: OpaqueRoot, // FiberRoot, 顶级root节点\n  parentComponent: ?React$Component<any, any>, // null\n  expirationTime: ExpirationTime, // 超时时间\n  callback: ?Function, // callback\n) {\n  // container的current 就是container对应的Fiber，就是FiberRoot\n  const current = container.current;\n\n  if (__DEV__) {\n    ...\n  }\n\n\t// parentComponent 为null，所以得到context为一个空对象 {}\n  const context = getContextForSubtree(parentComponent);\n  // container.context 为null\n  if (container.context === null) {\n    container.context = context;\n  } else {\n    container.pendingContext = context;\n  }\n\n\t// 开始调度\n  return scheduleRootUpdate(current, element, expirationTime, callback);\n}\n")])])]),t("p",[e._v("接下来继续查看"),t("code",[e._v("scheduleRootUpdate")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function scheduleRootUpdate(\n  current: Fiber, // current 就是container对应的Fiber，就是FiberRoot\n  element: ReactNodeList, // 子组件，就是React.Dom中传入的组件\n  expirationTime: ExpirationTime, // 超时时间\n  callback: ?Function, // callback\n) {\n  if (__DEV__) {\n    ...\n  }\n\t// 使用 createUpdate 创建 update 来标记 react 需要更新的点\n  const update = createUpdate(expirationTime);\n  // payload 就是setState中传入的对象，因为这里是更新组件，所以把整个子组件放进去更新\n  update.payload = {element};\n\n  if (callback !== null) {\n    ...\n  }\n  // enqueueUpdate 把 update 放入更新队列里 react 更新会在一个节点上整体进行很多个更新\n  // 这个更新 queue 就是管理多次更新的作用\n  enqueueUpdate(current, update);\n\n\t// 最后执行 scheduleWork 通知 react 进行调度，根据任务的优先级进行更新。\n  scheduleWork(current, expirationTime);\n  return expirationTime;\n}\n")])])]),t("p",[e._v("我们本章节的内容就到这里了")]),e._v(" "),t("p",[e._v("####来总结一下吧")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("初次渲染 传入 APP 组件和"),t("code",[e._v("getElementById(app)")]),e._v("执行 "),t("code",[e._v("ReactDOM.render")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("ReactDOM.render")]),e._v("返回并执行"),t("code",[e._v("legacyRenderSubtreeIntoContainer")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("legacyRenderSubtreeIntoContainer")]),e._v("内调用"),t("code",[e._v("legacyCreateRootFromDOMContainer")]),e._v("把返回值挂载到 "),t("code",[e._v("root")]),e._v("节点的"),t("code",[e._v("_reactRootContainer")]),e._v(" 属性上")]),e._v(" "),t("li",[e._v("而 "),t("code",[e._v("legacyCreateRootFromDOMContainer")]),e._v(" 把 "),t("code",[e._v("getElementById(root)")]),e._v(" 里的子节点清空，创建并返回 "),t("code",[e._v("new ReactRoot")]),e._v(" 给 "),t("code",[e._v("getElementById(root)")]),e._v("的"),t("code",[e._v("_reactRootContainer")]),e._v(" 属性上")]),e._v(" "),t("li",[t("code",[e._v("ReactRoot")]),e._v("生成实例时调用"),t("code",[e._v("react-reconcile")]),e._v("模块的"),t("code",[e._v("createContainer")]),e._v(" 传入 ge"),t("code",[e._v("tElementById(root)")]),e._v("执行"),t("code",[e._v("createFiberRoot")]),e._v(" 生成一个"),t("code",[e._v("FiberRoot")]),e._v(" 对象挂载到实例的 "),t("code",[e._v("_internalRoot")])])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("legacyRenderSubtreeIntoContainer")]),e._v("最终调用 上面生成的 "),t("code",[e._v("ReactRoot")]),e._v("实例的 "),t("code",[e._v("ReactRoot.prototype.render")]),e._v("原型方法")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("ReactRoot.prototype.render")]),e._v(" 把子节点和实例生成的 "),t("code",[e._v("_internalRoot Fiber")]),e._v(" 对象传入 "),t("code",[e._v("react-reconcile")]),e._v(" 模块的"),t("code",[e._v("updateContainer")]),e._v(" 中")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("在"),t("code",[e._v("updateContainer")]),e._v(" 中 计算出一个 "),t("code",[e._v("expirationTime")]),e._v(" 传入 "),t("code",[e._v("updateContainerAtExpirationTime")]),e._v(" 调用 "),t("code",[e._v("scheduleRootUpdate")]),e._v(" 中做三件事")]),e._v(" "),t("blockquote",[t("p",[e._v("1、使用"),t("code",[e._v("createUpdate")]),e._v(" 创建 update 来标记 react 需要更新的点")]),e._v(" "),t("p",[e._v("2、设置完 update 属性再调用"),t("code",[e._v("enqueueUpdate")]),e._v("把 update 放入当前节点树整体的更新队列里")]),e._v(" "),t("p",[e._v("3、最后执行"),t("code",[e._v("scheduleWork")]),e._v("通知 react 进行调度，根据任务的优先级进行更新")])])])])])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("ReactDOM.render")]),e._v("此时")]),e._v(" "),t("ul",[t("li",[e._v("创建了一个 "),t("code",[e._v("ReactRoot")]),e._v(" 对象挂载到 "),t("code",[e._v("getElementById(root)")]),e._v(" 的"),t("code",[e._v("_reactRootContainer")]),e._v(" 属性上")]),e._v(" "),t("li",[e._v("同时 在"),t("code",[e._v("ReactRoot")]),e._v(" 实例 "),t("code",[e._v("_internalRoot")]),e._v("属性上生成了 "),t("code",[e._v("Fiber")]),e._v("对象")]),e._v(" "),t("li",[e._v("调用 "),t("code",[e._v("ReactRoot.prototype.render")]),e._v(" 执行"),t("code",[e._v("react-reconcile")]),e._v(" 模块的"),t("code",[e._v("updateContainer")]),e._v("计算 "),t("code",[e._v("expirationTime")]),e._v("，通过 "),t("code",[e._v("expirationTime")]),e._v(" 来创建"),t("code",[e._v("update")]),e._v("对象，推入 "),t("code",[e._v("updateQueue")]),e._v(" 内，最后根据优先级进行调度。")])])])])])},[],!1,null,null,null);n.default=a.exports}}]);