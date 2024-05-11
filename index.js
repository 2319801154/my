let userInfodata = [
  '姓名：王龙威',
  '手机：17629376252',
  '邮箱：2319801154@qq.com',
  '学历：本科',
  '工作年限：5年',
]
let cont = document.querySelector('.cont');

let Info = document.querySelector('.Info');
Info.innerHTML = `<div class="title">个人信息</div>`
Info.innerHTML += `<div class="userInfo"></div>`
let userInfo = document.querySelector('.userInfo');
for (let i = 0; i < userInfodata.length; i++) {
  userInfo.innerHTML += `<div>${userInfodata[i]}</div>`
}
let technologyData = [
  '熟练使用Html/Html5/Css/Css3，Js ，div+css布局及flex布局方式',
  '熟练使用Vue 及周边资源如Vue-router,Vuex,axio等及组件化开发',
  '熟练使用element ui 和ant design vant iview uview nutui 等ui框架',
  '熟练使用vue3,taro,uniapp，微信小程序进行开发',
  '熟悉使用蓝湖，axure ,ps等设计工具',
  '能使用 echars antv 百度地图进行开发',
  '熟练使用git sass 熟悉前后端分离开发',
]
let technology = document.querySelector('.technology');
technology.innerHTML = `<div class="title">专业技能</div>`
technology.innerHTML += `<div class="technologyInfo"></div>`
let technologyInfo = document.querySelector('.technologyInfo');
for (let i = 0; i < technologyData.length; i++) {
  technologyInfo.innerHTML += `<div>${technologyData[i]}</div>`
}
// 公司
let workData = [
  '2019.3 - 2021.3浙江辉驿网络科技有限公司',
  '2021.3 - 2021.12 上海伴修网络科技有限公司',
  '2021.12 - 至今 上海网驿信息科技有限公司',
]
let work = document.querySelector('.work');
work.innerHTML = `<div class="title">工作经历</div>`
work.innerHTML += `<div class="workInfo"></div>`
let workInfo = document.querySelector('.workInfo');
for (let i = 0; i < workData.length; i++) {
  workInfo.innerHTML += `<div>${workData[i]}</div>`
}
// 项目
let projectData = [
  {
    name: '如家酒店后台管理系统',
    methods:'实现方式：vue element ui Vue-router,Vuex,axios，帆软报表工具等',
    describe:'项目描述：该项目是如家酒店的酒店管理系统，上百人的团队，耗时一年左右，项目功能齐全，vue 加element 	ui 开发框架，采用sass编写样式，前后端分离模式，组件化开发，并且使用了帆软报表工具做报表。覆盖	了酒店行业大部分业务场景。',
    job:[
      '静态页面，sass编写样式，交互逻辑编写 flex自适应布局，公用组件的开发',
      '前后端接口数据联调，数据渲染',
      '负责所属模块的业务需求评审，开发自测及bug修改',
      '使用帆软报表工具做报表数据展示',
    ]
  },
  {
    name: '开元酒店人才盘点系统',
    methods:'实现方式：vue ant design，Vue-router，Vuex，axios，echars',
    describe:'项目描述：此项目为开元酒店自己内部使用的人才盘点系统，人才信息的新增，修改，删除，查看，导出人才	信息表，echars展示人才信息流动情况。',
    job:[
      '独立搭建项目，包括封装axios,路由配置，封装接口，开发公用组件',
      'Vue加ant design 开发 flex 自适应布局方式',
      '前后端分离模式，数据联调',
      '与产品讨论项目逻辑及实现方式',
    ]
  },
  {
    name: '智慧酒店',
    methods:'实现方式：vue',
    describe:'项目描述：这是一款酒店的H5项目，用户入住酒店可通过扫码及链接进入该项目，来进行点餐，送物，维修	设备，续住，退房，开票等功能',
    job:[
      '自适应各种手机尺寸',
      '前后端数据联调，展示，逻辑交互编写',
      '前端项目打包构建发布',
    ]
  },
  {
    name: '酒店管家app',
    methods:'实现方式：vue',
    describe:'项目描述：这是一款酒店的app项目,与原生端安卓ios共同协作开发，用于酒店的管理人员，查看本酒店或本区域内酒	店的经营数据和情况',
    job:[
      '与原生端联调，上传功能，扫码功能，拍照功能，路由跳转等',
      'App日常测试打包发版',
      '参与业务部门的开发需求，与产品确认开发方向，功能实现以及项目功能进度',
    ]
  },
  {
    name: '酒店管家pc',
    methods:'实现方式：vue element',
    describe:'项目描述：这是一款酒店的pc项目，用于酒店的管理人员，查看本酒店或本区域内酒店的经营数据和情况，	管理人员发布公告，问卷，合作酒店的优惠政策，物业信息，立项资料等',
    job:[
      '日常开发新功能，维护代码，版本更新迭代',
      '日常测试打包构建发版，整合代码',
      '与后端，测试，产品沟通保证项目进度',
      '参与业务部门的开发需求，与产品确认开发方向，功能实现以及项目功能进度'
    ]
  },
  {
    name: '平安汽融财务系统',
    methods:'实现方式：vue antd antv',
    describe:'项目描述：平安租赁财务部门使用的一款系统，项目包括一些基本的系统管理，字典管理等，核心功能凭证确	认，单据生成，以及可配置，灵活性较高的凭证生成功能',
    job:[
      '前端项目技术框架选型',
      '项目搭建，打包发布，组件封装',
      '日常功能开发，需求探讨',
      '测试修复问题，完善交互体验'
    ]
  },
  {
    name: '租赁系统',
    methods:'实现方式：vue element',
    describe:'项目描述：公司自研项目，定位于公司的财务部门使用，帮助财务部门解决大批量手工计算的问题，主要包括	合同，资产，变更，报表及一些常见的系统管理的功能',
    job:[
      '前端项目技术框架选型',
      '项目搭建，打包发布，常用组件封装',
      '日常功能开发，需求探讨',
      '测试修复问题，完善交互体验'
    ]
  },
  {
    name: '欧贝（移动商城）',
    methods:'实现方式：vue uniapp ts',
    describe:'项目描述：欧贝商城，h5,安卓，ios 三端同步开发的一款商城平台，主要用于企业采购，包含报价，审批，	寻源，供应商管理，电子合同等',
    job:[
      '日常开发新功能如订单，收银台等，维护代码，版本更新迭代',
      '测试修复问题，完善交互体验',
      '兼容性处理，原生端交互',
      '参与业务部门的开发需求，与产品确认开发方向，功能实现以及项目功能进度'
    ]
  },
  {
    name: '易销小程序 ',
    methods:'实现方式：taro vantui taro-ui-vue',
    describe:'项目描述：为供应商打造的一款小程序，集合商品完整的下单 支付 取消订单 确认收货 查看物流等一套的流	程。并且为供应商提供了支持福利商品的业务场景',
    job:[
      '业务需求评审及开发',
      '功能及样式兼容性处理',
      '公司内部收银台支付功能联调',
      '针对福利商品的不同业务场景开发'
    ]
  },
  {
    name: '鞍钢集团惠民核销小程序 ',
    methods:'实现方式：vue3 taro',
    describe:'项目描述：鞍钢集团内部使用的小程序，用于领取福利商品核销，包含扫码核销，待核销，全部订单，我的核销记录等。',
    job:[
      '业务需求评审，功能开发',
      '测试修复问题，完善交互体验',
      '项目版本更新迭代发布',
    ]
  },
  {
    name: '德远云商 ',
    methods:'实现方式：vue2 iview ',
    describe:'项目描述：商城项目，包含首页，商品大厅，商品列表，商品详情，购物车，下单等功能',
    job:[
      '购物车，商品下单流程开发',
      '商品列表，商品详情页,开发',
      '项目版本更新迭代发布',
    ]
  },
]
let project = document.querySelector('.project');
project.innerHTML = `<div class="title">项目经历</div>`
project.innerHTML += `<div class="projectInfo"></div>`
let projectInfo = document.querySelector('.projectInfo');
for (let i = 0; i < projectData.length; i++) {
  projectInfo.innerHTML += `<div class='projectname'>${i+1}.${projectData[i].name}</div>`
  projectInfo.innerHTML += `<div class='pl-20'>${projectData[i].methods}</div>`
  projectInfo.innerHTML += `<div class='pl-20'>${projectData[i].describe}</div>`
  projectInfo.innerHTML += `<div class='pl-20'>项目职责：</div>`
  for (let j = 0; j < projectData[i].job.length; j++) {
    projectInfo.innerHTML += `<div class='pl-30'>${j+1}.${projectData[i].job[j]}</div>`
  }
}


