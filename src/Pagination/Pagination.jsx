import React  from 'react';
import "../App.css"
const Pagination = ({ currentPege, totalCount ,paginate}) => {
    const pages = []

    for (let i = 1; i <= Math.ceil(totalCount/currentPege); i++) {
        pages.push(i)
    }
    return (
        <>
            <div className="pagination">
            {
                pages.map((number) =>(
                    <div key={number}>
                        <button  onClick={()=>{
                            paginate(number) 
                             window.scrollTo(0, 0)} } >
                            {
                                number
                            }
                        </button>
                    </div>
                ) ) 
            }
        </div>
        </>
    
    );
};

export default Pagination;