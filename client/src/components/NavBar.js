
function NavBar() {
    return (
        <div className="NavBar">
            <header>
                <section id="headerRow" className="hero is-small">
                    <div className="hero-body is-flex is-justify-content-space-between">
                        <div className="titlelogo is-inline-flex">
                            <i className="fas fa-video mt-2"></i>
                            <p className="title mt-4 ml-3" id="watchhub">
                                Watch Hub
                            </p>
                        </div>

                        <div className="col-md-6 col-md-offset-3 is-justify-content-space-between">

                            <h2 className="mb-1">Welcome  <span className="member-name"></span>!</h2>
                            <a
                                href="/logout"
                                id="gitlink"
                                className="navbar-brand"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}


export default NavBar;