import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header">
      <div className="container headerContainer">
        <h2>KENIO FRONT</h2>
        <div className="socialContainer">
          <div className="socialItem">
            <FaGithubSquare />
            <a
              href="https://github.com/keniofront"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="socialItem">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/keniofront/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
