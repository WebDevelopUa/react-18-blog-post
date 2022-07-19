const Loading = ({message = 'Semantic UI Loading ...'}) => (
    <div className="ui active dimmer">
        <div className="ui big text loader">
            {message}
        </div>
    </div>
)

export default Loading
