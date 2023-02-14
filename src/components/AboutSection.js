import home1 from '../img/home1.png'


const AboutSection = ()=>{
    return (
        <div className="">
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Hello there, Welcome.</h2>
                    </div>
                    <div className="hide">
                        <h2>We push your <span>dream</span> Buisness</h2>
                    </div>
                    <div className="hide">
                        <h2>Marketing</h2>
                    </div>
                    <div className="">
                        <p>
                            We can do what you have imagined to do for yourself. We let know the world your buisness and your ideas. Let us put wings so that it can fly.
                        </p>
                        <button>Contact us</button>
                    </div>
                    <div className="image">
                        <img src={home1} alt="Basics" />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AboutSection;