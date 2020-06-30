/*
 * @Description:
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 16:11:24
 * @LastEditors: flames
 * @LastEditTime: 2020-06-14 01:54:45
 */
const Koa = require("koa");

const app = new Koa();

const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const router = require("koa-router")({ prefix: "/api" });
// 设置cookie加密密钥
app.keys = ["some secret", "another secret"];
const goods = [
  {
    id: 1,
    name: "apple",
    price: 5.66
  },
  {
    id: 2,
    name: "banana",
    price: 3.66
  }
];
router.get("/goods", ctx => {
  ctx.body = {
    code: 1,
    goods
  };
});
router.get("/detail", ctx => {
  const { id } = ctx.query;
  ctx.body = {
    code: 1,
    goods: goods.find(good => good.id === id)
  };
});
router.post("/auth/login", ctx => {
  const user = ctx.request.body;
  console.log(user);
  if (user.username === "lgq" && user.password === "123456") {
    const token = "a mock token";
    ctx.cookies.set("token", token);
    ctx.body = {
      code: 1,
      token,
      msg: "登录成功"
    };
  } else {
    ctx.body = {
      code: -1,
      msg: "用户名不存在或密码错误！"
    };
  }
});
router.get("/auth/user", ctx => {
  ctx.body = {
    code: 1,
    user: {
      username: "lgq",
      sex: "man",
      age: 18
    },
    msg: "登录成功"
  };
});
router.post("/auth/logout", ctx => {
  ctx.cookies.set("token", null);
  ctx.body = {
    code: 1,
    msg: "登出成功"
  };
});
app.use(bodyparser());
app.use(logger());
app.use(router.routes());
app.listen(8080, () => console.log("api服务已启动！"));
