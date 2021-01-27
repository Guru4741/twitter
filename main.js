const bgProfile = document.getElementById('bg-profile')
let mainElement = document.getElementsByClassName('twitter__profile-section')[0];


// fetch('http://localhost:1337/movies/')
//     .then((response) => {
//         return response.json()
//     })
//     .then(data => {              
//         bgProfile.style.backgroundImage = `url('http://localhost:1337${data[1].Wallpaper[0].url}')`;
//     })

    fetch('http://localhost:1337/posts/')
    .then((response) => {
        return response.json()
    })
    .then(data => {              

        data.forEach(each => {
            const details = {
                tweet: each.Tweet,
                date: each.Date,
                userName: each.UserName,
                handle: each.Handle,
                image: `http://localhost:1337${each.Image[0].url}`,
                user: `http://localhost:1337${each.User[0].url}`
            }

            console.log(details)
            
            const details2 = `
            <section class="twitter-tweets">
            <div class="twitter-tweets__sidebar">
                <p class="twitter-tweets__retweet">
                    <i class="fas fa-retweet"></i>
                </p>
                <img src="${details.user}" alt="Profile Picture" class="twitter-tweets__img twitter__img">
            </div>
            <div class="twitter-tweets__main">
                <p class="twitter-tweets__profileId">
                    Monica Bellucci Retweeted
                </p>
                <div class="twitter-tweets__tweet-info">
                    <p class="twitter-tweets__name">
                        ${details.userName}
                    </p>
                    <p class="twitter-tweets__handle">
                        ${details.handle}
                    </p>
                    <p class="twitter-tweets__date">
                        ${details.date}
                    </p>                        
                </div>
                <p class="twitter-tweets__tweet-text">
                    ${details.tweet}
                </p>
                <img src="${details.image}" alt="Monica Bellucci" class="twitter-tweets__image">
                <div class="twitter-tweets__interaction">
                    <i class="fas fa-share"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        </section>
                `;
    
            mainElement.innerHTML += details2;
        })


    })    