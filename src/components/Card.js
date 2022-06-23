import React from 'react';

const Card = ({taskObjek, index}) => {
    return (
      <div className='card-wrapper mr-5'>
            <div className='card-top' style={{'background-color': 'chartreuse'}}></div>
            <div className='task-holder'>
                <span className='card-header' style={{'background-color':'#f2faf1', 'border-radius': '10px'}}>{taskObjek.Name}</span> 
                <p>{taskObjek.Description}</p>
                <div style={{'position': 'absolute', 'right': '20px', 'bottom': '20px'}}>
                    <i className='far fa-edit' style={{'color': '#5dc250'}}></i>
                    <i className='fas fa-trash-alt' style={{'color': '#5dc250'}}></i>
                </div>
            </div>
      </div>
    );
};

export default Card;