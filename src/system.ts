import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `CheZai KuaiXue
- 关注不迷路，定时免费送官网账号，独享账号全网最低，个位数[点击关注](https://bktx-1302520615.cos.ap-nanjing.myqcloud.com/20230823133749.jpg)
- 有任何建议和合作请联系9371839@gmail.com，由于本站点使用用户较多，如卡顿可以选择购买使用升级版[点击购买](http://fk.chez1.cn/)【已关闭 联系管理员购买】
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
