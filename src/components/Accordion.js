import {accordionItems} from "../data/accordionItems";
import {Fragment, useState} from "react";

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <div>
            <h2><a href="https://ru.reactjs.org/docs/hooks-reference.html" rel="noreferrer noopener" target="_blank">Справочник API хуков</a></h2>
            <h2><a href="https://www.w3schools.com/react/react_hooks.asp" rel="noreferrer noopener" target="_blank">React Hooks</a></h2>
            <div className="ui styled accordion">
                {
                    accordionItems.map(
                        ({id, title, content, link}, index) => (
                            <Fragment key={id}>
                                <div className={`title ${index === activeIndex ? 'active' : ''}`}
                                     onClick={() => onTitleClick(index)}
                                >
                                    <i className="dropdown icon"/>
                                    {index + 1}) {title}
                                </div>
                                <div className={`content ${index === activeIndex ? 'active' : ''}`}>
                                    <p> {content}</p>
                                    <a href={link} rel="noreferrer noopener" target="_blank">{link}</a>
                                </div>
                            </Fragment>
                        )
                    )
                }
            </div>
        </div>
    )
}
export default Accordion;
