import "./index.css";
import "./App.css";
import { Section, NavBar, LightBox } from "./com/com";
import { useState } from "react";
function App() {
  const [showLightBox, setLightBoxValue] = useState(false);
  const [showScroll, setScrollValue] = useState(false);
  return (
    <div
      className={`app flex w-full h-full overflow-x-hidden ${
        showScroll ? "overflow-y-auto" : "overflow-y-hidden"
      }`}
    >
      <main className="w-[1200px] h-full mx-auto lg:w-full md:h-max">
        <NavBar scrollClick={setScrollValue} />
        <Section click={() => setLightBoxValue(true)} />
        {showLightBox && <LightBox click={() => setLightBoxValue(false)} />}
      </main>
    </div>
  );
}

export default App;
