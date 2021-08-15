import useLocalStorage from "./hooks/useLocalStorage";
import { useState } from "react";
import logo from "./icons8-image-50.png";
import { Icon } from "@iconify/react";
import updateIcon from "@iconify-icons/grommet-icons/update";

export default function () {
  const [test, setTest] = useLocalStorage("input", "");
  const [image, setImage] = useState("https://picsum.photos/id/237/300/300");

  return (
    <div style={{ height: "600px" }} className="flex vertical-space-evenly">
      <div
        style={{ height: "50px" }}
        className="white flex vertical-center horizontal-space-around"
      >
        <div
          style={{ width: "50%" }}
          className="flex horizontal-space-evenly vertical-center"
        >
          <img style={{ borderRadius: "50%" }} src={logo} alt="" />
          <h1>App React Webpack 5</h1>
        </div>

        <div>
          <input
            className="white"
            value={test}
            onChange={(ev) => setTest(ev.target.value)}
            name=""
          />
        </div>
      </div>

      <div
        style={{ height: "380px" }}
        className="flex vertical-space-evenly vertical-center"
      >
        <img style={{ borderRadius: "10px" }} src={image} alt="RandomImage" />

        <div style={{ cursor: "pointer" }}>
          <Icon
            icon={updateIcon}
            onClick={() =>
              setImage(
                `https://picsum.photos/id/${String(
                  Math.round(Math.random() * 100)
                )}/300/300`
              )
            }
            color="white"
          ></Icon>
        </div>
      </div>
    </div>
  );
}
