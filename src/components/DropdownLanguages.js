import {useState} from "react";

const DropdownLanguages = ({label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">
                        {label && label}
                    </label>
                    <div onClick={() => setOpen(!open)}
                         className={`ui selection dropdown ${open ? 'active visible' : ''}`}>

                        <input type="hidden" name="color"/>
                        <i className="dropdown icon"/>

                        <div className="default text">
                            {(selected && selected.label) ? selected.label : 'Loading ...'}
                        </div>

                        <div className={`'menu transition ${open ? 'visible' : 'hidden'}`}>
                            {options && selected && options.map(
                                (option) => (option.value !== selected.value) && (
                                    <div key={option.id}
                                         className="item"
                                         onClick={() => {
                                             console.log('dropdown item clicked!', option.value);
                                             onSelectedChange && onSelectedChange(option);
                                         }}
                                    >
                                        {option.label} / {option.value}
                                    </div>
                                )
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default DropdownLanguages;
