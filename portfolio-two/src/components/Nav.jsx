const Nav = ({handleClick3, handleClick2, handleClick }) => {

    return (
        <div className='navBar'>
            <button onClick={handleClick}className="aboutMeButton">About Me</button>
            <button onClick={handleClick2}className="projectsButton">Projects</button>
            <button onClick={handleClick3}className="connectButton">Connect</button>
            <button className="resumeButton">Resume</button>
        </div>
    )
}

export default Nav;