# Chinese Zodiac Matching Card Game

This is a simple card matching memory game based on the Chinese Zodiac. It is themed around Chinese New Year. The game also incorporates the famous character the Monkey King from Journey to the West.

## User Experience
* Explicit User Goals:

* The aim is for the user to enjoy playing the game. There is no timer and there is a congratulatory message when the game is won.
* Know half of the Chinese Zodiac animals. There are 12 animals in total but this would make the board look too cluttered at the moment. It is better to start with 6 animals as it is easier to look at.

* Implicit User Goals:

* Gain some knowledge about a Chinese New Year tradition, red envelopes and the associated characters.

* Features to implement
1. I would make the game more difficult by adding lives, a timer and a move counter.
2. After matching all the Zodiac characters the next part of the game will be matching Chinese Characters with the animals. For example the dragon image will have to be matched with the Chinese Character 龙. This enables the user to learn the characters for the animals. It would be difficult for them to understand the Chinese pinyin for the animals at this stage.
3. After that to make it more interesting you would have to match the negative image and the image of the animals. The reason behind this is that the Monkey King has taken their soul and they need to reunite it by matching the cards.
4. The final level would be in two parts with all the 12 Zodiac animals. The first part would be to match the negative image and image. The second part would be to match the image and character. At this stage at timer would be added to make the game more exciting.

### Wireframes

* [Desktop Main Page](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Wireframes/Desktop.png)
* [Desktop Game Page](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Wireframes/Desktop%20Game%20Screen.png)
* [Ipad Main Page](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Wireframes/Ipad.png)
* [iPad Game Page](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Wireframes/Ipad%20Game%20Screen.png)
* [Smartphone Main Page](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Wireframes/Smartphone.png)
* [Smartphone Game Page](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Wireframes/Smartphone%20Game%20Screen.png)

* Wireframes designed changed due to the inclusion of the Monkey King image. The Bamboo background was also considered but it did not look nice, it could be incorporated into a later version of the game.

## Technologies used
#### Languages used
1. [HTML 5](https://html.spec.whatwg.org/multipage/)
2. [CSS 3](https://www.w3.org/Style/CSS/Overview.en.html)
3. [Javascript](https://www.javascript.com/)

#### Frameworks, Programs and Libraries used

1. [Google Fonts](https://fonts.google.com/) 
Used this to import the Noto Sans SC Font throughout the site.

2. [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
Used to aid responsiveness of the site.

3. [Gitpod](https://www.gitpod.io/) Used Gitpod for version control.

4. [Github](https://github.com/) Used to deploy the finished site.

5. [Balsamiq](https://balsamiq.com/) Used Balsamiq to create the wireframes.

6. [Remove BG](https://www.remove.bg/) Used to remove the Background of my images.

7. [FastStone Image Viewer 7.1](https://www.faststone.org/FSViewerDetail.htm) Used to cut the Chinese Zodiac image into 12 different images.

8. [Am I responsive?](http://ami.responsivedesign.is/) Used to provide screenshots of the site on different devices. 

## Testing
* The code was inputted through the W3C CSS Validation Service, Markup Validation Service and JSHint and no errors were found. 
* Lighthouse report was created.
* The website was tested on Google Chrome, Edge and  Firefox using the deployed link.
* The website was also tested on Samsung Tab S7 and Samsung S20 Ultra. 
* Friends and family tested the deployed link on their phones and provided feedback. 
* Known Bugs: The cards do not scale appropriately on mobile devices making it very difficult to see the images on the cards. This was fixed by having a margin-top of 5rem on the This was fixed by having a margin-top of 5rem on the game board and using media queries to scale the margin appropriately.   
* On Tablets in portrait mode the index page looks suitable but on landscape there is white space at the bottom as the background moves.

#### Screenshots

* [Index Page](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Screenshots/Responsive%20Index%20images.JPG)
* [Game Page](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Screenshots/Responsive%20Game%20screenshots.JPG)

#### Lighthouse reports
* [game.html](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Lightouse-reports/Lighthouse-report-game.JPG)
* [index.html](https://github.com/NC-CSX/Milestone-Project-2-Zodiac/blob/main/assets/Lightouse-reports/Lighthouse-report-index.JPG)

## Deployment
The project was deployed to GitHub Pages using the following steps.

1. Log in to GitHub and go to the GitHub Repository.
2. Open Settings.
3. Scroll down the Settings page until you find "Pages".
4. Under "Source", click on the the drop-down called "None" and select " Branch: main".
5. Choose the "/root" folder and then click save.
5. Find the now published site link in the "GitHub Pages" section.

* The Link to the project is -(https://nc-csx.github.io/Milestone-Project-2-Zodiac/)

### Credits and Acknowledgments 
1. Images came from the following sites. 
 * Chinese Zodiac [Freepik](https://www.freepik.com/free-vector/chinese-zodiac-new-year-signs-traditional-china-horoscope-animals-red-zodiacs-silhouette_10722644.htm#page=1&query=chinese%20zodiac&position=0)  
 * Red evenlope came from [Flaticon](https://www.flaticon.com/free-icon/envelope_677721)
 * Monkey king image came from [pixabay.com](https://pixabay.com/vectors/monkey-king-cloud-flying-baby-1940533/)
2. The Structure of the Javascript and the CSS for.memory-game, .memory-card, .memory-card:active, .memory-card.flip, .front-face .back-face, .front-face were based on Marina Ferreira's Javascript memory game (https://marina-ferreira.github.io/projects/js/memory-game)
3. Stack Overflow was used to help write the Javascript function for when the game is ended. I found the answer through a question. The Link is here: https://stackoverflow.com/questions/54171904/javascript-memory-game-need-to-add-congrats-message-at-the-end-of-game
4. I would also like to thank my Mentor, Chris Quinn for his advice and help.