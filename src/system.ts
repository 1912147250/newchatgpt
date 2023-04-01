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

export const defaultMessage = `Powered by CheZ Vercel
- 如果本项目对你有所帮助，可以给小猫打赏 [买点零食](https://chez-1302520615.cos.ap-nanjing.myqcloud.com/tmp_3c4d17f9401534caa6dd25bc4136734c67501a89a1745aab.jpg)，所有打赏用于网站维护。
- 特感谢 [OpenAI API (gpt-3.5-turbo)]提供支持。
- 本网站由快雪空空熊部署 
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
