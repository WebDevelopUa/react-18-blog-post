//  add:  const [message, setMessage] = useState({});

const ErrorMessage = ({error, children}) => (

    <div className={`ui message ${error.message ? 'red' : 'hidden'}`}>
        <p className={`header aligned centered`}>{error && error.message}</p>
        {children && children}
    </div>

)

export default ErrorMessage;
