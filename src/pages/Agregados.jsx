import React from "react";
import Navbar from "../components/NavBar";
import Cartas from "../components/Cartas";

const Agregados = () =>{
    return(
    <div>
    <Navbar/>
    <Caras nombre='Jamon' descripcion='' precio='$100' />
    <Cartas nombre='Queso' descripcion='' precio='$100' />
    <Cartas nombre='Huevo' descripcion='' precio='$100' />
    <Cartas nombre='Cheddar' descripcion='' precio='$200' />
    <Cartas nombre='Bacon' descripcion='' precio='$200' />
    </div> 
    )
}

export default Agregados;