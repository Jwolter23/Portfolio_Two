// import ReactStars from 'react-stars'
import React from 'react'
import Carousel from './carousel'

export default function Home () {


    return(
        <div className="wholeScreen">
            <div className="welcomeScreen">
                    <div className="roosterLogoBox">
                        <div className='roosterLogo'></div>
                    </div>
                <div className="welcomeContent">
                    
                    <div className="welcomeText">
                        <h1 className="welcomeTo">Jordan Wolter</h1>
                        <h2 className="roosterGrin">Software Developer</h2>
                    </div>
                    <div className="welcomeButtonBox">
                        <a href='https://www.roostergrin.com/' target='_blank' rel="noopener noreferrer"><button className="welcomeButton">Resume</button></a>
                    </div>
                </div>
            </div>
            <div className="sectionOne">
                <div className="leftSection">
                    <div className="leftContent">
                        <h1 className="leftSectionHeader">FilmFolio</h1>
                        <p className="leftSectionBody">FilmFolio was a passion project of mine based on my love for movies. Starting with the backend, I had created a database using Django. With three models (Users, Movies, and Reviews) I was able to input all the necessary data to be rendered on the front end. Creating the correct URL's and Views was an important part in getting Full CRUD working on the front-end and back-end. Along with setting up my foreign keys and serializers correctly so the data on the back-end could be accessed correctly. Using react, I created a new react-app and started to render the data in my database through axios calls.  Once the data had been rendered I was able to create functional components to get functionality out of my Search feature, movie details, and adding / deleting to a watchlist.  This is a full CRUD application. The reviews section is able to Create a review, Delete a review, Update a review, and of course Read a review. I had also tried a new technology called firebase for getting Auth up and running. Styling was done through CSS and Tailwind.</p>
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
                        <p className="leftSectionBodyTwoUpdate">Instrument Store was our first group project, created by me and three other students. Our website acts as a storefront where users can browse the selection of Instruments we provided. Instrument Store utilizes the PERN stack PostgreSQL, Express, React, and Node.js. As the team lead on this project planning using tools like Wireframe, Trello, Lucidchart, and Agile methodologies was extremley important. We began by creating a database in PostgreSQL and associated / seeded these models through Sequelize. Once our back-end was created we created a React-app and set up Controllers, Routes, and Middleware. We then rendered our data through axios calls. After having everything set up we were able to get full CRUD on our comment model which can only be accessed when logged in. Our final goal was to get Auth working which we were able to successfully implement. To start, enter our deployed site, create an account, login, and you will be able to use our comment section.</p>
                        <a className='leftSectionButtonTwoUpdate' href="https://filmfolio.netlify.app/" target="_blank" rel="noopener noreferrer"> &gt; (Website Under Construction)</a>
                    </div>
                </div>
                
            </div>
            <div className="sectionThreeUpdate">
                <div className="leftSectionThreeUpdate">
                    <div className="leftContentThreeUpdate">
                        <h1 className="leftSectionHeaderThreeUpdate">Wolter Finance</h1>
                        <p className="leftSectionBodyThreeUpdate">Wolter Finance is an app used to stay up to date on stock market information. This app utilizes a third-party API from Financial Modeling Prep. With Wolter Finance, users will be greeted with new stories, top market price and percent changes, daily sector report all updating in real time through setInterval. Users can also See daily activity of the highest gainers and loser stocks, along with a search feature that will display in depth detail of said stock along with new stories from the past week. All of this was done through axios calls using Javascript, React, and CSS.</p>
                        <a className='leftSectionButtonThreeUpdate' href="https://filmfolio.netlify.app/" target="_blank" rel="noopener noreferrer"> &gt; WolterFinance Website</a>
                    </div>
                </div>
                <div className="rightSectionThreeUpdate">
                </div>
            </div>
                
                
            
            <div className="sectionTwo">
                <div className="leftSectionTwo">
                    <div className="leftContentTwo">
                    <h1 className="leftSectionHeaderTwo">LOREM IPSUM</h1>
                    <a href='https://www.roostergrin.com/#case-studies' target='_blank' rel="noopener noreferrer"><button className="leftSectionButtonTwo">BUTTON BUTTON</button></a>
                    </div>
                </div>
                <div className="rightSectionTwo">
                </div>
            </div>
            <div className="sectionThree">
                <div className="leftSectionThree">
                    <div className="leftContentThree">
                        <h1 className="leftSectionHeaderThree">LOREM IPSUM <br></br> DOLOR SIT AMET</h1>
                        <p className="leftSectionBodyThree">Lorem ipsum dolor sit amet, et felis intger. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quique risus vitae semper duis feugiat.</p>
                        <a className='leftSectionButtonThree' href="https://www.roostergrin.com/web" target="_blank" rel="noopener noreferrer"> &gt; Lorem Ipsum</a>
                    </div>
                </div>
                <div className="rightSectionThree">
                        <div className="item1">
                            <div className="svg1"></div>
                            <div className="text1">LOREM</div>
                        </div>
                        <div className="item2">
                            <div className="svg2"></div>
                            <div className="text2">LOREM IPSUM</div>
                        </div>
                        <div className="item3">
                            <div className="svg3"></div>
                            <div className="text3">LOREM IPSUM</div>
                        </div>
                        <div className="item4">
                            <div className="svg4"></div>
                            <div className="text4">LOREM</div>
                        </div>
                </div>
            </div>
            <div className="sectionFour">
                <div className="leftSectionFour">
                </div>
                <div className="rightSectionFour">
                    <div className="rightContentFour">
                        <h1 className="rightSectionHeaderFour">LOREM IPSUM</h1>
                        <p className="rightSectionBodyFour">Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
                        <a href='https://www.roostergrin.com/thread' target='_blank' rel="noopener noreferrer"><button className="rightSectionButtonFour">BUTTON BUTTON</button></a>
                    </div>
                </div>
            </div>
            <div className="sectionFive">
                <div className="leftSectionFive">
                    <div className="leftContentFive">
                        <h1 className="leftSectionHeaderFive">LOREM IPSUM <br></br>DOLOR SIT AMET</h1>
                        <div className='reactStars'>
                            {/* <ReactStars
                            count={5}
                            value={5}
                            edit={false}
                            size={24}
                            color1={'#f87216'} 
                            color2={'#f87216'}/> */}
                        </div>
                        
                    </div>
                </div>
                <div className="rightSectionFive">
                        <Carousel />
                </div>
            </div> 
            <div className='footer'>
                <div className='footerContent'>
                    <h4>Follow Us:</h4>
                    <div className='socialsContainer'>
                    <a href='https://twitter.com/roostergrin?lang=en' target='_blank' rel="noopener noreferrer"><div className='instagram'></div></a>
                    <a href='https://www.facebook.com/RoosterGrin/' target='_blank' rel="noopener noreferrer"><div className='facebook'></div></a>
                    </div>
                </div>

            </div>
        </div>
    )
}