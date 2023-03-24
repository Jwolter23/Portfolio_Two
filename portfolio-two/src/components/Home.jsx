import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

export default function Home ({ myRef, myRef1, myRef2, handleClick3, handleClick2, handleClick}) {


    return(
        <div className="wholeScreen">
            <div className="welcomeScreen">
                <div className="navBox">
                    <div className='navBar'>
                        <button onClick={handleClick}className="aboutMeButton">About Me</button>
                        <button onClick={handleClick2}className="projectsButton">Projects</button>
                        <button onClick={handleClick3}className="connectButton">Connect</button>
                        <a href='https://drive.google.com/file/d/1QJ3Vgx8vfy3NUdhghuxwlZHX6bB9nISk/view?usp=share_link' target='_blank'><button className="resumeButton">Resume</button></a>
                    </div>
                </div>
                <div className="welcomeContent">
                    
                    <div className="welcomeText">
                        <h1 className="myName">Jordan Wolter</h1>
                        <h2 className="softwareDev">Software Developer</h2>
                    </div>
                    <div className="welcomeButtonBox">
                        <a href='https://drive.google.com/file/d/1QJ3Vgx8vfy3NUdhghuxwlZHX6bB9nISk/view?usp=share_link' target='_blank' rel="noopener noreferrer"><button className="welcomeButton">Resume</button></a>
                    </div>
                </div>
            </div>
            <div className='aboutMeDiv'>
                <h1 ref={myRef}className='aboutMeTitle'>About Me</h1>
            </div>
            <div className="sectionAbout">
                <div className="leftSectionAbout">
                    <div className="leftContentAbout">
                        <h1 className="leftSectionHeaderAbout">Who I am</h1>
                        <p className="leftSectionBodyAbout">I am a sales representative turned Software Developer who brings exceptional communication, problem-solving skills, and a hard work ethic to any team I am on. Being a very result-driven individual motivated by utilizing my Full-stack development and interpersonal skills to break down and solve problems. I excel at working and collaborating with a team while also using my individual skills to solve various issues thrown my way.</p>
                        <a className='leftSectionButtonAbout' href="https://www.linkedin.com/in/jordan-wolter/" target="_blank" rel="noopener noreferrer"> &gt; Linkedin</a>
                    </div>
                </div>
                <div className="rightSectionAbout">
                    <div className='aboutMePic'></div>
                </div>
            </div>
            <div className='projectDiv'>
                <h1 ref={myRef1}className='projectTitle'>Projects</h1>
            </div>
            <div className="sectionOne">
                <div className="leftSection">
                    <div className="leftContent">
                        <h1 className="leftSectionHeader">FilmFolio</h1>
                        <p className="leftSectionBody">FilmFolio was a passion project of mine based on my love for movies. Starting with the backend, I had created a database using Python and Django. With three models (Users, Movies, and Reviews) I was able to input all the necessary data to be rendered on the front end. Creating the correct URL's and Views was an important part in getting Full CRUD working on the front and back-end. Along with setting up my foreign keys and serializers correctly so the data on the back-end could be accessed correctly. Using React, I created a new react-app and started to render the data from my database through axios calls.  Once the data had been rendered I was able to create functional components to get functionality out of my search feature, movie details, and adding / deleting to a watchlist.  This is a full CRUD application. The reviews section is able to Create a review, Delete a review, Update a review, and of course Read a review. I had also tried a new technology called firebase for getting Auth up and running. Styling was done through CSS and Tailwind.</p>
                        <a className='leftSectionButton' href="https://filmfolio.netlify.app/" target="_blank" rel="noopener noreferrer"> &gt; FilmFolio Website</a>
                    </div>
                </div>
                <div className="rightSection">
                </div>
            </div>
            <div className="sectionTwoUpdate">
                <div className="rightSectionTwoUpdate">
                </div>
                <div className="leftSectionTwoUpdate">
                    <div className="leftContentTwoUpdate">
                        <h1 className="leftSectionHeaderTwoUpdate">Instrument Store</h1>
                        <p className="leftSectionBodyTwoUpdate">Instrument Store was our first group project, created by me and three other students. Our website acts as a storefront where users can browse the selection of musical instruments we provided. Instrument Store utilizes the PERN stack PostgreSQL, Express, React, and Node.js. As the team lead on this project, planning using tools like Wireframe, Trello, Lucidchart, and Agile methodologies was extremley important. We began by creating a database in PostgreSQL and associated / seeded these models through Sequelize. Once our back-end was created we created a React-app and set up Controllers, Routes, and Middleware. We then rendered our data through axios calls. After having everything set up we were able to get full CRUD on our comment model which can only be accessed when logged in. Our final goal was to get Auth working which we were able to successfully implement. To start, enter our deployed site, create an account, login, and you will be able to use our comment section.</p>
                        <a className='leftSectionButtonTwoUpdate' href="https://github.com/Jwolter23/Instrument_Store" target="_blank" rel="noopener noreferrer"> &gt; (Website Under Construction)</a>
                    </div>
                </div>
                
            </div>
            <div className="sectionThreeUpdate">
                <div className="leftSectionThreeUpdate">
                    <div className="leftContentThreeUpdate">
                        <h1 className="leftSectionHeaderThreeUpdate">Wolter Finance</h1>
                        <p className="leftSectionBodyThreeUpdate">Wolter Finance is an app used to stay up to date on stock market information. This app utilizes a third-party API from Financial Modeling Prep. With Wolter Finance, users will be greeted with news stories, top market price and percent changes, daily sector report all updating in real time through setInterval. Users can also See daily activity of the highest gainers and loser stocks, along with a search feature that will display in depth detail of said stock along with news stories from the past week. All of this was done through axios calls using Javascript, React, and CSS.</p>
                        <a className='leftSectionButtonThreeUpdate' href="https://wolterfinance.netlify.app/" target="_blank" rel="noopener noreferrer"> &gt; WolterFinance Website</a>
                    </div>
                </div>
                <div className="rightSectionThreeUpdate">
                </div>
            </div>
            <div className="sectionFourUpdate">
                <div className="rightSectionFourUpdate">
                </div>
                <div className="leftSectionFourUpdate">
                    <div className="leftContentFourUpdate">
                        <h1 className="leftSectionHeaderFourUpdate">Matrix Trivia</h1>
                        <p className="leftSectionBodyFourUpdate">Movie Trivia was my first project utilizing Javascript and HTML/CSS. Movie Trivia is a trivia game based off the movie The Matrix. Movie Trivia was a great way for me to learn some game logic and provided a fantastic challenege for my first project. Through DOM manipulation I was able to get a light/dark mode working, and through CSS was able to create a typewriter effect for users to see when the app loads.</p>
                        <a className='leftSectionButtonFourUpdate' href="https://matrix-trivia.surge.sh/" target="_blank" rel="noopener noreferrer"> &gt; Matrix Trivia Website</a>
                    </div>
                </div>
                
            </div>    

            <div className='footer'>
                <div className='footerContent'>
                    <h4 ref={myRef2}>Connect With Me:</h4>
                    <div className='socialsContainer'>
                        <a href='https://github.com/Jwolter23' target='_blank'><div className='github'><AiFillGithub /></div></a>
                        <a href='https://www.linkedin.com/in/jordan-wolter/' target='_blank'><div className='linkedin'><AiFillLinkedin /></div></a>
                        <a href='mailto:jordanwolterbse@gmail.com' target='_blank'><div className='email'><AiOutlineMail /></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}