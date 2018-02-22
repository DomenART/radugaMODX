let tag = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api"
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

window.onYouTubeIframeAPIReady = function() {
  document.querySelectorAll('.route-item').forEach(el => {
    let video = el.querySelector('.route-item__bg')
    let button = el.querySelector('.play-btn_route')
    el.player = new YT.Player(video, {
      playerVars: {
        controls: 0,
        showinfo: 0,
        disablekb: 1,
        loop: 1,
        modestbranding: 1,
        rel: 0,
        mute: 1
      },
      videoId: video.dataset.video
    })

    button.addEventListener('mouseover', () => {
      el.player.playVideo()
    })
    button.addEventListener('mouseout', () => {
      el.player.stopVideo()
    })
  })
}