// 第二章数据可视化数据集
export const chapter2Data = {
  // 2.1.2 未来15天最高气温和最低气温
  temperatureData: {
    title: '未来15天最高气温和最低气温',
    description: '展示未来15天的最高气温和最低气温变化趋势',
    data: [
      { day: 4, maxTemp: 32, minTemp: 19 },
      { day: 5, maxTemp: 33, minTemp: 19 },
      { day: 6, maxTemp: 34, minTemp: 20 },
      { day: 7, maxTemp: 34, minTemp: 22 },
      { day: 8, maxTemp: 33, minTemp: 22 },
      { day: 9, maxTemp: 31, minTemp: 21 },
      { day: 10, maxTemp: 30, minTemp: 22 },
      { day: 11, maxTemp: 29, minTemp: 16 },
      { day: 12, maxTemp: 30, minTemp: 18 },
      { day: 13, maxTemp: 29, minTemp: 18 },
      { day: 14, maxTemp: 26, minTemp: 17 },
      { day: 15, maxTemp: 23, minTemp: 14 },
      { day: 16, maxTemp: 21, minTemp: 15 },
      { day: 17, maxTemp: 25, minTemp: 16 },
      { day: 18, maxTemp: 31, minTemp: 16 }
    ]
  },

  // 2.2.2 阿里巴巴淘宝和天猫平台的GMV
  alibabaGMVData: {
    title: '2013-2019财年阿里巴巴淘宝和天猫平台GMV',
    description: '展示阿里巴巴电商平台年度交易总额(GMV)的增长趋势',
    data: [
      { year: 'FY2013', gmv: 10770 },
      { year: 'FY2014', gmv: 16780 },
      { year: 'FY2015', gmv: 24440 },
      { year: 'FY2016', gmv: 30920 },
      { year: 'FY2017', gmv: 37670 },
      { year: 'FY2018', gmv: 48200 },
      { year: 'FY2019', gmv: 57270 }
    ]
  },

  // 2.3.2 各商品种类的网购替代率
  onlineShoppingRateData: {
    title: '各商品种类的网购替代率',
    description: '展示不同商品种类在网购中的替代率',
    data: [
      { category: '家政、家教、保姆等生活服务', rate: 0.959 },
      { category: '飞机票、火车票', rate: 0.951 },
      { category: '家具', rate: 0.935 },
      { category: '手机、手机配件', rate: 0.924 },
      { category: '计算机及其配套产品', rate: 0.893 },
      { category: '汽车用品', rate: 0.892 },
      { category: '通信充值、游戏充值', rate: 0.865 },
      { category: '个人护理用品', rate: 0.863 },
      { category: '书报杂志及音像制品', rate: 0.860 },
      { category: '餐饮、旅游、住宿', rate: 0.856 },
      { category: '家用电器', rate: 0.854 },
      { category: '食品、饮料、烟酒、保健品', rate: 0.835 },
      { category: '家庭日杂用品', rate: 0.826 },
      { category: '保险、演出票务', rate: 0.816 },
      { category: '服装、鞋帽、家用纺织品', rate: 0.798 },
      { category: '数码产品', rate: 0.765 },
      { category: '其他商品和服务', rate: 0.763 },
      { category: '工艺品、收藏品', rate: 0.670 }
    ]
  },

  // 2.4.2 物流公司物流费用统计
  logisticsCostData: {
    title: '物流公司物流费用统计',
    description: '展示三家物流公司各月的物流费用统计',
    data: [
      { month: 1, companyA: 198, companyB: 203, companyC: 185 },
      { month: 2, companyA: 215, companyB: 236, companyC: 205 },
      { month: 3, companyA: 245, companyB: 200, companyC: 226 },
      { month: 4, companyA: 222, companyB: 236, companyC: 199 },
      { month: 5, companyA: 200, companyB: 269, companyC: 238 },
      { month: 6, companyA: 236, companyB: 216, companyC: 200 },
      { month: 7, companyA: 201, companyB: 298, companyC: 250 },
      { month: 8, companyA: 253, companyB: 333, companyC: 209 },
      { month: 9, companyA: 236, companyB: 301, companyC: 246 },
      { month: 10, companyA: 200, companyB: 349, companyC: 219 },
      { month: 11, companyA: 266, companyB: 360, companyC: 253 },
      { month: 12, companyA: 290, companyB: 368, companyC: 288 }
    ]
  },

  // 2.7.2 汽车速度与制动距离的关系
  carSpeedBrakingData: {
    title: '汽车速度与制动距离的关系',
    description: '展示汽车在不同速度下的制动距离关系',
    data: [
      { speed: 10, distance: 0.5 },
      { speed: 20, distance: 2.0 },
      { speed: 30, distance: 4.4 },
      { speed: 40, distance: 7.9 },
      { speed: 50, distance: 12.3 },
      { speed: 60, distance: 17.7 },
      { speed: 70, distance: 24.1 },
      { speed: 80, distance: 31.5 },
      { speed: 90, distance: 39.9 },
      { speed: 100, distance: 49.2 },
      { speed: 110, distance: 59.5 },
      { speed: 120, distance: 70.8 },
      { speed: 130, distance: 83.1 },
      { speed: 140, distance: 96.4 },
      { speed: 150, distance: 110.7 },
      { speed: 160, distance: 126.0 },
      { speed: 170, distance: 142.2 },
      { speed: 180, distance: 159.4 },
      { speed: 190, distance: 177.6 },
      { speed: 200, distance: 196.8 }
    ]
  },

  // 2.8.2 2017年和2018年全国发电量统计
  powerGenerationData: {
    title: '2017年和2018年全国发电量统计',
    description: '展示2017年和2018年各月的发电量数据对比',
    data: {
      2018: [5200, 5254.5, 5283.4, 5107.8, 5443.3, 5550.6, 6400.2, 6404.9, 5483.1, 5330.2, 5543, 6199.9],
      2017: [4605.2, 4710.3, 5168.9, 4767.2, 4947, 5203, 6047.4, 5945.5, 5219.6, 5038.1, 5196.3, 5698.6]
    }
  },

  // 2.9.2 霍兰德职业兴趣测试
  hollandTestData: {
    title: '霍兰德职业兴趣测试结果',
    description: '展示霍兰德职业兴趣测试的六个维度得分',
    data: [
      { person: 'Person1', research: 0.40, art: 0.32, social: 0.35, enterprise: 0.30, conventional: 0.30, realistic: 0.88 },
      { person: 'Person2', research: 0.85, art: 0.35, social: 0.30, enterprise: 0.40, conventional: 0.40, realistic: 0.30 },
      { person: 'Person3', research: 0.43, art: 0.89, social: 0.30, enterprise: 0.28, conventional: 0.22, realistic: 0.30 },
      { person: 'Person4', research: 0.30, art: 0.25, social: 0.48, enterprise: 0.85, conventional: 0.45, realistic: 0.40 },
      { person: 'Person5', research: 0.20, art: 0.38, social: 0.87, enterprise: 0.45, conventional: 0.32, realistic: 0.28 },
      { person: 'Person6', research: 0.34, art: 0.31, social: 0.38, enterprise: 0.40, conventional: 0.92, realistic: 0.28 }
    ],
    dimensions: ['研究型(I)', '艺术型(A)', '社会型(S)', '企业型(E)', '传统型(C)', '现实型(R)']
  },

  // 2.10.2 4个树种不同季节的细根生物量
  rootBiomassData: {
    title: '4个树种不同季节的细根生物量',
    description: '展示四个树种在春季、夏季、秋季的细根生物量数据',
    data: [
      { season: '春季', tree1: 2.04, tree2: 1.69, tree3: 4.65, tree4: 3.39 },
      { season: '夏季', tree1: 1.57, tree2: 1.61, tree3: 4.99, tree4: 2.33 },
      { season: '秋季', tree1: 1.63, tree2: 1.64, tree3: 4.94, tree4: 4.10 }
    ],
    errors: {
      tree1: [0.16, 0.08, 0.10],
      tree2: [0.27, 0.14, 0.14],
      tree3: [0.34, 0.32, 0.29],
      tree4: [0.23, 0.23, 0.39]
    }
  }
}

// 数据集的类型定义
export type Chapter2Dataset = keyof typeof chapter2Data
export const chapter2DatasetNames: Chapter2Dataset[] = [
  'temperatureData',
  'alibabaGMVData',
  'onlineShoppingRateData',
  'logisticsCostData',
  'carSpeedBrakingData',
  'powerGenerationData',
  'hollandTestData',
  'rootBiomassData'
]

// 将数据转换为表格格式
export const convertToTableData = (dataset: Chapter2Dataset) => {
  const data = chapter2Data[dataset]
  if (!data.data) return []
  
  if (Array.isArray(data.data)) {
    return data.data.map(item => ({ ...item }))
  }
  
  // 处理特殊格式的数据
  if (dataset === 'powerGenerationData') {
    const powerData = data.data as { 2018: number[], 2017: number[] }
    return Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      '2018': powerData[2018][i],
      '2017': powerData[2017][i]
    }))
  }
  
  return []
}