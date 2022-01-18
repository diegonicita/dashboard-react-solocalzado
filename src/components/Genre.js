import React from 'react';

function Genre(props){ 

    // console.log(props.name + " ---> " + props.active);

    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props[0] + ": " + props[1]}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Genre;