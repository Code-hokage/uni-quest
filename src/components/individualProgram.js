// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const Program = () => {
    return (
        <div className="programContainer">
            <div className="programTitle">
                <h1>Bsc. Computer Science</h1>
            </div>

            <section className="main">
                <div className="overview">
                    <h3><span></span>Overview</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id omnis optio labore, earum nesciunt quidem maiores quasi, cum, commodi maxime. Ipsam distinctio voluptas doloribus quaerat vero dolor assumenda voluptatem maiores consequuntur fuga? Eaque vel voluptatibus consectetur dolorum mollitia nesciunt quia accusantium impedit minus ab. Distinctio earum quaerat nisi autem?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam velit repellendus exercitationem dignissimos molestiae dolore delectus ea, quibusdam, blanditiis, necessitatibus dolorum ratione minus adipisci labore placeat accusantium numquam aspernatur eos.</p>
                </div>
                <div className="aims">
                    <h3><span></span>Aims & Objectives</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id omnis optio labore, earum nesciunt quidem maiores quasi, cum, commodi maxime. Ipsam distinctio voluptas doloribus quaerat vero dolor assumenda voluptatem maiores consequuntur fuga? Eaque vel voluptatibus consectetur dolorum mollitia nesciunt quia accusantium impedit minus ab. Distinctio earum quaerat nisi autem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis cumque consequatur consectetur perferendis voluptates quo perspiciatis maxime asperiores placeat ut, libero, tempora pariatur recusandae provident, laboriosam non commodi nemo!</p>
                </div>

                <div className="subjectsCombination">
                    <h3><span></span>Subjects Combination</h3>
                    <div className="subjects">
                        <div className="combinations">
                            <strong>General Science</strong>
                            <ul>
                                <li>Elective Maths</li>
                                <li>Chemestry</li>
                                <li>Physics</li>
                            </ul>
                        </div>
                        <div className="combinations">
                            <strong>General Arts</strong>
                            <ul>
                                <li>Elective Maths</li>
                                <li>Elective ICT</li>
                                <li>Economics</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="institutions">
                    <h3><span></span>Institutions Offering Program</h3>
                    <ul>
                        <li>KNUST</li>
                        <li>UCC</li>
                        <li>LEGON</li>
                        <li>UDS</li>
                        <li>UPSA</li>
                    </ul>
                </div>


            </section>




        </div>
    );
}

export default Program;