import Resume from "../../assets/resume.pdf"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

const Socials = () => {
    const socialsArray = [
        {
            name: "GitHub",
            url: "https://github.com/wmaKRET",
            icon: <FaGithub size={30} />
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/wojciech-kret/",
            icon: <FaLinkedin size={30} />
        },
        {
            name: "Resume",
            url: Resume,
            icon: <BsFillPersonLinesFill size={30} />
        },
        {
            name: "Contact",
            url: "mailto:wmakret91@gmail.com",
            icon: <HiOutlineMail size={30} />
        }
    ]

    const socialElements = socialsArray.map((item, i) => (
        <a
            key={i}
            className="socials__item"
            href={item.url}
            target="_blank"
            rel="noreferrer"
        >
            <p className="socials__item-link">{item.name}</p>
            {item.icon}
        </a>
    ))

    return (
        <div className="socials">
            {socialElements}
        </div>
    )
}

export default Socials