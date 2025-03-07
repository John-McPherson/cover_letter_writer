import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

interface Props {
  text: string;
  company: string;
  jobTitle: string;
  applicantName: string;
  hiringManager: string;
  content: string;
  handleChange: (value: string) => void;
}

const classes = `w-full `;

const EditableText = ({
  text,
  company,
  jobTitle,
  applicantName,
  hiringManager,
  content,
  handleChange,
}: Props) => {
  // const [content, setContent] = useState(text);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex gap-4">
      {!isEditing ? (
        <p className={`${classes} textContent`}>
          {content
            .replace("{{company}}", company)
            .replace("{{hiringManager}}", hiringManager)
            .replace("{{applicantName}}", applicantName)
            .replace("{{jobTitle}}", jobTitle)}
        </p>
      ) : (
        <textarea
          className={`${classes} resize-none field-sizing-content`}
          onChange={(e) => handleChange(e.target.value)}
        >
          {content}
        </textarea>
      )}
      <div>
        <button onClick={() => setIsEditing(!isEditing)}>
          <FontAwesomeIcon icon={isEditing ? faFloppyDisk : faPencil} />
        </button>
      </div>
    </div>
  );
};

export default EditableText;
