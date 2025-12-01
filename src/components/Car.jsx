import React from 'react'

const Car = () => {
    return (
        <div>
            <model-viewer
                src="/models/mazda.glb"
                camera-orbit="150deg 75deg -6m"
                camera-target="5m 0m 0m"
                field-of-view="45deg"
                style={{ width: "800px", height: "500px" }}
            ></model-viewer>
        </div>
    )
}

export default Car
