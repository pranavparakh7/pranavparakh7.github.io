const Navbar = () => {
    return (
        <nav className="navbar">
            
            <h1>Pranav Parakh</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">About Me</a>
                <a href="/">Contact</a>
                <a href="/">Blogs</a>
            </div>
            <img class="App-logo" src={process.env.PUBLIC_URL + "/Test_img.webp"} alt="Profile"></img>
        </nav>
    );
}

export default Navbar;