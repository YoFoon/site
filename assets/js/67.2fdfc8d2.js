(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{265:function(e,t,a){"use strict";a.r(t);var r=a(4),v=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"react-面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-面试题","aria-hidden":"true"}},[e._v("#")]),e._v(" React 面试题")]),e._v(" "),a("h2",{attrs:{id:"react-最新的生命周期是怎样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-最新的生命周期是怎样的","aria-hidden":"true"}},[e._v("#")]),e._v(" React 最新的生命周期是怎样的?")]),e._v(" "),a("p",[e._v("React 16 之后有三个生命周期被废弃(但并未删除)")]),e._v(" "),a("ul",[a("li",[e._v("componentWillMount")]),e._v(" "),a("li",[e._v("componentWillReceiveProps")]),e._v(" "),a("li",[e._v("componentWillUpdate")])]),e._v(" "),a("p",[e._v("官方计划在 17 版本完全删除这三个函数，只保留 UNSAVE_前缀的三个函数，目的是为了向下兼容，但是对于开发者而言应该尽量避免使用他们，而是使用新增的生命周期函数替代它们")]),e._v(" "),a("p",[e._v("挂载阶段:")]),e._v(" "),a("ul",[a("li",[e._v("constructor: 构造函数，最先被执行,我们通常在构造函数里初始化 state 对象或者给自定义方法绑定 this")]),e._v(" "),a("li",[e._v("getDerivedStateFromProps: "),a("code",[e._v("static getDerivedStateFromProps(nextProps, prevState)")]),e._v(",这是个静态方法,当我们接收到新的属性想去修改我们 state，可以使用 getDerivedStateFromProps")]),e._v(" "),a("li",[e._v("render: render 函数是纯函数，只返回需要渲染的东西，不应该包含其它的业务逻辑,可以返回原生的 DOM、React 组件、Fragment、Portals、字符串和数字、Boolean 和 null 等内容")]),e._v(" "),a("li",[e._v("componentDidMount: 组件装载之后调用，此时我们可以获取到 DOM 节点并操作，比如对 canvas，svg 的操作，服务器请求，订阅都可以写在这个里面，但是记得在 componentWillUnmount 中取消订阅")])]),e._v(" "),a("p",[e._v("更新阶段:")]),e._v(" "),a("ul",[a("li",[e._v("getDerivedStateFromProps: 此方法在更新个挂载阶段都可能会调用")]),e._v(" "),a("li",[e._v("shouldComponentUpdate: "),a("code",[e._v("shouldComponentUpdate(nextProps, nextState)")]),e._v(",有两个参数 nextProps 和 nextState，表示新的属性和变化之后的 state，返回一个布尔值，true 表示会触发重新渲染，false 表示不会触发重新渲染，默认返回 true,我们通常利用此生命周期来优化 React 程序性能")]),e._v(" "),a("li",[e._v("render: 更新阶段也会触发此生命周期")]),e._v(" "),a("li",[e._v("getSnapshotBeforeUpdate: "),a("code",[e._v("getSnapshotBeforeUpdate(prevProps, prevState)")]),e._v(",这个方法在 render 之后，componentDidUpdate 之前调用，有两个参数 prevProps 和 prevState，表示之前的属性和之前的 state，这个函数有一个返回值，会作为第三个参数传给 componentDidUpdate，如果你不想要返回值，可以返回 null，此生命周期必须与 componentDidUpdate 搭配使用")]),e._v(" "),a("li",[e._v("componentDidUpdate: "),a("code",[e._v("componentDidUpdate(prevProps, prevState, snapshot)")]),e._v(",该方法在 getSnapshotBeforeUpdate 方法之后被调用，有三个参数 prevProps，prevState，snapshot，表示之前的 props，之前的 state，和 snapshot。第三个参数是 getSnapshotBeforeUpdate 返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态。")])]),e._v(" "),a("p",[e._v("卸载阶段:")]),e._v(" "),a("ul",[a("li",[e._v("componentWillUnmount: 当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的 DOM 元素等垃圾清理工作")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://qnm.hunliji.com/Fh3PiwrPfl5Jk1GksHi91gMQRrpN",alt:"生命周期"}})]),e._v(" "),a("blockquote",[a("p",[e._v("一个查看 react 生命周期的"),a("a",{attrs:{href:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[e._v("网站"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"react-的请求应该放在哪个生命周期中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-的请求应该放在哪个生命周期中","aria-hidden":"true"}},[e._v("#")]),e._v(" React 的请求应该放在哪个生命周期中?")]),e._v(" "),a("p",[e._v("不要在 "),a("code",[e._v("componentWillMount")]),e._v(" 中添加事件监听")]),e._v(" "),a("p",[a("code",[e._v("componentWillMount")]),e._v(" 可以被打断或调用多次，因此无法保证事件监听能在 unmount 的时候被成功卸载，可能会引起内存泄露")]),e._v(" "),a("p",[e._v("由于 React 未来的版本中推出了异步渲染，在 "),a("code",[e._v("dom")]),e._v(" 被挂载之前的阶段都可以被打断重来，导致 "),a("code",[e._v("componentWillMount")]),e._v("、"),a("code",[e._v("componentWillUpdate")]),e._v("、"),a("code",[e._v("componentWillReceiveProps")]),e._v(" 在一次更新中可能会被触发多次，因此那些只希望触发一次的副作用应该放在 "),a("code",[e._v("componentDidMount")]),e._v(" 中")]),e._v(" "),a("p",[e._v("这也就是为什么要把异步请求放在 "),a("code",[e._v("componentDidMount")]),e._v(" 中，而不是放在 "),a("code",[e._v("componentWillMount")]),e._v(" 中的原因，为了向后兼容")]),e._v(" "),a("p",[e._v("目前官方推荐的异步请求是在"),a("code",[e._v("componentDidmount")]),e._v("中进行.")]),e._v(" "),a("p",[e._v("如果有特殊需求需要提前请求,也可以在特殊情况下在"),a("code",[e._v("constructor")]),e._v("中请求")]),e._v(" "),a("blockquote",[a("p",[e._v("react 17 之后"),a("code",[e._v("componentWillMount")]),e._v("会被废弃,仅仅保留"),a("code",[e._v("UNSAFE_componentWillMount")])])]),e._v(" "),a("h2",{attrs:{id:"setstate-到底是异步还是同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setstate-到底是异步还是同步","aria-hidden":"true"}},[e._v("#")]),e._v(" setState 到底是异步还是同步?")]),e._v(" "),a("p",[e._v("先给出答案: 有时表现出异步,有时表现出同步")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("setState")]),e._v("只在合成事件(setState)和钩子函数(生命周期)中是“异步”的，在原生事件(addEventListener)和setTimeout中都是同步的。")]),e._v(" "),a("li",[a("code",[e._v("setState")]),e._v("  的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数  "),a("code",[e._v("setState(partialState, callback)")]),e._v("  中的"),a("code",[e._v("callback")]),e._v("拿到更新后的结果。")]),e._v(" "),a("li",[a("code",[e._v("setState")]),e._v("  的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和 setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次"),a("code",[e._v("setState")]),e._v("，"),a("code",[e._v("setState")]),e._v("的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时"),a("code",[e._v("setState")]),e._v("多个不同的值，在更新时会对其进行合并批量更新。")])]),e._v(" "),a("h2",{attrs:{id:"react-组件通信如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-组件通信如何实现","aria-hidden":"true"}},[e._v("#")]),e._v(" React 组件通信如何实现?")]),e._v(" "),a("p",[e._v("React 组件间通信方式:")]),e._v(" "),a("ul",[a("li",[e._v("父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯")]),e._v(" "),a("li",[e._v("子组件向父组件通讯: props+回调的方式,父组件向子组件传递 props 进行通讯，此 props 为作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中")]),e._v(" "),a("li",[e._v("兄弟组件通信: 找到这两个兄弟节点共同的父节点,结合上面两种方式由父节点转发信息进行通信")]),e._v(" "),a("li",[e._v("跨层级通信: "),a("code",[e._v("Context")]),e._v("设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言,\b 对于跨越多层的全局数据通过"),a("code",[e._v("Context")]),e._v("通信再适合不过")]),e._v(" "),a("li",[e._v("发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引入 event 模块进行通信"),a("a",{attrs:{href:"https://juejin.im/post/5d44e3745188255d5861d654",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("全局状态管理工具: 借助 Redux 或者 Mobx 等全局状态管理工具进行通信,这种工具会维护一个全局状态中心 Store,并根据不同的事件产生新的状态")])]),e._v(" "),a("h2",{attrs:{id:"react-有哪些优化性能是手段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-有哪些优化性能是手段","aria-hidden":"true"}},[e._v("#")]),e._v(" React 有哪些优化性能是手段?")]),e._v(" "),a("p",[e._v("性能优化的手段很多时候是通用的详情见"),a("router-link",{attrs:{to:"/knowledge/load.html"}},[e._v("前端性能优化加载篇")])],1),e._v(" "),a("h2",{attrs:{id:"react-如何进行组件-逻辑复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-如何进行组件-逻辑复用","aria-hidden":"true"}},[e._v("#")]),e._v(" React 如何进行组件/逻辑复用?")]),e._v(" "),a("p",[e._v("抛开已经被官方弃用的 Mixin,组件抽象的技术目前有三种比较主流:")]),e._v(" "),a("ul",[a("li",[e._v("高阶组件:\n"),a("ul",[a("li",[e._v("属性代理")]),e._v(" "),a("li",[e._v("反向继承")])])]),e._v(" "),a("li",[e._v("渲染属性")]),e._v(" "),a("li",[e._v("react-hooks")])]),e._v(" "),a("p",[e._v("组件复用详解见"),a("router-link",{attrs:{to:"/knowledge/abstract.html"}},[e._v("组件复用")])],1),e._v(" "),a("h2",{attrs:{id:"react-hooks-优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks-优点","aria-hidden":"true"}},[e._v("#")]),e._v(" React Hooks 优点")]),e._v(" "),a("ul",[a("li",[e._v("简洁: React Hooks 解决了 HOC 和 Render Props 的嵌套问题,更加简洁")]),e._v(" "),a("li",[e._v("解耦: React Hooks 可以更方便地把 UI 和状态分离,做到更彻底的解耦")]),e._v(" "),a("li",[e._v("组合: Hooks 中可以引用另外的 Hooks 形成新的 Hooks,组合变化万千")]),e._v(" "),a("li",[e._v("函数友好: React Hooks 为函数组件而生,从而解决了类组件的几大问题:\n"),a("ul",[a("li",[e._v("this 指向容易错误")]),e._v(" "),a("li",[e._v("分割在不同声明周期中的逻辑使得代码难以理解和维护")]),e._v(" "),a("li",[e._v("代码复用成本高（高阶组件容易使代码量剧增）")])])])]),e._v(" "),a("h2",{attrs:{id:"react-hooks-缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-hooks-缺陷","aria-hidden":"true"}},[e._v("#")]),e._v(" React Hooks 缺陷")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("额外的学习成本（Functional Component 与 Class Component 之间的困惑）")])]),e._v(" "),a("li",[a("p",[e._v("写法上有限制（不能出现在条件、循环中），并且写法限制增加了重构成本")])]),e._v(" "),a("li",[a("p",[e._v("破坏了 PureComponent、React.memo 浅比较的性能优化效果（为了取最新的 props 和 state，每次 render()都要重新创建事件处函数）")])]),e._v(" "),a("li",[a("p",[e._v("在闭包场景可能会引用到旧的 state、props 值")])]),e._v(" "),a("li",[a("p",[e._v("内部实现上不直观（依赖一份可变的全局状态，不再那么“纯”）")])]),e._v(" "),a("li",[a("p",[e._v("React.memo 并不能完全替代 shouldComponentUpdate（因为拿不到 state change，只针对 props change）")])])]),e._v(" "),a("blockquote",[a("p",[e._v("关于 react-hooks 的评价来源于官方"),a("a",{attrs:{href:"https://github.com/reactjs/rfcs/blob/master/text/0068-react-hooks.md#drawbacks",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-hooks RFC"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"你是如何理解-fiber-的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你是如何理解-fiber-的","aria-hidden":"true"}},[e._v("#")]),e._v(" 你是如何理解 fiber 的?")]),e._v(" "),a("p",[e._v("React Fiber 是一种基于浏览器的"),a("strong",[e._v("单线程调度算法")]),e._v(".")]),e._v(" "),a("p",[e._v("React 16 之前 ，"),a("code",[e._v("reconcilation")]),e._v("  算法实际上是递归，想要中断递归是很困难的，React 16 开始使用了循环来代替之前的递归.")]),e._v(" "),a("p",[a("code",[e._v("Fiber")]),e._v("：一种将 "),a("code",[e._v("recocilation")]),e._v(" （递归 diff），拆分成无数个小任务的算法；它随时能够停止，恢复。停止恢复的时机取决于当前的一帧（16ms）内，还有没有足够的时间允许计算。")]),e._v(" "),a("h2",{attrs:{id:"你对-time-slice-的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你对-time-slice-的理解","aria-hidden":"true"}},[e._v("#")]),e._v(" 你对 Time Slice 的理解?")]),e._v(" "),a("p",[a("strong",[e._v("时间分片")])]),e._v(" "),a("ul",[a("li",[e._v("React 在渲染（render）的时候，不会阻塞现在的线程")]),e._v(" "),a("li",[e._v("如果你的设备足够快，你会感觉渲染是同步的")]),e._v(" "),a("li",[e._v("如果你设备非常慢，你会感觉还算是灵敏的")]),e._v(" "),a("li",[e._v("虽然是异步渲染，但是你将会看到完整的渲染，而不是一个组件一行行的渲染出来")]),e._v(" "),a("li",[e._v("同样书写组件的方式")])]),e._v(" "),a("p",[e._v("也就是说，这是 React 背后在做的事情，对于我们开发者来说，是透明的，具体是什么样的效果呢？")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://qnm.hunliji.com/Fr-h5um6oxUGYLZQm8_C8qXdhDja",alt:""}}),e._v("\n有图表三个图表，有一个输入框，以及上面的三种模式"),a("br"),a("strong",[e._v("这个组件非常的巨大，而且在输入框")]),e._v("每次**输入东西的时候，就会进去一直在渲染。**为了更好的看到渲染的性能，Dan 为我们做了一个表。")]),e._v(" "),a("p",[e._v("我们先看看，同步模式：\n"),a("img",{attrs:{src:"https://qnm.hunliji.com/FsQ2X_Voxm_swy9TbYg9ga1HTVxN",alt:""}})]),e._v(" "),a("p",[e._v("同步模式下，我们都知道，我们没输入一个字符，React 就开始渲染，当 React 渲染一颗巨大的树的时候，是非常卡的，所以才会有 shouldUpdate 的出现，在这里 Dan 也展示了，这种卡！")]),e._v(" "),a("p",[e._v("我们再来看看第二种（Debounced 模式）：\n"),a("img",{attrs:{src:"https://qnm.hunliji.com/FuYu434XPDd1bZMWn1Gcvei4Z1sR",alt:""}})]),e._v(" "),a("p",[e._v("Debounced 模式简单的来说，就是延迟渲染，比如，当你输入完成以后，再开始渲染所有的变化。"),a("br"),e._v("这么做的坏处就是，至少不会阻塞用户的输入了，但是依然有非常严重的卡顿。")]),e._v(" "),a("p",[e._v("切换到异步模式：\n"),a("img",{attrs:{src:"https://qnm.hunliji.com/Fifu0QfOFkklJJnzFMqkgDvgqeGq",alt:""}})]),e._v(" "),a("p",[e._v("异步渲染模式就是不阻塞当前线程，继续跑。在视频里可以看到所有的输入，表上都会是原谅色的。")]),e._v(" "),a("p",[e._v("时间分片正是基于可随时打断、重启的 Fiber 架构,可打断当前任务,优先处理紧急且重要的任务,保证页面的流畅运行.")]),e._v(" "),a("h2",{attrs:{id:"redux-的工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-的工作流程","aria-hidden":"true"}},[e._v("#")]),e._v(" redux 的工作流程?")]),e._v(" "),a("p",[e._v("首先，我们看下几个核心概念：")]),e._v(" "),a("ul",[a("li",[e._v("Store：保存数据的地方，你可以把它看成一个容器，整个应用只能有一个 Store。")]),e._v(" "),a("li",[e._v("State：Store 对象包含所有数据，如果想得到某个时点的数据，就要对 Store 生成快照，这种时点的数据集合，就叫做 State。")]),e._v(" "),a("li",[e._v("Action：State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。")]),e._v(" "),a("li",[e._v("Action Creator：View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦，所以我们定义一个函数来生成 Action，这个函数就叫 Action Creator。")]),e._v(" "),a("li",[e._v("Reducer：Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。")]),e._v(" "),a("li",[e._v("dispatch：是 View 发出 Action 的唯一方法。")])]),e._v(" "),a("p",[e._v("然后我们过下整个工作流程：")]),e._v(" "),a("ol",[a("li",[e._v("首先，用户（通过 View）发出 Action，发出方式就用到了 dispatch 方法。")]),e._v(" "),a("li",[e._v("然后，Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action，Reducer 会返回新的 State")]),e._v(" "),a("li",[e._v("State 一旦有变化，Store 就会调用监听函数，来更新 View。")])]),e._v(" "),a("p",[e._v("到这儿为止，一次用户交互流程结束。可以看到，在整个流程中数据都是单向流动的，这种方式保证了流程的清晰。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/0ab0e624522ae6efef415b53cb923bf7.png",alt:"2019-08-01-17-29-20"}})]),e._v(" "),a("h2",{attrs:{id:"react-redux-是如何工作的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-redux-是如何工作的","aria-hidden":"true"}},[e._v("#")]),e._v(" react-redux 是如何工作的?")]),e._v(" "),a("ul",[a("li",[e._v("Provider: Provider 的作用是从最外部封装了整个应用，并向 connect 模块传递 store")]),e._v(" "),a("li",[e._v("connect: 负责连接 React 和 Redux\n"),a("ul",[a("li",[e._v("获取 state: connect 通过 context 获取 Provider 中的 store，通过 store.getState()获取整个 store tree 上所有 state")]),e._v(" "),a("li",[e._v("包装原组件: 将 state 和 action 通过 props 的方式传入到原组件内部 wrapWithConnect 返回一个 ReactComponent 对象 Connect，Connect 重新 render 外部传入的原组件 WrappedComponent，并把 connect 中传入的 mapStateToProps, mapDispatchToProps 与组件上原有的 props 合并后，通过属性的方式传给 WrappedComponent")]),e._v(" "),a("li",[e._v("监听 store tree 变化: connect 缓存了 store tree 中 state 的状态,通过当前 state 状态和变更前 state 状态进行比较,从而确定是否调用"),a("code",[e._v("this.setState()")]),e._v("方法触发 Connect 及其子组件的重新渲染")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/710f0a9f0a8e6a320f55fa0ca795a3c7.png",alt:"2019-08-01-22-21-51"}})]),e._v(" "),a("h2",{attrs:{id:"react合成事件和dom原生事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react合成事件和dom原生事件","aria-hidden":"true"}},[e._v("#")]),e._v(" React合成事件和DOM原生事件")]),e._v(" "),a("h3",{attrs:{id:"先说一下结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先说一下结论","aria-hidden":"true"}},[e._v("#")]),e._v(" 先说一下结论")]),e._v(" "),a("ul",[a("li",[e._v("合成事件的监听器是统一注册在document上的，且仅有冒泡阶段。"),a("strong",[e._v("所以原生事件的监听器响应总是比合成事件的监听器早")])]),e._v(" "),a("li",[e._v("阻止原生事件的冒泡后，会阻止合成事件的监听器执行")])]),e._v(" "),a("h3",{attrs:{id:"响应顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应顺序","aria-hidden":"true"}},[e._v("#")]),e._v(" 响应顺序")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Demo extends Component {\n  componentDidMount() {\n      const $this = ReactDOM.findDOMNode(this)\n      $this.addEventListener('click', this.onDOMClick, false)\n  }\n  onDOMClick = evt => { console.log('dom event') }\n  onClick = evt => { console.log('react event') }\n  render() {\n      return <div onClick={this.onClick}>Demo</div>\n  }\n}\n")])])]),a("p",[e._v("最终控制台输出为：")]),e._v(" "),a("blockquote",[a("p",[e._v("dom event    react event")])]),e._v(" "),a("h3",{attrs:{id:"阻止冒泡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阻止冒泡","aria-hidden":"true"}},[e._v("#")]),e._v(" 阻止冒泡")]),e._v(" "),a("p",[e._v("如果在onDOMClick中调用evt.stopPropagation()呢？")]),e._v(" "),a("p",[e._v("由于DOM事件被阻止冒泡了，无法到达document，所以合成事件自然不会被触发，控制台输出就变成了：")]),e._v(" "),a("blockquote",[a("p",[e._v("dom event")])]),e._v(" "),a("h2",{attrs:{id:"redux-与-mobx-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-与-mobx-的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" redux 与 mobx 的区别?")]),e._v(" "),a("p",[a("strong",[e._v("两者对比:")])]),e._v(" "),a("ul",[a("li",[e._v("redux 将数据保存在单一的 store 中，mobx 将数据保存在分散的多个 store 中")]),e._v(" "),a("li",[e._v("redux 使用 plain object 保存数据，需要手动处理变化后的操作；mobx 适用 observable 保存数据，数据变化后自动处理响应的操作")]),e._v(" "),a("li",[e._v("redux 使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数；mobx 中的状态是可变的，可以直接对其进行修改")]),e._v(" "),a("li",[e._v("mobx 相对来说比较简单，在其中有很多的抽象，mobx 更多的使用面向对象的编程思维；redux 会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用")]),e._v(" "),a("li",[e._v("mobx 中有更多的抽象和封装，调试会比较困难，同时结果也难以预测；而 redux 提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易")])]),e._v(" "),a("p",[a("strong",[e._v("场景辨析:")])]),e._v(" "),a("p",[e._v("基于以上区别,我们可以简单得分析一下两者的不同使用场景.")]),e._v(" "),a("p",[e._v("mobx 更适合数据不复杂的应用: mobx 难以调试,很多状态无法回溯,面对复杂度高的应用时,往往力不从心.")]),e._v(" "),a("p",[e._v("redux 适合有回溯需求的应用: 比如一个画板应用、一个表格应用，很多时候需要撤销、重做等操作，由于 redux 不可变的特性，天然支持这些操作.")]),e._v(" "),a("p",[e._v("mobx 适合短平快的项目: mobx 上手简单,样板代码少,可以很大程度上提高开发效率.")]),e._v(" "),a("p",[e._v("当然 mobx 和 redux 也并不一定是非此即彼的关系,你也可以在项目中用 redux 作为全局状态管理,用 mobx 作为组件局部状态管理器来用.")]),e._v(" "),a("h2",{attrs:{id:"redux-中如何进行异步操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-中如何进行异步操作","aria-hidden":"true"}},[e._v("#")]),e._v(" redux 中如何进行异步操作?")]),e._v(" "),a("p",[e._v("当然,我们可以在"),a("code",[e._v("componentDidmount")]),e._v("中直接进行请求无须借助 redux.")]),e._v(" "),a("p",[e._v("但是在一定规模的项目中,上述方法很难进行异步流的管理,通常情况下我们会借助 redux 的异步中间件进行异步处理.")]),e._v(" "),a("p",[e._v("redux 异步流中间件其实有很多,但是当下主流的异步中间件只有两种 redux-thunk、redux-saga，当然 redux-observable 可能也有资格占据一席之地,其余的异步中间件不管是社区活跃度还是 npm 下载量都比较差了.")]),e._v(" "),a("h2",{attrs:{id:"redux-异步中间件之间的优劣"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-异步中间件之间的优劣","aria-hidden":"true"}},[e._v("#")]),e._v(" redux 异步中间件之间的优劣?")]),e._v(" "),a("p",[a("strong",[e._v("redux-thunk 优点:")])]),e._v(" "),a("ul",[a("li",[e._v("体积小: redux-thunk 的实现方式很简单,只有不到 20 行代码")]),e._v(" "),a("li",[e._v("使用简单: redux-thunk 没有引入像 redux-saga 或者 redux-observable 额外的范式,上手简单")])]),e._v(" "),a("p",[a("strong",[e._v("redux-thunk 缺陷:")])]),e._v(" "),a("ul",[a("li",[e._v("样板代码过多: 与 redux 本身一样,通常一个请求需要大量的代码,而且很多都是重复性质的")]),e._v(" "),a("li",[e._v("耦合严重: 异步操作与 redux 的 action 偶合在一起,不方便管理")]),e._v(" "),a("li",[e._v("功能孱弱: 有一些实际开发中常用的功能需要自己进行封装")])]),e._v(" "),a("p",[a("strong",[e._v("redux-saga 优点:")])]),e._v(" "),a("ul",[a("li",[e._v("异步解耦: 异步操作被被转移到单独 saga.js 中，不再是掺杂在 action.js 或 component.js 中")]),e._v(" "),a("li",[e._v("action 摆脱 thunk function: dispatch 的参数依然是一个纯粹的 action (FSA)，而不是充满 “黑魔法” thunk function")]),e._v(" "),a("li",[e._v("异常处理: 受益于 generator function 的 saga 实现，代码异常/请求失败 都可以直接通过 try/catch 语法直接捕获处理")]),e._v(" "),a("li",[e._v("功能强大: redux-saga 提供了大量的 Saga 辅助函数和 Effect 创建器供开发者使用,开发者无须封装或者简单封装即可使用")]),e._v(" "),a("li",[e._v("灵活: redux-saga 可以将多个 Saga 可以串行/并行组合起来,形成一个非常实用的异步 flow")]),e._v(" "),a("li",[e._v("易测试，提供了各种 case 的测试方案，包括 mock task，分支覆盖等等")])]),e._v(" "),a("p",[a("strong",[e._v("redux-saga 缺陷:")])]),e._v(" "),a("ul",[a("li",[e._v("额外的学习成本: redux-saga 不仅在使用难以理解的 generator function,而且有数十个 API,学习成本远超 redux-thunk,最重要的是你的额外学习成本是只服务于这个库的,与 redux-observable 不同,redux-observable 虽然也有额外学习成本但是背后是 rxjs 和一整套思想")]),e._v(" "),a("li",[e._v("体积庞大: 体积略大,代码近 2000 行，min 版 25KB 左右")]),e._v(" "),a("li",[e._v("功能过剩: 实际上并发控制等功能很难用到,但是我们依然需要引入这些代码")]),e._v(" "),a("li",[e._v("ts 支持不友好: yield 无法返回 TS 类型")])]),e._v(" "),a("p",[a("strong",[e._v("redux-observable 优点:")])]),e._v(" "),a("ul",[a("li",[e._v("功能最强: 由于背靠 rxjs 这个强大的响应式编程的库,借助 rxjs 的操作符,你可以几乎做任何你能想到的异步处理")]),e._v(" "),a("li",[e._v("背靠 rxjs: 由于有 rxjs 的加持,如果你已经学习了 rxjs,redux-observable 的学习成本并不高,而且随着 rxjs 的升级 redux-observable 也会变得更强大")])]),e._v(" "),a("p",[a("strong",[e._v("redux-observable 缺陷:")])]),e._v(" "),a("ul",[a("li",[e._v("学习成本奇高: 如果你不会 rxjs,则需要额外学习两个复杂的库")]),e._v(" "),a("li",[e._v("社区一般: redux-observable 的下载量只有 redux-saga 的 1/5,社区也不够活跃,在复杂异步流中间件这个层面 redux-saga 仍处于领导地位")])]),e._v(" "),a("blockquote",[a("p",[e._v("关于 redux-saga 与 redux-observable 的详细比较可见"),a("a",{attrs:{href:"https://hackmd.io/@2qVnJRlJRHCk20dvVxsySA/H1xLHUQ8e?type=view#side-by-side-**comparison**",target:"_blank",rel:"noopener noreferrer"}},[e._v("此链接"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=v.exports}}]);