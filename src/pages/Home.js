import PositiveButton from "../components/PositiveButton";
import NegativeButton from "../components/NegativeButton";
import Group from "../components/Group";

const Home = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <h3>Semantic UI Buttons:</h3>
            <Group>
                <PositiveButton/>
                <NegativeButton/>
            </Group>
        </div>

    );
};

export default Home;
