# Drum Class
Drum Class is an application I made using Next.js and MUI. The purpose of the website is to aggregate free drum lessons that are available on YouTube and put them in one place that is easy to find and navigate. When you start to learn an instrument, the two main ways currently are either get private lessons in person, pay for one of the services online like Drumeo or DBO, or be 'self-taught'. The former two are the better options, however, they cost money that not everyone has the luxury of being able to afford. Luckily for self-taught drummers, there is enough free material on platforms like YouTube that you're not completely in the dark. The problem with this resource, however, is that its very easy to get lost and not know what you should be learning. This is the problem that's addressed by companies and private teachers by making the path as clear as possible. This application takes the free materials that you already have access to and gets you a little closer to that sense of direction, while also keeping the option to explore whatever topic you want with ease.

[Deployed Application](https://www.drumclass.org)

![desktopmobilemockup](https://user-images.githubusercontent.com/87290877/202004718-f8ffecea-2f29-4249-8765-c02ad0d2201c.jpg)

# Features
- The application has a mobile version and a desktop version. 
- From the home page you can click the button displayed at the top and take a test that will give you a good place to start if you're not sure where to begin.
- The home page diplays beginner, intermediate, and advanced lessons. (The most basic breakdown of kind of lessons) 
- The categories page has more fundamental topics that return lists of videos that are broken down even further by sub-category when clicked on.
- You can navigate through the sub-categories using the filter buttons on the mobile version
- Add any video to your list of favorites by clicking the + icon on the video you are watching.
- Search for any topic that you cannot already find on the website using the search bar at the top.

# Technologies
- This application was built using Next.js.
- I used MUI for some styling.
- This application is entirely front-end, the favorites funtionality works by using the browsers localstorage on your device to save video ids which I then use to render the videos when the favorites page is viewed.
- I used the 'react-device-detect' in order to check whether the site is being viewed on mobile or desktop.
- I made custom hooks to dynamically fetch video data.
- Takes advantage of Next.js static generation to make the app as fast as possible, and uses server side rendering where ssg cant be used.
- Context API is used where global state management is necessary.
## Deployed Application
[drumclass.org](https://www.drumclass.org)
