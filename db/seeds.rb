User.destroy_all
Playlist.destroy_all


User.create(username: "Peter", email:"peterbacenet@icloud.com", bio:Faker::Quotes::Shakespeare.as_you_like_it_quote, admin: true, password: "password")
User.create(username: "Will", email:"testing1@test.com", bio:Faker::Quotes::Shakespeare.king_richard_iii_quote, admin: true, password: "password")
User.create(username: "Paul", email:"testing2@test.com", bio:Faker::Quotes::Shakespeare.hamlet_quote, admin: false, password: "password")
User.create(username: "Andy", email:"testing3@test.com", bio:Faker::Quotes::Shakespeare.romeo_and_juliet_quote, admin: false, password: "password")


Playlist.create(name: "Workout Playlist", songs: "PLFgquLnL59alW3xmYiWRaoz0oM3H17Lth", favorite: "false", likes: 0, dislikes:0, user_id: 1)
Playlist.create(name: "Study Playlist", songs: "PLrEnWoR732-DtKgaDdnPkezM_nDidBU9H", favorite: "false", likes: 0, dislikes:0, user_id: 2)
Playlist.create(name: "Sleeping Playlist", songs: "PL4fGSI1pDJn6O1LS0XSdF3RyO0Rq_LDeI", favorite: "false", likes: 0, dislikes:0, user_id: 3)
Playlist.create(name: "Morning Playlist", songs: "PL4fGSI1pDJn77aK7sAW2AT0oOzo5inWY8", favorite: "false", likes: 0, dislikes:0, user_id: 4)
Playlist.create(name: "Evening Playlist", songs: "PL4fGSI1pDJn5LOptOQixqnzXNGjNXAgYY", favorite: "false", likes: 0, dislikes:0, user_id: 1)
Playlist.create(name: "Monday Playlist", songs: "PL4fGSI1pDJn5O8siDeZuI_4hbk6JWtTX1", favorite: "false", likes: 0, dislikes:0, user_id: 2)
Playlist.create(name: "Anger at Coding Playlist", songs: "PL4fGSI1pDJn4fmCoF1vKHLtivI0f9yHiF", favorite: "false", likes: 0, dislikes:0, user_id: 4)

# <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
# <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
# <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
# <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
# <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
# <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>