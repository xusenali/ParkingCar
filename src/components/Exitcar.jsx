import { useRef } from "react";

export default function Exitcar() {

  

    return (
        <div className="w-full h-full">

            <div
                className="inline-block"
                style={{ display: "inline-block" }}
            >
                <model-viewer
                    src="/models/mazda.glb"
                    camera-orbit="-10deg 90deg -6m"
                    camera-target="1m 0m 0m"
                    field-of-view="45deg"
                    style={{ width: "800px", height: "500px" }}
                ></model-viewer>
            </div>
        </div>
    );
}
