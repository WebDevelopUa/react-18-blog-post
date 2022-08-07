import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Container, Icon, Modal} from 'semantic-ui-react';

function exampleReducer(state, action) {
    switch (action.type) {
        case 'close':
            return {open: false}
        case 'open':
            return {open: true, size: action.size}
        default:
            throw new Error('Unsupported action...')
    }
}

const AppModal = () => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        size: undefined,
    });

    const {open, size} = state;

    return ReactDOM.createPortal(
        <Container>
            <Button onClick={() => dispatch({type: 'open', size: 'mini'})}>
                Mini Modal
            </Button>
            <Button onClick={() => dispatch({type: 'open', size: 'tiny'})}>
                Tiny Modal
            </Button>
            <Button onClick={() => dispatch({type: 'open', size: 'small'})}>
                Small Modal
            </Button>
            <Button onClick={() => dispatch({type: 'open', size: 'large'})}>
                Large Modal
            </Button>
            <Button onClick={() => dispatch({type: 'open', size: 'fullscreen'})}>
                <Icon name='desktop'/>
                Fullscreen Modal
            </Button>

            <Modal
                size={size}
                open={open}
                onClose={() => dispatch({type: 'close'})}
            >
                <Modal.Header>Delete Your Account</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => dispatch({type: 'close'})}>
                        No
                    </Button>
                    <Button positive onClick={() => dispatch({type: 'close'})}>
                        Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        </Container>
        ,
        document.querySelector('#portal')
    );
}

export default AppModal;
