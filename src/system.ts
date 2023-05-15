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
- 由于本站被人恶意刷取token，所以进行填写密码使用，请进入交流群免费获取密码[加入群聊](https://cznm-1302520615.cos.ap-nanjing.myqcloud.com/tmp_0a3e572d3aeb8f91f7027a6c4a7c2bf73fd0d9bc00f8c8dc.jpg)
- 有任何建议和合作请联系9371839@gmail.com，本网站为公益网站不收取任何费用，只是为爱发电的大学生仅此而已
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
