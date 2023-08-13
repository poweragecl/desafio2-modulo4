const SocialButton = ({icono}) => {
    return(
        <>
            <a href="#" className="social-link m-2 text-black border rounded-circle">
                <i className={icono}></i>
            </a>
        </>
    )
}

export default SocialButton
