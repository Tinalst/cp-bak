/**
 * 请求接口枚举
 */

// 公共模块
export enum Common {
  // 获取国家列表
  findAllNation = '/common/findAllNation',
  // 发送邮箱验证码
  senEmailCode = '/common/sendEmailCode',
  // 上传图片
  uploadImage = '/common/uploadImage'
}

// 认证模块
export enum Certify {
  // 添加KYC验证并注册
  addAndRegisterKyc = '/kycCertify/addAndRegisterKycCertify',
  // kyc认证
  addKyc = '/kycCertify/addKycCertify',
  // 查询基本状态信息
  findKycBasicStatus = '/kycCertify/findKycBasicStatus'
}

// 退款模块
export enum Refund {
  // 添加手续费hash（待确认前端怎么展示来决定输入参数）
  addRefundHash = '/kycRefund/addRefundHash',
  // 查询未审核的退款订单的手续费和打款地址
  // findOrderRefundFee = '/kycRefund/findOrderRefundFee',
  findOrderRefundFee = '/kycRefund/findUserTxHash',
  // 查询退款订单列表
  findRefundOrder = '/kycRefund/findRefundOrder',
  // 发起退款
  sendRefund = '/kycRefund/sendRefund'
}

// 兑换FX模块
export enum Transaction {
  // 添加订单的付款hash
  addOrderHash = '/kycTransaction/addOrderHash',
  // 锁定投资额度
  exchangeFx = '/kycTransaction/exchangeFx',
  // 填写转账地址
  fillTransferAddress = '/kycTransaction/fillTransferAddress',
  // 查询当前进行中的订单详情
  findOngoingOrderDetail = '/kycTransaction/findOngoingOrderDetail',
  // 用户当前可进行的兑换操作
  userPurchaseOperation = '/kycTransaction/userPurchaseOperation',
  // 查询兑换比例
  findExchangeRate  = '/kycTransaction/findExchangeRate'
}

// 绑定地址模块
export enum Address {
  // 绑定地址
  bindKycUserAddress = '/kycUserAddress/bindKycUserAddress',
  // 查询绑定地址信息
  findKycUserAddress = '/kycUserAddress/findKycUserAddress'
}

// 登录模块
export enum AccountUrl {
  // 登录
  login = '/kycUserLogin/login',
  // 忘记密码
  resetPassword = '/kycUserLogin/resetPassword',
  // 退出
  logOut = '/kycUserLogin/loginOut'
}

// 订单模块
export enum Order {
  // 查询订单列表
  findKycUserOrder = '/KycUserOrder/findKycUserOrder',
  // 订单支付记录
  findOrderRecord = '/KycUserOrder/findUserOrderPay'
}
