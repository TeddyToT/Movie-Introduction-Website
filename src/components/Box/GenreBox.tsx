
interface GenreBoxProps{
    genre: string
}
const GenreBox = ({genre}: GenreBoxProps) =>{
    return(
        <p className="py-1 px-4 border-2 border-white rounded-2xl bg-black text-sm">{genre}</p>
    )
}
export default GenreBox