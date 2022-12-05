import { GoTrashcan } from "react-icons/go";
export type CartItem = {
    name: string
    id: string
    color: string
    size: string
    price: number
}
const ItemCartCard = ({name, id, color, size, price}: CartItem) => {
  return (
    <div className="w-full bg-[#E9E9E9] p-2">
        <div className="flex gap-3">
            <div className="w-[50px] h-[75px] sm:w-[100px] sm:h-[150px] bg-cyan-700 "></div>
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="font-semibold text-xl">{name}</h2>
                    <p className="font-normal text-[#666666] underline">{id}</p>
                </div>
                <div>
                    <p>Color: {color}</p>
                    <p>Talle: {size}</p>
                </div>
            </div>
        </div>
        <div className="w-full flex items-center justify-between py-3">
            <div className="w-[100px] flex justify-center">
                <button className="w-full text-lg border-[1px] border-[#3A3A3A] border-r-0">-</button>
                <input type="number" className="max-w-[50px] bg-transparent text-center border-[1px] border-[#3A3A3A]" placeholder="1"/>
                <button className="w-full text-lg border-[1px] border-[#3A3A3A] border-l-0">+</button>
            </div>
            <div className="flex gap-3">
                <p className="font-bold text-xl">${price}</p>
                <button className="font-bold text-xl"><GoTrashcan/></button>
            </div>
        </div>
    </div>
  )
}
export default ItemCartCard