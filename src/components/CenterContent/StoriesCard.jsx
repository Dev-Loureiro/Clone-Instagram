import React from 'react'

function StoriesCard({img, nome}) {
    return (
        <div className="itemStories">

            <div className="borda">
                <img className="borda-img" src={img} alt="" />
            </div>

            <span>{nome}</span>

        </div>
    )
}

export default StoriesCard