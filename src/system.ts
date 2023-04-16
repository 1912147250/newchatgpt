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
- 感谢各位的访问
- 由于有人恶意刷取本站token，所以进行维护暂时关闭，后续开放时间请进入交流群[加入交流群](https://cznm-1302520615.cos.ap-nanjing.myqcloud.com/tmp_0a3e572d3aeb8f91f7027a6c4a7c2bf73fd0d9bc00f8c8dc.jpg)，

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
