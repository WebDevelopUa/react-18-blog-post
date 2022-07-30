import {useEffect, useRef, useState} from "react";

const DropdownColors = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const uiFormRef = useRef()
    ;
    useEffect(
        () => {
            console.log('useEffect - Set manual event listener to a body');

            const onBodyClick = (e) => {
                console.log('1) body clicked!', e.target);

                if (uiFormRef.current && uiFormRef.current.contains(e.target)) {
                    console.log('1.1) uiFormRef.current.contains(e.target)', uiFormRef.current);
                    return;
                }

                setOpen(false);
            }

            // Add even listener
            document.body.addEventListener('click', onBodyClick, {capture: true});

            return () => {
                // Cleanup even listener
                document.body.removeEventListener('click', onBodyClick)
            }

        }, []
    )

    return (
        <div>
            <h3>Dropdown colors</h3>
            <div ref={uiFormRef} className="ui form">
                <div className="field">
                    <label className="label">
                        Chose a color
                    </label>
                    <div onClick={() => {
                        console.log('2) dropdown menu clicked!');
                        setOpen(!open)
                    }}
                         className={`ui selection dropdown ${open ? 'active visible' : ''}`}>
                        <input type="hidden" name="color"/>
                        <i className="dropdown icon"/>
                        <div className="default text"
                             style={{color: selected.value.toString()}}
                        >
                            {selected.label}
                        </div>

                        <div className={`'menu transition ${open ? 'visible' : 'hidden'}`}>
                            {options.map(
                                (option) => (option.value !== selected.value) && (
                                    <div key={option.id}
                                         className="item"
                                         onClick={() => {
                                             console.log('3) dropdown item clicked!', option.value);
                                             onSelectedChange(option);
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

export default DropdownColors;
