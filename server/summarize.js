import { Pipeline, pipeline } from "@xenova/transformers"
import { summaryExample } from "./utils/summary.js"

export async function summarize(text) {
  //return summaryExample
  try {
    console.log("Realiazando o resumo")
    const generator = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-12-6"
    )
    const output = await generator(text)
    console.log("Resumo Feito")
    return output[0].summary_text
  } catch (error) {
    console.log("Erro ao resumir", error)
    throw new error(error)
  }
}
