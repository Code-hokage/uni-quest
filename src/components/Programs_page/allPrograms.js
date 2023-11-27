import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AllPrograms = () => {
    return (
        <>
            <section className="allPrograms">

                <div className="programs">
                    <div className="progBox">
                        <h5 className="progName">English</h5>
                        <p>Program overview Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio, aliquid officia, id obcaecati cumque iusto earum quam laudantium nostrum dolore modi cupiditate necessitatibus eos sunt accusantium excepturi fuga maxime!</p>
                        <button>
                            <Link to="/program">Go to program</Link>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>

                <div className="relatedProgramsCont">
                    <h3>Related programs</h3>

                    <div className="relatedPrograms">

                        <div className="relatedProgBox">
                            <h5 className="relatedProgName">English</h5>
                            <p>Program overview Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio, aliquid officia, id obcaecati cumque iusto earum quam laudantium nostrum dolore modi cupiditate necessitatibus eos sunt accusantium excepturi fuga maxime!</p>
                            <button>
                                <Link to="/program">Go to program</Link>
                                <FontAwesomeIcon className="i" icon={faArrowRight} />
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default AllPrograms;