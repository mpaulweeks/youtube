
fetch('db.json')
  .then(resp => resp.json())
  .then(videos => {
    // todo maxresdefault.jpg
    const elms = videos.map(video => `
      <div class="thumbnail" style="background-image: url(https://i.ytimg.com/vi/${video.vid}/hqdefault.jpg);">
        <div>${video.channel}</div>
        <div>${video.title}</div>
      </div>
    `);
    // shuffle?
    elms.forEach(elm => {
      document.body.innerHTML += elm;
    });
  })