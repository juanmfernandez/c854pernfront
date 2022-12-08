import { ChangeEvent, useEffect, useState } from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduct, getAllProducts, updateProduct } from "../../app/state/productsSlice";
import { AppDispatch, AppStore } from "../../app/store";
import Swal from "sweetalert2";
import { Modal } from "../Modal/Modal";
import { deleteRequest, putRequest } from "../../services/httpRequest";
import { ErrorFormAdmin, Success } from "../../utils/notification";

const URL: string = import.meta.env.VITE_API_URL;
export type input = React.FormEvent<HTMLInputElement>;

export interface formUpdate {
  productName: string,
  description:string,
  quantityInStock:number,
  price:number
}



const EditAndDelete = () => {
  const dispatch = useDispatch<AppDispatch>();
  const stateProducts = useSelector((state: AppStore) => state.products.list);
  const [modal, setModal] = useState<Boolean>(false);
  const [idProduct,setIdProduct] = useState('')
  const [inputs, setInputs] = useState<formUpdate>({
    price:0,
    productName: "",
    description:"",
    quantityInStock:0,
  })
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const deleteProducts = (id: string) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este producto?",
      text: "No podras revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar !",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        deleteRequest('/products/delete/',id);
        dispatch(deleteProduct(id));
      }
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: typeof inputs[keyof typeof inputs] = event.target.value
    setInputs({ ...inputs, [event.target.name]: value })
  }

  const viewModal = (id:string) => {
    setModal(true);
    setIdProduct(id);
  }
  const hanldeSubmit = async (event:ChangeEvent<HTMLFormElement>) => {
      event.preventDefault()
      const infoFront:{} = {...inputs,idProduct}
      const formUpdate = await putRequest('/products/update/',idProduct,inputs)
     if(formUpdate) {
        dispatch(updateProduct(infoFront));
        setInputs({
          price:0,
          productName: "",
          description:"",
          quantityInStock:0,
        })
        setModal(false);
        Success('Actualizado','La actualizacion se realizo correctamente');
      }
      else {
        ErrorFormAdmin('La peticion fallo 💀')
      } 
    }


  return (
    <section className="flex flex-col gap-11  justify-center items-end p-2 pt-10 md:w-[100%] w-full">
      <h2 className="text-lg  font-semibold">
        Hola admin! me alegra tenerte de nuevo 😁!
      </h2>
      {stateProducts.map((product) => (
        <article
          key={product.id}
          className="flex p-1 gap-1 justify-between w-[100%] md:w-[65%] h-[auto] items-center shadow drop-shadow-2xl"
        >
          <div className="md:h-[8rem]  h-[7rem] ">
            <img
              src={product.ProductImgs[0].imgUrl}
              alt="imagen de prueba"
              className="h-full"
            />
          </div>
          <div className="flex flex-col text-sm w-2/5 md:gap-2">
            <p>Producto: {product.productName}</p>
            <p>Detalles: {product.description}</p>
            <p>Precio: {product.price}</p>
            <p>Cantidad disponible: {product.quantityInStock}</p>
          </div>
          <div className="flex flex-col gap-4 w-[8rem] items-center">
            <button
              onClick={() => deleteProducts(product.id)}
              className="flex items-center  bg-[#BF0426] md:rounded-[1.1em] md:p-[1em] rounded-[0.6em] p-[0.6em] text-[#DEDEDE] hover:bg-[#db2748]"
            >
              <BsTrashFill />
            </button>
            <button
              onClick={() => viewModal(product.id)}
              className="flex items-center  bg-[#40c057]  md:rounded-[1.1em] md:p-[1em] rounded-[0.6em] p-[0.6em] text-[#DEDEDE] font-bold hover:bg-[#56b066]"
            >
              <BsPencilSquare />
            </button>
          </div>
        </article>
      ))}
      {modal && (
        <Modal modal={modal} setModal={setModal}>
          <form onSubmit={hanldeSubmit} className="flex flex-col justify-center items-center gap-5 md:p-0 p-4 h-full w-screen md:w-full">
            <input
              type="text"
              name="productName"
              placeholder="Nombre del producto"
              className="form-inputs "
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Descripcion"
              className="form-inputs"
              onChange={handleChange}
            />
            <input
              type="number"
              name="quantityInStock"
              placeholder="Cantidad Disponible"
              className="form-inputs"
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Precio"
              className="form-inputs"
              onChange={handleChange}
            />

            <div className="flex gap-3 md:w-2/5  w-3/4">
              <button onClick={() => setModal(false)} className="form-buttons  bg-red-500 border-transparent font-semibold  text-white  hover:bg-red-800 transition-all">
                cancelar
              </button>
              <button  className="form-buttons  bg-emerald-600/75  rounded-md text-white font-semibold hover:bg-emerald-500  hover:text-white transition-all">
                Actualizar
              </button>
            </div>
          </form>
        </Modal>
      )}
    </section>
  );
};

export default EditAndDelete;
