interface CastProps{
    avatar: string,
    castName: string
}

const Cast = ({avatar, castName}:CastProps) =>{
    return (
        <div className="w-27">
            <img className="w-11/12 mx-auto rounded-xl" src={`http://image.tmdb.org/t/p/original/${avatar}`}/>
            <p className=" w-11/12 mx-auto text-xs md:text-sm">{castName}</p>
        </div>
    )
}
export default Cast