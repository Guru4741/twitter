const bgProfile = document.getElementById('bg-profile')

fetch('http://localhost:1337/movies/')
    .then((response) => {
        return response.json()
    })
    .then(data => {              
        bgProfile.style.backgroundImage = `url('http://localhost:1337${data[1].Wallpaper[0].url}')`;
    })