const Cards = (props) => {
    return (
        <>
            <div className='max-w-[1536px] mx-auto shadow-xl rounded-xl'>
                <div className="overflow-hidden">
                    <img className="hover:scale-125 duration-1000" src={props.Img} alt="404" width={500} height={300} />
                </div>
                <div className="p-2">
                    <h1 className="text-xl font-bolder font-mono text-center">{props.name}</h1>
                    <p className="text-left">{props.des}</p>
                </div>

            </div>

        </>
    )
}

export default Cards
