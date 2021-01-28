const module = (function(){

    let mainContainer = document.getElementsByClassName('twitter__profile-section')[0];
    
        fetch('http://localhost:1337/posts/')
        .then((response) => {
            return response.json()
        })
        .then(data => {              
    
            data.forEach(each => {
                const tweetDetails = {
                    tweet: each.Tweet,
                    date: each.Date,
                    userName: each.UserName,
                    handle: each.Handle,
                    image: `http://localhost:1337${each.Image[0].url}`,
                    user: `http://localhost:1337${each.User[0].url}`
                }            
                
                const tweetHTML = `
                    <section class="twitter-tweets">
                    <div class="twitter-tweets__sidebar">
                        <p class="twitter-tweets__retweet">
                            <i class="fas fa-retweet"></i>
                        </p>
                        <img src="${tweetDetails.user}" alt="Profile Picture" class="twitter-tweets__img twitter__img">
                    </div>
                    <div class="twitter-tweets__main">
                        <p class="twitter-tweets__profileId">
                            Monica Bellucci Retweeted
                        </p>
                        <div class="twitter-tweets__tweet-info">
                            <p class="twitter-tweets__name">
                                ${tweetDetails.userName}
                            <span class="twitter-tweets__handle">
                                ${tweetDetails.handle}
                            </span>
                            </p>
                            <p class="twitter-tweets__date">
                                ${tweetDetails.date}
                            </p>                        
                        </div>
                        <p class="twitter-tweets__tweet-text">
                            ${tweetDetails.tweet}
                        </p>
                        <img src="${tweetDetails.image}" alt="Monica Bellucci" class="twitter-tweets__image">
                        <div class="twitter-tweets__interaction">
                            <i class="fas fa-share"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
                </section>
                    `;
        
                mainContainer.innerHTML += tweetHTML;
            })
    
        });    
}())
