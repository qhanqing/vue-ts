export const routers: any[] = [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/login',
    name: '登录'
  },
  {
    path: '/finance',
    name: '财务管理',
    children: [
      {
        path: '/report',
        name: '财务报表'
      }
    ]
  }
]
