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

  const [company, setCompany] = useState("Company");
  const [jobTitle, setJobTitle] = useState("Front End Engineer");
  const [hiringManager, setHiringManager] = useState("Hiring Manager");
  const [applicantName, setApplicantName] = useState("John McPherson");
  const [layout, setLayout] = useState(initialLayout);

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
          <Input
            name={"company"}
            label="Company"
            value={company}
            onChange={(newValue) => setCompany(newValue)}
          />
          <Input
            name={"jobTitle"}
            label="Job Title"
            value={jobTitle}
            onChange={(newValue) => setJobTitle(newValue)}
          />
          <Input
            name={"hiringManager"}
            label="Hiring Manager"
            value={hiringManager}
            onChange={(newValue) => setHiringManager(newValue)}
          />
          <Input
            name={"Applicant Name"}
            label="Applicant Name"
            value={applicantName}
            onChange={(newValue) => setApplicantName(newValue)}
          />
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
        {layout.intro &&
          appData.intro.map((content, index) => (
            <EditableText
              key={`intro-${index}`}
              text={content}
              jobTitle={jobTitle}
              company={company}
              hiringManager={hiringManager}
              applicantName={applicantName}
            />
          ))}
        {layout.mainContent &&
          appData.mainContent.map((content, index) => (
            <EditableText
              key={`maincontent-${index}`}
              text={content}
              jobTitle={jobTitle}
              company={company}
              hiringManager={hiringManager}
              applicantName={applicantName}
            />
          ))}

        {layout.outro &&
          appData.outro.map((content, index) => (
            <EditableText
              key={`outro-${index}`}
              text={content}
              jobTitle={jobTitle}
              company={company}
              hiringManager={hiringManager}
              applicantName={applicantName}
            />
          ))}

        {layout.signOff &&
          appData.signOff.map((content, index) => (
            <EditableText
              key={`signoff-${index}`}
              text={content}
              jobTitle={jobTitle}
              company={company}
              hiringManager={hiringManager}
              applicantName={applicantName}
            />
          ))}
      </section>
    </main>
  );
}

export default App;
