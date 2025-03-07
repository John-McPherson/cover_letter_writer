import { useState } from "react";
import appData from "./data/data";

import EditableText from "./Components/EditableText/EditableText";
import Input from "./Components/Controls/Input";
import Checkbox from "./Components/Controls/checkbox";
function App() {
  const initialLayout: { [key: string]: boolean } = {};
  const initialContent: { [key: string]: string[] } = {};
  Object.keys(appData).forEach((key) => {
    initialLayout[key] = true;
    initialContent[key] = appData[key as keyof typeof appData];
  });

  const [vars, setVars] = useState({
    company: "Company",
    jobTitle: "Front End Engineer",
    hiringManager: "Hiring Manager",
    applicantName: "John McPherson",
  });

  const [layout, setLayout] = useState(initialLayout);
  const [content, setContent] = useState(initialContent);

  console.log(content);

  const copyToClipboard = async () => {
    // const textContent = document
    //   .querySelectorAll(".textContent")
    //   .map((text) => text.innerText);
    // console.log(textContent);
    // try {
    //   const blob = new Blob([text], { type: "text/html" });
    //   const data = [new ClipboardItem({ "text/html": blob })];
    //   await navigator.clipboard.write(data);
    //   alert("Text copied as separate paragraphs!");
    // } catch (err) {
    //   console.error("Error copying:", err);
    // }
  };

  const handleContentUpdate = (
    newValue: string,
    key: string,
    arrayIndex: number
  ) => {
    setContent((prevState) => {
      const newState = { ...prevState }; // Copy the previous state
      newState[key] = [...prevState[key]]; // Copy the array under the `key`
      newState[key][arrayIndex] = newValue; // Update the specific index of the array
      return newState;
    });
  };

  const handleChange = (newValue: string, key: string) => {
    setVars((prevState) => {
      const newState = {
        ...prevState,
        [key]: newValue,
      };
      return newState;
    });
  };

  const handleCheck = (key: string) => {
    setLayout((prevState) => {
      const newState = {
        ...prevState,
        [key]: !prevState[key as keyof typeof layout],
      };
      return newState;
    });
  };

  return (
    <main className="bg-amber-50 min-w-screen min-h-screen flex flex-col items-center py-10 gap-5">
      <section
        id="controls"
        className="flex justify-between w-10/12 max-w-4xl gap-3"
      >
        <div className="flex flex-col gap-3">
          {Object.keys(vars).map((key: string, index) => {
            return (
              <Input
                key={index}
                name={key}
                label={key}
                value={vars[key as keyof typeof vars]}
                onChange={(newValue) => handleChange(newValue, key)}
              />
            );
          })}
        </div>
        <div className="flex gap-3 flex-wrap items-start">
          {Object.keys(layout).map((key: string, index) => {
            return (
              <Checkbox
                key={index}
                name={key}
                label={key}
                value={layout[key as keyof typeof layout]}
                onChange={() => handleCheck(key)}
              />
            );
          })}
        </div>
      </section>

      <section id="output" className="flex flex-col w-10/12 max-w-4xl gap-3">
        {Object.keys(layout).map((section) => {
          return layout[section]
            ? content[section as keyof typeof appData].map(
                (content: string, index: number) => (
                  <EditableText
                    content={content}
                    key={`intro-${index}`}
                    jobTitle={vars.jobTitle}
                    company={vars.company}
                    hiringManager={vars.hiringManager}
                    applicantName={vars.applicantName}
                    handleChange={(newValue) =>
                      handleContentUpdate(newValue, section, index)
                    }
                  />
                )
              )
            : "";
        })}
      </section>
      <section id="save" className="flex gap-5">
        <button
          className="bg-amber-200 p-3 rounded hover:bg-amber-400"
          onClick={() => copyToClipboard()}
        >
          Copy To Clipboard
        </button>
        <button className="bg-amber-200 p-3 rounded hover:bg-amber-400">
          Download
        </button>
      </section>
    </main>
  );
}

export default App;
