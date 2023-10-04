import ytdl from "ytdl-core"
import fs from "fs"
import { error, info } from "console"
import { resolve } from "path"
import { rejects } from "assert"

export const download = (videoId) =>
  new Promise((resolve, reject) => {
    const videoURL = "https://www.youtube.com/shorts/" + videoId
    console.log("Realizando Download:", videoId)

    ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
      .on("info", (info) => {
        const seconds = info.formats[0].approxDurationMS / 1000
        console.log(seconds)
      })
      .on("end", () => {
        console.log("Finalizado")
        resolve()
      })
      .on("erro", (error) => {
        console.log("Não foi possivel realizar:", error)
      })
      .pipe(fs.createWriteStream("./tmp/audio.mp4"))
  })
