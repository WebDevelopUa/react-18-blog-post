import PositiveButton from "../components/PositiveButton";
import NegativeButton from "../components/NegativeButton";
import Group from "../components/Group";
import DropdownColors from "../components/DropdownColors";
import {dropdownColors} from "../data/dropdownColors";
import {useState} from "react";

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

            <p style={{color: selected.value.toString()}}>
                Selected color is: {selected.value}
            </p>

            <button
                className="ui button"
                onClick={() => setShowDropdown(!showDropdown)}>
                Show Dropdown
            </button>

            {showDropdown ? (
                <DropdownColors
                    options={dropdownColors}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            ) : null}
        </div>
    );
};

export default Home;
