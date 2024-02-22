(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{709:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#什么是幂等性"}},[s._v("什么是幂等性")])]),t("li",[t("a",{attrs:{href:"#哪些情况需要防止"}},[s._v("哪些情况需要防止")])]),t("li",[t("a",{attrs:{href:"#什么情况下需要幂等"}},[s._v("什么情况下需要幂等")])]),t("li",[t("a",{attrs:{href:"#幂等解决方案"}},[s._v("幂等解决方案")]),t("ul",[t("li",[t("a",{attrs:{href:"#token-机制"}},[s._v("token 机制")])]),t("li",[t("a",{attrs:{href:"#各种锁机制"}},[s._v("各种锁机制")])]),t("li",[t("a",{attrs:{href:"#各种唯一约束"}},[s._v("各种唯一约束")])]),t("li",[t("a",{attrs:{href:"#redis-set-防重"}},[s._v("redis set 防重")])]),t("li",[t("a",{attrs:{href:"#防重表"}},[s._v("防重表")])]),t("li",[t("a",{attrs:{href:"#全局请求唯一-id"}},[s._v("全局请求唯一 id")])])])])])]),t("p"),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("序言")]),s._v(" "),t("p",[s._v("幂等性在中间件文档都有讲过：怎么利用中间件解决幂等性。")]),s._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[s._v("2023-07-05 @Young Kbt")])])]),s._v(" "),t("h2",{attrs:{id:"什么是幂等性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是幂等性"}},[s._v("#")]),s._v(" 什么是幂等性")]),s._v(" "),t("p",[t("strong",[s._v("接口幂等性就是用户对于同一操作发起的一次请求或者多次请求的结果是一致的")]),s._v("，不会因为多次点击而产生了副作用；比如说支付场景，用户购买了商品支付扣款成功，但是返回结果的时候网络异常，此时钱已经扣了，用户再次点击按钮，此时会进行第二次扣款，返回结果成功，用户查询余额返发现多扣钱了，流水记录也变成了两条，这就没有保证接口的幂等性。")]),s._v(" "),t("h2",{attrs:{id:"哪些情况需要防止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哪些情况需要防止"}},[s._v("#")]),s._v(" 哪些情况需要防止")]),s._v(" "),t("ul",[t("li",[s._v("用户多次点击按钮")]),s._v(" "),t("li",[s._v("用户页面回退再次提交")]),s._v(" "),t("li",[s._v("微服务互相调用，由于网络问题，导致请求失败。")]),s._v(" "),t("li",[s._v("feign 触发重试机制")]),s._v(" "),t("li",[s._v("其他业务情况")])]),s._v(" "),t("h2",{attrs:{id:"什么情况下需要幂等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下需要幂等"}},[s._v("#")]),s._v(" 什么情况下需要幂等")]),s._v(" "),t("p",[s._v("以 SQL 为例，有些操作是天然幂等的。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" WHER id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("无论执行多少次都不会改变状态，是天然的幂等。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" tab1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" col1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" col2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("无论执行成功多少次状态都是一致的，也是幂等操作。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" userid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("多次操作，结果一样，具备幂等性。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如 userid 为唯一主键，即重复操作上面的业务，只会插入一条用户数据，具备幂等性。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" tab1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" col1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("col1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" col2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("每次执行的结果都会发生变化，不是幂等的。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如 userid 不是主键，可以重复，那上面业务多次操作，数据都会新增多条，不具备幂等性。")]),s._v(" "),t("h2",{attrs:{id:"幂等解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#幂等解决方案"}},[s._v("#")]),s._v(" 幂等解决方案")]),s._v(" "),t("h3",{attrs:{id:"token-机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#token-机制"}},[s._v("#")]),s._v(" token 机制")]),s._v(" "),t("ul",[t("li",[s._v("服务端提供了发送 token 的接口。我们在分析业务的时候，哪些业务是存在幂等问题的，就必须在执行业务前，先去获取 token，服务器会把 token 保存到 redis 中")]),s._v(" "),t("li",[s._v("然后调用业务接口请求时，把 token 携带过去，一般放在请求头部")]),s._v(" "),t("li",[s._v("服务器判断 token 是否存在 redis 中，存在表示第一次请求，然后删除 token,继续执行业务")]),s._v(" "),t("li",[s._v("如果判断 token 不存在 redis 中，就表示是重复操作，直接返回重复标记给 client，这样就保证了业务代码，不被重复执行")])]),s._v(" "),t("p",[s._v("危险性：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("先删除 token 还是后删除 token")]),s._v(" "),t("ul",[t("li",[s._v("先删除可能导致，业务确实没有执行，重试还带上之前 token，由于防重设计导致，请求还是不能执行")]),s._v(" "),t("li",[s._v("后删除可能导致，业务处理成功，但是服务闪断，出现超时，没有删除 token，别人继续重试，导致业务被执行两边")]),s._v(" "),t("li",[s._v("我们最好设计为先删除 token，如果业务调用失败，就重新获取 token 再次请求。")])])]),s._v(" "),t("li",[t("p",[s._v("Token 获取、比较和删除必须是原子性")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("redis.get(token)")]),s._v("、"),t("code",[s._v("token.equals")]),s._v("、"),t("code",[s._v("redis.del(token)")]),s._v(" 如果这两个操作不是原子，可能导致，高并发下，都 get 到同样的数据，判断都成功，继续业务并发执行")])]),s._v(" "),t("li",[t("p",[s._v("可以在 redis 使用 lua 脚本完成这个操作")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" redis.call"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get'")]),s._v(", KEYS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" ARGV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" redis.call"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'del'")]),s._v(", KEYS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" end\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])])]),s._v(" "),t("h3",{attrs:{id:"各种锁机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各种锁机制"}},[s._v("#")]),s._v(" 各种锁机制")]),s._v(" "),t("h4",{attrs:{id:"数据库悲观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库悲观锁"}},[s._v("#")]),s._v(" 数据库悲观锁")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" xxxx "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("悲观锁使用时一般伴随事务一起使用，数据锁定时间可能会很长，需要根据实际情况选用。另外要注意的是，id 字段一定是主键或者唯一索引，不然可能造成锁表的结果，处理起来会非常麻烦。")]),s._v(" "),t("h4",{attrs:{id:"数据库乐观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库乐观锁"}},[s._v("#")]),s._v(" 数据库乐观锁")]),s._v(" "),t("p",[s._v("这种方法适合在更新的场景中")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" t_goods "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" good_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("根据 version 版本，也就是在操作库存前先获取当前商品的 version 版本号，然后操作的时候带上此 version 号。我们梳理下，我们第一次操作库存时，得到 version 为 1，调用库存服务 version 变成了 2；但返回给订单服务出现了问题，订单服务又一次发起调用库存服务，当订单服务传如的 version 还是 1，再执行上面的 sql 语句时，就不会执行；因为 version 已经变 为 2 了，where 条件就不成立。这样就保证了不管调用几次，只会真正的处理一次。乐观锁主要使用于处理读多写少的问题。")]),s._v(" "),t("h4",{attrs:{id:"业务层分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#业务层分布式锁"}},[s._v("#")]),s._v(" 业务层分布式锁")]),s._v(" "),t("p",[s._v("如果多个机器可能在同一时间同时处理相同的数据，比如多台机器定时任务都拿到了相同数据处理，我们就可以加分布式锁，锁定此数据，处理完成后释放锁。获取到锁的必须先判断 这个数据是否被处理过。")]),s._v(" "),t("h3",{attrs:{id:"各种唯一约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各种唯一约束"}},[s._v("#")]),s._v(" 各种唯一约束")]),s._v(" "),t("h4",{attrs:{id:"数据库唯一约束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库唯一约束"}},[s._v("#")]),s._v(" 数据库唯一约束")]),s._v(" "),t("p",[s._v("插入数据，应该按照唯一索引进行插入，比如订单号，相同的订单就不可能有两条记录插入。我们在数据库层面防止重复。")]),s._v(" "),t("p",[s._v("这个机制是利用了数据库的主键唯一约束的特性，解决了在 insert 场景时幂等问题。但主键的要求不是自增的主键，这样就需要业务生成全局唯一的主键。")]),s._v(" "),t("p",[s._v("如果是分库分表场景下，路由规则要保证相同请求下，落地在同一个数据库和同一表中，要不然数据库主键约束就不起效果了，因为是不同的数据库和表主键不相关。")]),s._v(" "),t("h3",{attrs:{id:"redis-set-防重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-set-防重"}},[s._v("#")]),s._v(" redis set 防重")]),s._v(" "),t("p",[s._v("很多数据需要处理，只能被处理一次，比如我们可以计算数据的 MD5 将其放入 redis 的 set，每次处理数据，先看这个 MD5 是否已经存在，存在就不处理。")]),s._v(" "),t("h3",{attrs:{id:"防重表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防重表"}},[s._v("#")]),s._v(" 防重表")]),s._v(" "),t("p",[s._v("使用订单号 orderNo 做为去重表的唯一索引，把唯一索引插入去重表，再进行业务操作，且他们在同一个事务中。这个保证了重复请求时，因为去重表有唯一约束，导致请求失败，避免了幂等问题。这里要注意的是，去重表和业务表应该在同一库中，这样就保证了在同一个事务，即使业务操作失败了，也会把去重表的数据回滚。这个很好的保证了数据一致性。")]),s._v(" "),t("p",[s._v("之前说的 redis 防重也算。")]),s._v(" "),t("h3",{attrs:{id:"全局请求唯一-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局请求唯一-id"}},[s._v("#")]),s._v(" 全局请求唯一 id")]),s._v(" "),t("p",[s._v("调用接口时，生成一个唯一 id，redis 将数据保存到集合中（去重），存在即处理过。可以使用 nginx 设置每一个请求的唯一 id。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("proxy_set_header X-Request-Id "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_id")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);