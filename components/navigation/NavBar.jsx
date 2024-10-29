import { BsMoonStars } from "react-icons/bs";
import React from "react";
import { AiOutlineHome, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

class NavBar extends React.Component {
    constructor(darkMode, setMode) {
        super(darkMode, setMode);
        this.state = {
            activeNav: "#main",
            itemName: '',
        };

        this.activeStyle = "text-blue-800 bg-blue-100 shadow-lg dark:text-white dark:bg-blue-700 dark:shadow-gray-600";
        this.itemNameStyle = "text-black capitalize bg-gradient-to-r from-blue-500 to-blue-300 w-max z-10 py-2 px-3 fixed flex gap-3 rounded-xl dark:from-blue-700 dark:to-blue-900 bottom-16 left-1/2 transform -translate-x-1/2 dark:text-white invisible md:invisible lg:visible";
        this.navItemStyle = "p-3 rounded-full flex text-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-300 hover:text-blue-800 dark:hover:bg-gradient-to-r dark:hover:from-blue-600 dark:hover:to-blue-700 dark:hover:text-white";
    }

    removeItemName() {
        this.setState({ itemName: "" });
    }

    componentDidMount() {
        let sections = document.querySelectorAll("section");
        window.onscroll = () => {
            let scrollPosition = document.documentElement.scrollTop;
            sections.forEach(section => {
                if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    this.setState({ activeNav: `#${section.attributes.id.value}` });
                }
            });
        };
    }

    render() {
        return (
            <nav>
                <span id="nav-text" className={this.state.itemName === "" ? this.itemNameStyle + " hidden" : this.itemNameStyle}>
                    {this.state.itemName}
                </span>

                <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white w-max z-10 py-2 px-3 fixed flex gap-3 rounded-full backdrop-blur-md bottom-2 left-1/2 transform -translate-x-1/2 dark:from-blue-700 dark:to-blue-900 shadow-md dark:shadow-lg">

                    <a href="#main"
                       onClick={() => this.setState({ activeNav: '#main' })}
                       onMouseEnter={() => this.setState({ itemName: "Accueil" })}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#main" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <AiOutlineHome />
                    </a>

                    <a href="#about"
                       onClick={() => this.setState({ activeNav: '#about' })}
                       onMouseEnter={() => this.setState({ itemName: "À propos" })}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#about" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <AiOutlineUser />
                    </a>

                    <a href="#projects"
                       onClick={() => this.setState({ activeNav: '#projects' })}
                       onMouseEnter={() => this.setState({ itemName: "Projets" })}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#projects" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <AiOutlineProject />
                    </a>

                    <a href="#services"
                       onClick={() => this.setState({ activeNav: '#services' })}
                       onMouseEnter={() => this.setState({ itemName: "Services" })}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#services" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <RiServiceLine />
                    </a>

                    <a href="#contact"
                       onClick={() => this.setState({ activeNav: '#contact' })}
                       onMouseEnter={() => this.setState({ itemName: "Contact" })}
                       onMouseLeave={() => this.removeItemName()}
                       className={this.state.activeNav === "#contact" ? `${this.activeStyle} ${this.navItemStyle}` : this.navItemStyle}
                    >
                        <BiMessageSquareDetail />
                    </a>

                    <span className={`${this.navItemStyle} bg-blue-800 text-white dark:bg-blue-100 dark:text-blue-800 cursor-pointer`}
                          onMouseOver={() => this.setState({ itemName: this.props.darkMode ? "Light Mode" : "Dark Mode" })}
                          onMouseLeave={() => this.removeItemName()}
                          onClick={() => this.props.setMode(!this.props.darkMode)}
                    >
                        <BsMoonStars />
                    </span>
                </div>
            </nav>
        );
    }
}

export default NavBar;
