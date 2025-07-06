import "@/styles/globals.css"; // or wherever your h-shape class is

export default function AboutPage() {
    return <>
        <section id="about" className="min-h-screen text-white about-section">
            <div className="bg-main-center">
                <svg className="blur-[100px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" height={500}>
                    <path fill="#CB2739" d="M48.6,-54.2C61.9,-46.8,71,-30.4,73.8,-13.2C76.6,4,73.2,22.2,63.6,34.8C54,47.4,38.2,54.6,21.6,61.6C5,68.6,-12.5,75.5,-24.4,69.9C-36.4,64.4,-42.8,46.4,-54.2,29.8C-65.5,13.2,-81.9,-2.1,-83.3,-18.3C-84.7,-34.4,-71.2,-51.6,-54.8,-58.5C-38.4,-65.3,-19.2,-62,-0.8,-61.1C17.6,-60.1,35.3,-61.6,48.6,-54.2Z" transform="translate(100 100)" />
                </svg>
            </div>
            {/* About Section Content */}
            <div className="main-title">
                <h2>
                    About <span>me</span>
                    <span className="bg-text">my stats</span>
                </h2>
            </div>
            <div className="flex min-h-[80vh] px-[10rem]">
                <div className="w-4/6 flex flex-col justify-center mx-auto py-8">
                    <div className="card">
                        <h1 className="uppercase text-[2rem] font-bold mb-4 mt-[0]">
                            Information About Me
                        </h1>
                        <p className="text-gray-700 leading-relaxed">
                            I&apos;m a dedicated Software Developer with over 3 years of experience in full-stack web application development, with a strong emphasis on backend engineering. My core expertise lies in building robust, scalable, and high-performance server-side applications using Node.js, leveraging its asynchronous architecture and rich ecosystem to deliver reliable backend solutions.
                            <br /><br />
                            I have significant experience working with the MEAN stack (MongoDB, Express.js, Angular, Node.js), enabling me to develop end-to-end web applications that are both efficient and maintainable. On the front end, I have a solid grasp of Angular, allowing me to create dynamic, responsive, and user-centric interfaces that enhance user experience and performance.
                            <br /><br />
                            I enjoy collaborating in agile teams, participating in sprint planning, code reviews, and contributing to a culture of clean code and continuous improvement. I take pride in delivering well-tested features, optimizing system performance, and resolving complex technical issues.
                            <br /><br />
                            With a passion for backend development and full-stack design, I constantly seek opportunities to learn emerging technologies and apply them to real-world problems. My goal is to create software solutions that are not only functional but also scalable, secure, and user-friendly.
                        </p>
                    </div>
                </div>

                <div className="w-2/6 relative flex items-center justify-center overflow-hidden">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">10+</p>
                            <p className="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">3+</p>
                            <p className="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}