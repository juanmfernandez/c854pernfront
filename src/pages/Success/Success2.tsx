import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import { useCreateUser } from "../../hooks/useUser";
import { PublicRoutes } from "../../models/routes";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppStore } from "../../app/store";

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../../components/Navbar/Navbar";
import Cart from "../../components/Cart/Cart";

const Register = () => {
    const [width, setWhidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);
    const { logged } = useSelector((store: AppStore) => store.auth);

  return (
    <>
    <Navbar width={width} setWidth={setWhidth} setIsOpen={setIsOpen} />
    {logged && <Cart isOpen={isOpen} setIsOpen={setIsOpen} />}
    <Link className="flex items-center m-4" to="/catalogue">
      <IoIosArrowBack className="mr-2" /> Volver a la tienda
    </Link>
    
    <div className="py-4 mt-4 max-w-[90%] sm:max-w-[70%] md:max-w-2xl md:py-0 lg:max-w-4xl mx-auto md:mt-20 h-fit border rounded-md drop-shadow">
      <div className="flex items-center justify-center md:h-[700px]">
        <div className="flex flex-col sm:w-full  md:mx-auto md:w-[40%] justify-around px-8 h-full">
          <div className="w-full text-start">
            <h2 className="font-semibold text-3xl">Felicitaciones</h2>
            <p className="font-medium text-sm">
              ¡Tu compra se ha realizado con éxito!
            </p>
          </div>
          <Link className="flex items-center m-4" to="/catalogue">
            <IoIosArrowBack className="mr-2" /> Volver a la tienda
        </Link>
          <Link to={`/${PublicRoutes.LOGIN}`}>
            ¿Ya tenés una cuenta?{" "}
            <span className="font-semibold text-black">Inicia sesión</span>
          </Link>
        </div>
        <div className="hidden md:block w-[60%] h-full">
          <div className="rounded-r-md bg-hero-register bg-center bg-cover bg-no-repeat h-full"></div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Register;