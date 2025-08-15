interface ShadowButtonProps {
  text: string;
    className?: string; // override style

}
const ShadowButton = ({text, className}:ShadowButtonProps) => {
    return (
        <button className={`w-full cursor-pointer py-2 px-3 bg-red-500 hover:brightness-105 hover:drop-shadow-[0_0_15px_#FF5C5C] drop-shadow-[0_0_9px_red] duration-300 rounded-4xl ${className}`}>
            <p className=" text-white font-semibold">{text}</p>
        </button>
    )
}
export default ShadowButton