import { useState } from "react";
import appData from "./data/data";

import EditableText from "./Components/EditableText/EditableText";
import Input from "./Components/Controls/Input";
import Checkbox from "./Components/Controls/checkbox";
function App() {
  const initialLayout: { [key: string]: boolean } = {};
  Object.keys(appData).forEach((key) => {
    initialLayout[key] = true;
  });

  const [vars, setVars] = useState({
    company: "Company",
    jobTitle: "Front End Engineer",
    hiringManager: "Hiring Manager",
    applicantName: "John McPherson",
  });

  const [layout, setLayout] = useState(initialLayout);

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
    <main className="bg-yellow-50 min-w-screen min-h-screen flex flex-col items-center py-10 gap-5">
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
            ? appData[section as keyof typeof appData].map(
                (content: string, index: number) => (
                  <EditableText
                    key={`intro-${index}`}
                    text={content}
                    jobTitle={vars.jobTitle}
                    company={vars.company}
                    hiringManager={vars.hiringManager}
                    applicantName={vars.applicantName}
                  />
                )
              )
            : "";
        })}
      </section>
    </main>
  );
}

export default App;
