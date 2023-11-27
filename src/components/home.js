import { Link } from "react-router-dom";

const Home = () => {

    return (

        <>
            <div className="home">

                <div className="landing">

                    <div className="hero">

                        <div className="heroheading">
                            <h5>Welcome to Your Personalized University Journey.</h5>
                            <h1>Explore Your Ideal Universities. Discover the Perfect Program</h1>
                        </div>


                        <div className="heroContent">

                            <div className="herotext">
                                <p>With countless universities to choose from, the decision can be daunting. We
                                    simplify the process by matching your profile to universities that align with your academic achievements and career goals.
                                </p>

                                <h1>Explore Your Ideal Universities. Discover the Perfect Program</h1>
                            </div>

                            <div className="toform">
                                <p>Ready to explore your path to university?</p>
                                <button><Link to="/data-form">Let's get started</Link></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* career stages */}
            <section className="exploreStages">
                <h1>For every career stage</h1>
                <div className="stages">

                    <div className="stage">
                        <div className="stageCap">
                            <h4>High School Students</h4>
                            <p>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                            <div className="arrow"></div>
                        </div>
                        <div className="stageImg high-sch">
                        </div>
                    </div>

                    <div className="stage">
                        <div className="stageCap">
                            <h4>Under Graduates & College Students</h4>
                            <p>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                            <div className="arrow"></div>
                        </div>
                        <div className="stageImg college">
                        </div>
                    </div>

                    <div className="stage">
                        <div className="stageCap">
                            <h4>Working Professionals</h4>
                            <p>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                            <div className="arrow"></div>
                        </div>
                        <div className="stageImg professionals">
                        </div>
                    </div>

                    <div className="stage">
                        <div className="stageCap">
                            <h4>Career Changers</h4>
                            <p>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                            <div className="arrow"></div>
                        </div>
                        <div className="stageImg career-changer">
                        </div>
                    </div>
                </div>
            </section>

            {/* show case */}
            <section class="showCase">

                <div class="showContent">
                    <div class="showCase-col">
                        <div className="caseImg recomm"></div>
                        {/* <img src="/images/recommPs.jpg" alt="pic" /> */}
                        <div class="layer">
                            <h4>Personalized Recommendations</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit magni repellendus dolores? Culpa sit itaque facilis nulla doloremque perferendis!</p>
                        </div>
                    </div>
                    <div class="showCase-col">
                        {/* <img src="/images/perfectPs.jpg" alt="pic" /> */}
                        <div className="caseImg perfectPs"></div>
                        <div class="layer">
                            <h4>Discover the Perfect Program</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit magni repellendus dolores? Culpa sit itaque facilis nulla doloremque perferendis!</p>
                        </div>
                    </div>
                    <div class="showCase-col">
                        {/* <img src="/images/idealUni.jpg" alt="pic" /> */}
                        <div className="caseImg idealUni"></div>
                        <div class="layer">
                            <h4>Explore Your Ideal Universities</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit magni repellendus dolores? Culpa sit itaque facilis nulla doloremque perferendis!</p>
                        </div>
                    </div>
                    <div class="showCase-col">
                        {/* <img src="/images/guidance.jpg" alt="pic" /> */}
                        <div className="caseImg guidance"></div>
                        <div class="layer">
                            <h4>Guidance at Every Step</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit magni repellendus dolores? Culpa sit itaque facilis nulla doloremque perferendis!</p>
                        </div>
                    </div>
                </div>

            </section>

            {/* <!-----call to action----> */}

            <section className="calltoAction">
                <div className="cta">
                    <h1>
                        Lorem ipsum dolor sit amet consectetur
                        <br />
                        Lorem ipsum dolor sit.
                    </h1>

                    <div>
                        <button><Link to="/data-form">Let's get started</Link></button>
                        <button><Link to="/data-form">Go to careers</Link></button>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;