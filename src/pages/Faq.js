import Accordion from "../components/Accordion";
import {accordionItemsReactHooks} from "../data/accordionItemsReactHooks";
import {accordionItemsReduxCycle} from "../data/accordionItemsReduxCycle";

const Faq = () => (
    <div>
        <h1>FAQ Page</h1>
        <div className="ui title">
            <h2><a href="" rel="noreferrer noopener" target="_blank">Redux Cycle</a></h2>
        </div>
        <Accordion accordionItems={accordionItemsReduxCycle}/>
        <br/>
        <p>Redux helps to separate App Business logic from View logic</p>

        <br/>
        <br/>

        <div className="ui title">
            <h2><a href="https://ru.reactjs.org/docs/hooks-reference.html" rel="noreferrer noopener" target="_blank">Справочник API хуков</a></h2>
            <h2><a href="https://www.w3schools.com/react/react_hooks.asp" rel="noreferrer noopener" target="_blank">React Hooks</a></h2>
        </div>
        <Accordion accordionItems={accordionItemsReactHooks}/>

        <br/>
    </div>
)

export default Faq;
