
let courses = document.querySelector('.courses');

if (courses) {
    let courseItems = document.querySelectorAll('.course-item');
    let courseBgLarge= document.querySelector('.course-item__large-bg');

    courseItems.forEach(element => {
        element.querySelector('.play-btn').addEventListener('mouseover', function() {
            element.querySelector('.course-item__large-bg').classList.remove('hidden');
        });
    });


  let tag = document.createElement('script')
  tag.src = "https://www.youtube.com/iframe_api"
  let firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  window.onYouTubeIframeAPIReady = function() {

    document.querySelectorAll('.course-item').forEach(el => {
      let video = el.querySelector('.course-item__small-bg')
      let button = el.querySelector('.play-btn_courses')
      el.player = new YT.Player(video, {
        height: '200',
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

    document.querySelectorAll('.course-bg').forEach(el => {

    })
  }
}