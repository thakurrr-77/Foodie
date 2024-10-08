function Card() {
    return (
        
        <div className="card mt-3 bg-dark text-light" style={{width: "18rem",maxHeight:"360px"}}>
        <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body" >
                <h5>CARD TITLE</h5>
                <p className="card-text">This is some important text</p>
                <div className="container w-100">
                    <select className="m-2 h-100 bg-secondary rounded" id="">{
                        Array.from(Array(6),(e,i)=>{
                            return(
                                <option key={i} value={i+1}>{i+1}</option>
                            )
                        })
                    }</select>
                    <select  className="m-2 h-100 bg-secondary rounded " name="" id="">
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <div className='d-inline h-100 fs-5'>
                        Total Price:
                    </div>
                </div>
            </div>  
        </div>
        
    )
}

export default Card
