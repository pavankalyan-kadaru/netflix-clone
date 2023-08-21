import "./about.css"

const About = ()=>{
    return (
        <>
        <div className="fade">
             
        </div>
        <div className="about_div">
        <h1>Few details</h1>

            <details className="details">
                <summary className="summary">About-Me</summary>
                <p className="para">I'm Pavankalyan from Hyderabad graduated in 2022, after my graduation, I have taken a web development program to develop my skills by the end of the course, I gained new skills and experience and also worked on few project which help me to build confidence to work on real world project.</p>     
            </details>

            <details className="details">
                <summary className="summary">About-application</summary>
                <p className="para">This the a demo application similar to movie streaming application Netflix biuld using ReactJs and other modules. The movie data is dynamic and fetched from Tmdb API and also one can view a video related to the movie by clicking on the movie poster</p>
            </details>

            <details className="details">
                <summary className="summary">Technologies Used</summary>
                <p className="para">This application is based on reactJs where I have used Hooks and also other npm modules such as react-youtube for the relative video of the movies and all movie datas are dynamic and fetch from Tmdb API. To deploy the appication I have used firebase </p>

            </details>

            <details className="details">
                <summary className="summary">SKills</summary>
                <p className="para">Programming language: Python | Javascript   \\\front-end: HTML | CSS | Typescript | ReactJs | Json |   \\\Other: Data Structure and Algorithms | Django | MYSQL | DBMS | Problem solving</p>

            </details>


        </div>
        </>
    )
}

export default About;