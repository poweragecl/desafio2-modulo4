import Alert from "./Alert"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"


const Registro = ({alert, setAlert}) => {
    return(
        <>

            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="registro bg-white p-5 rounded text-center">

                            <h1 className="fw-bold">Crea tu cuenta</h1>

                            <div className="social-list my-3 d-flex justify-content-center">
                                <SocialButton icono ="fa-brands fa-facebook fa-2xl"></SocialButton>
                                <SocialButton icono ="fa-brands fa-github fa-2xl"></SocialButton>
                                <SocialButton icono ="fa-brands fa-linkedin-in fa-2xl"></SocialButton>
                            </div>

                            <p className="fs-5 text">O usa tu email para registrarte</p>

                            <Formulario setAlert= {setAlert}></Formulario>
                            {alert.msg && <Alert msg={alert.msg} color={alert.color}/>}

                        </div>
                    </div>
                </div>
            </div>


            
        </>
    )
}

export default Registro