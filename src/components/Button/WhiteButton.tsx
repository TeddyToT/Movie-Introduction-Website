interface WhiteButtonProps {
  text: string;
}
const WhiteButton = ({text}:WhiteButtonProps) => {
    return (
        <button className="w-full cursor-pointer hover:bg-white hover:brightness-105 border-white border-2 duration-300 rounded-4xl text-white hover:text-red-500">
            <p className=" font-semibold">{text}</p>
        </button>
    )
}
export default WhiteButton