const Alert = ({msg, color}) => {
    return(
        <>
            <div className={`alert alert-${color} mt-2`}>
                <p className="m-0">{msg}</p>
            </div>
        </>
    )
}

export default Alert