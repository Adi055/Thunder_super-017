import styles from "./Home.module.css"

function Home(){

    return (
        <div>
            <video style={{marginTop:"15px"}} className={styles.video} autoPlay loop muted>
        <source src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906" type="video/mp4" />
        </video>
        <div className={styles.front}>
            <button style={{background:"white",color:"black"}}> Discover</button>
            <button>Animation</button>
            <button>Branding</button>
            <button style={{height:"4vw",width:"8vw"}}>Illustration</button>
            <button>Mobile</button>
            <button>Print</button>
            <button >Product Design</button>
            <button>Typography</button>
            <button>Web Design</button>
        </div>
        <div className={styles.text}>
            <h1>Explore the world's leading <br/> design portfolios</h1>
        </div>
        <div className={styles.para}>
            <h2>Millions of designers and agencies around the world showcase their portfolio work <br/> on Dribbble - the home to the world's best design and creative professionals.</h2>
        </div>
        <div className={styles.search}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&usqp=CAU" alt="" />
            <input type="search"  placeholder="Search..."/>
        </div>
        <div className={styles.bottom}>
            <button style={{backgroundColor:"transparent",border:"none",color:"white"}}>Tending searches</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2.5vw",width:"8vw",marginRight:"15px",borderRadius:"50px",border:"1px solid white"}}>landing page</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2vw",width:"4vw",marginRight:"15px",borderRadius:"50px",border:"1px solid white",marginTop:"3px"}}>ios</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2vw",width:"4vw",marginRight:"15px",borderRadius:"50px",border:"1px solid white",}}>food</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2.5vw",width:"8vw",marginRight:"15px",borderRadius:"50px",border:"1px solid white"}}>landingpage</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2.5vw",width:"8vw",marginRight:"15px",borderRadius:"50px",border:"1px solid white"}}>uxdesign</button>
            <button style={{backgroundColor:"transparent",color:"white",height:"2.5vw",width:"8vw",marginRight:"15px",borderRadius:"50px",border:"1px solid white"}}>app design</button>
        </div>
        </div>
    )
}
export default Home