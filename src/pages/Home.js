import PositiveButton from "../components/PositiveButton";
import NegativeButton from "../components/NegativeButton";
import Group from "../components/Group";
import DropdownColors from "../components/DropdownColors";
import {dropdownColors} from "../data/dropdownColors";
import {useState} from "react";
import ColorContext from "../contexts/ColorContext";
import DropdownButton from "../components/DropdownButton";
import AppModal from "../components/AppModal";

const Home = () => {
    const [selected, setSelected] = useState(dropdownColors[0]);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <h1>Homepage</h1>
            <h3>Semantic UI Buttons:</h3>
            <Group>
                <PositiveButton/>
                <NegativeButton/>
            </Group>

            <br/>
            <br/>

            <p className="ui header" style={{color: selected.value.toString()}}>
                Selected color is: {selected.value}
            </p>

            {/* Implement local Context Provider only for the button; hardcoded value */}
            <ColorContext.Provider value="primary">
                <DropdownButton
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}/>
            </ColorContext.Provider>

            <br/>
            <br/>

            {showDropdown && (
                <DropdownColors
                    options={dropdownColors}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            )}

            <br/>
            <br/>
            <AppModal/>

        </div>
    );
};

export default Home;
