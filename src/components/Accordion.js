import {Fragment, useState} from "react";

const Accordion = ({accordionItems}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderItems = accordionItems.map(
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

    return (
        <div className="ui styled accordion">
            {accordionItems && renderItems}
        </div>
    )
}
export default Accordion;
