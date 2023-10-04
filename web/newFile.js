form.addEventListener("submit", (event) => {
  event.preventDefault()
  const videoURL = input.value
  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse video não é um short")
  }
  const [_, params] = videoURL.split("/shorts/")
  params.split[idVideo] = params.split("?si")
  console.log(idVideo)
})
