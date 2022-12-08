import { ChangeEvent, useState } from "react";
import { getRequest, postRequest, postRequestData } from "../../services/httpRequest";
import { ErrorFormAdmin, Success } from "../../utils/notification";
import Spinner from "../Spinner/Spinner";

export interface inputs {
  productName: string;
  description: string;
  quantityInStock: number;
  price: number;
  productPic?: [{}];
}

export type files = FormData;

const URL: string = import.meta.env.VITE_API_URL;

const Add = () => {
  const [productName, setpProductName] = useState<string | Blob>("");
  const [description, setDescription] = useState<string | Blob>("");
  const [quantityInStock, setQuantityInStock] = useState<string | Blob>("");
  const [price, setPrice] = useState<string | Blob>("");
  const [productPic, setProductPic] = useState<FileList>();
  const [sizes, setSizes] = useState<string | Blob>("");
  const [colours, setColours] = useState<string | Blob>("");
  const [categoriesIds, setCategoriesIds] = useState<string | Blob>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let len: number;
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    setIsLoading(true);
    len = 8;
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("quantityInStock", quantityInStock);
    formData.append("price", price);
    formData.append("sizes", sizes);
    formData.append("colours", colours);
    formData.append("categoriesIds", categoriesIds);
    for (let i = 0; i < len; i++) {
      formData.append("productPic", productPic ? productPic[i] : "");
    }
    e.preventDefault();
    postRequestData(formData, "/products/save")
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        Success("Su producto se generó correctamente", "😁");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err.error);
        ErrorFormAdmin("Faltan campos que rellenar");
      });
  };
  const handlePay = () => {
    setIsLoading(true);
    
    getRequest("/checkout/process?price="+price)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        Success("Su producto se generó correctamente", "😁");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err.error);
        ErrorFormAdmin("Faltan campos que rellenar");
      });
  };
  return (
    <div className=" flex p-2 flex-col gap-10 w-[100%]  md:items-end  h-screen">
      <h2 className="text-lg font-semibold w-[100vw] md:w-auto ">
        Hola admin! me alegra tenerte de nuevo 😁!
      </h2>
      <form
        className="flex flex-col justify-center items-center gap-5 md:p-0 p-4 h-full w-screen md:w-[80%]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="productName"
          placeholder="Nombre del producto"
          className="form-inputs "
          onChange={(e) => setpProductName(e.target.value)}
          value={productName as string}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripcion"
          className="form-inputs"
          onChange={(e) => setDescription(e.target.value)}
          value={description as string}
        />
        <input
          type="number"
          name="quantityInStock"
          placeholder="Cantidad Disponible"
          className="form-inputs"
          onChange={(e) => setQuantityInStock(e.target.value)}
          value={quantityInStock as string}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          className="form-inputs"
          onChange={(e) => setPrice(e.target.value)}
          value={price as string}
        />

        <input
          type="text"
          name="sizes"
          placeholder="Talle"
          className="form-inputs"
          onChange={(e) => setSizes(e.target.value)}
          value={sizes as string}
        />
        <input
          type="text"
          name="colours"
          placeholder="Color"
          className="form-inputs"
          onChange={(e) => setColours(e.target.value)}
          value={colours as string}
        />
        <input
          type="text"
          name="categoriesIds"
          placeholder="Categoria"
          className="form-inputs"
          onChange={(e) => setCategoriesIds(e.target.value)}
          value={categoriesIds as string}
        />

        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-[12rem]  border-2 border-gray-300  rounded-lg cursor-pointer   hover:bg-[#3A3A3A]  ">
            <div className="flex flex-col items-center justify-center pt-2 pb-2">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Enviar 3 imagenes</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="productPic"
              multiple
              onChange={(e) =>
                setProductPic(e.target.files ? e.target.files : productPic)
              }
            />
          </label>
        </div>
        <div className="flex gap-3 md:w-2/5  w-3/4">
          <button className="form-buttons  bg-red-500 border-transparent font-semibold  text-white  hover:bg-red-800 transition-all">
            cancelar
          </button>
          <button className="form-buttons  bg-emerald-600/75  rounded-md text-white font-semibold hover:bg-emerald-500  hover:text-white transition-all">
            crear
          </button>

          {isLoading && <Spinner windowSize="full" />}
        </div>
      </form>
      <button onClick={handlePay} className="form-buttons  bg-blue-500  rounded-md text-white font-semibold hover:bg-blue-600  hover:text-white transition-all">
            Generar Pago
          </button>
    </div>
  );
};

export default Add;
// const [input,setInput] = useState<inputs>({
//   productName:'',
//   description:'',
//   quantityInStock:0,
//   price:0,
//   productPic:[{}]
// })
//const formDataCreate = new FormData();
// const handleChange = (event: ChangeEvent<HTMLInputElement> ) =>{
//   let value: typeof input[keyof typeof input] = event.target.value
//   formDataCreate.append("productName", event.target.value)
//   setInput({ ...input, [event.target.name]: value })
// }
// const handleImage = (event:ChangeEvent<HTMLInputElement>) => {
//   const img = event.currentTarget.files
//   formDataCreate.getAll('productPic')
//   if(img){
//     const formData = new FormData();
//     formData.getAll('productPic')
//     input.productPic?.push(formData.getAll('productPic'))
//   }

//   setInput({...input})

// }
// const handleProductPicChange = (event: ChangeEvent<HTMLInputElement> ) =>{
//   console.log("lenlen", event.currentTarget.files?.length)
//   setProductPic(event.target.files? event.target.files : productPic)
//   len = event.currentTarget.files?.length? event.currentTarget.files.length : 2;
//   console.log("len",len)
//   console.log("productPic",productPic)
// }
// console.log(input.productPic)
