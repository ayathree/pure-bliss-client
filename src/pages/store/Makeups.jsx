import { useEffect, useState } from "react";


const Makeups = () => {
    const [makeups, setMakeups]=useState([])
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(`http://localhost:5000/makeups`)
        .then(res=>res.json())
        .then(data=>{
            setMakeups(data)
            setLoading(false)
        })
    }, [])
    if (loading) return <span className="loading loading-spinner loading-lg"></span>
    return (
        <div>
            <h1>{makeups.length}</h1>
           {
            makeups.map(makeup=>(
                <div key={makeup.id}  className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src={makeup.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            ))
           }
            
        </div>
    );
};

export default Makeups;