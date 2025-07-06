/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "@/styles/globals.css"; // or wherever your h-shape class is

export default function Skills() {

    const skills_list = [
        {
            title: "Languages",
            list: [
                { name: "JavaScript", year: 2.6, percentage: 80, icon: "fab fa-python" },
                { name: "TypeScript", year: 0.5, percentage: 50, icon: "fas fa-code" },
            ]
        },
        {
            title: "Frameworks",
            list: [
                { name: "Node JS", year: 3, percentage: 80, icon: "fab fa-node-js" },
                { name: "Express JS", year: 2, percentage: 0, icon: "fab fa-node-js" },
            ]
        },
        {
            title: "Database",
            list: [
                { name: "MySQL", year: 1, percentage: 70, icon: "fas fa-database" },
                { name: "MongoDB", year: 2, percentage: 70, icon: "fas fa-database" },
                { name: "Redis", year: 0.6, percentage: 50, icon: "fas fa-database" },
            ]
        },
        {
            title: "Cloud, Tools & Other",
            list: [
                { name: "GCP", year: 1, percentage: 80, icon: "fab fa-google" },
                { name: "Firebase", year: 1, percentage: 80, icon: "fas fa-fire" },
                { name: "HTML5", year: 1, percentage: 80, icon: "fab fa-html5" },
                { name: "CSS3", year: 1, percentage: 80, icon: "fab fa-css3-alt" },
                { name: "Bootstrap", year: 1, percentage: 80, icon: "fab fa-bootstrap" },
                { name: "Git", year: 1, percentage: 80, icon: "fab fa-git-alt" },
                { name: "VS Code", year: 1, percentage: 80, icon: "fas fa-code" },
                { name: "Postman", year: 1, percentage: 80, icon: "fas fa-paper-plane" },
                { name: "Jira", year: 1, percentage: 80, icon: "fab fa-jira" },
                { name: "Rest APIs", year: 1, percentage: 80, icon: "fas fa-plug" },
                { name: "JSON", year: 1, percentage: 80, icon: "fas fa-code" },
            ]
        }
    ];

    return <>
        <section id="work_experince" className="min-h-screen text-white work-experince-section">
            <div className="main-title">
                <h2>
                    Technical <span>Expertise</span>
                    <span className="bg-text">Skills</span>
                </h2>
            </div>
            <div className="min-h-[80vh] px-[10rem]">
                {
                    skills_list.map((skill) => {
                        return <div className="skills-group">
                            <div className="skills-group-title">{skill.title}</div>
                            <div className="skills-grid">
                                {
                                    skill.list.map((element) => {
                                        return <div className="skill-card">
                                            <span className="skill-label">
                                                <span><i className={`${element.icon}`}></i> {element.name}</span>
                                                <span>{element.year} yr | {element.percentage}%</span>
                                            </span>
                                            <div className="progress-container">
                                                <div className="progress-bar" style={{ width: `${element.percentage}%` }}></div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    </>
}