import Property from "../plugins/Property/Property";
import "../plugins/Property/Property.css";

export default function() {
  this.init = function () {
    const body = document.querySelector("body");

    const usuallyTable = {
      header: '丰利金服工商信息',
      children: [
        {
          id: 1,
          title: '公司全称',
          content: '广州杰莱互联网金融信息服务有限公司'
        }, {
          id: 2,
          title: '公司简称',
          content: '丰利金服'
        }, {
          id: 3,
          title: '统一社会信用代码',
          content: '91440101321070552W'
        }, {
          id: 4,
          title: '公司注册资本',
          content: '1000万'
        }, {
          id: 5,
          title: '实缴注册资本',
          content: '1000万'
        }, {
          id: 6,
          title: '公司注册地',
          content: '广州市天河区海安路13号之一2104房'
        }, {
          id: 7,
          title: '公司经营地',
          content: '广州市天河区海安路13号之一2104房'
        }, {
          id: 8,
          title: '公司成立时间',
          content: '2014年12月15日'
        }, {
          id: 9,
          title: '公司经营期限',
          content: '长期'
        }, {
          id: 10,
          title: '公司经营状态',
          content: '在营（开业）企业'
        }, {
          id: 11,
          title: '公司法定代表人',
          content: '钱博'
        }, {
          id: 12,
          title: '实际控制人',
          content: '钱博'
        }, {
          id: 13,
          title: '首席运营官',
          content: '赵阳'
        }, {
          id: 14,
          title: '首席风控官',
          content: '郑国华'
        }, {
          id: 15,
          title: '技术总监',
          content: '罗灿奇'
        }, {
          id: 16,
          title: '总经理',
          content: '钱博'
        }, {
          id: 17,
          title: '财务总监',
          content: '黄利娟'
        }, {
          id: 18,
          title: '公司经营范围',
          content: '互联网金融信息服务（根据国家规定需要审批的，获得审批后方可经营）;受托管理股权投资基金（具体经营项目以金融管理部门核发批文为准）;依托互联网等技术手段，提供金融中介服务（根据国家规定需要审批的，获得审批后方可经营）;受金融企业委托提供非金融业务服务;受金融机构委托从事金融业务流程外包服务;受金融机构委托从事金融信息技术外包服务;'
        }, {
          id: 19,
          title: '分支机构信息',
          content: '无分支机构'
        }
      ]
    };
    const usuallyList = {
      title: '标题',
      description: '借款人征信情况：经查询个人征信记录显示，陈先生征信显示名下无贷款，贷记卡账户数为3张，授信总额为12,000元，近6个月平均使用额度为11,769元，近两年有逾期记录，但逾期金额较小且客户及时还清，综合考 评，征信状况一般。',
    }
    const dataSource = [
      {usuallyList},
      {usuallyTable},
      {usuallyList},
    ]

    const property = new Property("#page", { dataSource });
  }
}