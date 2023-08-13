import { useState } from "react";


const Formulario = ({setAlert}) => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validarDatos = (e) => {

        e.preventDefault();

        if(password !== confirmPassword){
            setAlert({
                msg: "Las contraseñas no coinciden!",
                color: "danger",
            });
            return;
        }

        if(nombre ==="" || email === "" || password === "" || confirmPassword === ""){
            setAlert({
                msg: "Completa todos los campos!",
                color: "danger"
            });
            return;
        }

        setAlert({
            msg: "Cuenta creada exitosamente!",
            color: "success"
        });

        setNombre("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    

    }

    return(
        <>
            <form onSubmit={validarDatos}>
                <input 
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className = "form-control form-control-lg mb-3"
                    value={nombre}
                    onChange= { e => setNombre(e.target.value)}
                />

                <input 
                    type="email"
                    name="email"
                    placeholder="correo@ejemplo.com"
                    className = "form-control form-control-lg mb-3"
                    value={email}
                    onChange= { e => setEmail(e.target.value)}
                />

                <input 
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className = "form-control form-control-lg mb-3"
                    value={password}
                    onChange= { e => setPassword(e.target.value)}
                />

                <input 
                    type="password"
                    name="password"
                    placeholder="Confirma tu contraseña"
                    className = "form-control form-control-lg mb-3"
                    value={confirmPassword}
                    onChange= { e => setConfirmPassword(e.target.value)}
                />


                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-success btn-lg mb-3"> Registrarse</button>
                </div>

            </form>



        </>
    )
}

export default Formulario