import { useState } from "react";
import appData from "./data/data";

import EditableText from "./Components/EditableText/EditableText";
import TextInput from "./Components/Controls/TextInput";
function App() {
  const [company, setCompany] = useState("Company");
  const [jobTitle, setJobTitle] = useState("Front End Engineer");

  console.log(appData);
  return (
    <main className="bg-yellow-50 min-w-screen min-h-screen flex flex-col items-center py-10 gap-5">
      <section id="controls">
        <TextInput
          name={"company"}
          label="Company"
          value={company}
          onChange={(newValue) => setCompany(newValue)}
        />
        <TextInput
          name={"jobTitle"}
          label="Job Title"
          value={jobTitle}
          onChange={(newValue) => setJobTitle(newValue)}
        />
      </section>

      <section id="output" className="flex flex-col w-10/12 max-w-4xl gap-3">
        <EditableText
          text={appData.intro[0]}
          jobTitle={jobTitle}
          company={company}
        ></EditableText>
        <EditableText
          text={appData.intro[0]}
          jobTitle={jobTitle}
          company={company}
        ></EditableText>
      </section>
    </main>
  );
}

export default App;
