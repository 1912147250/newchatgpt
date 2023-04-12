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
- 感谢各位的访问本站由4.12日起为demo站点↓
- 由于本站维护成本较大并不太好负担本站依然免费使用如若出现问题请耐心等待或联系站长获取稳定版[联系站长](https://chez-1302520615.cos.ap-nanjing.myqcloud.com/tmp_f1d56f5ca34cab3245d2b48a2c84406dca1a5432c61ce397.jpg)
- 特感谢[5 OpenAI APl(gpt-3.5-turbo)]提供支
- 开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
