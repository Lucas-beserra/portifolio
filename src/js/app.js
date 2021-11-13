const links = {
  github: 'Lucas-beserra'
}

function getPhotoGitHub() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      personalPhoto.src = data.avatar_url
    })
}

getPhotoGitHub()
