const TextInput = ({
  onChange,
  name,
  label,
  value,
}: {
  onChange: (value: string) => void;
  name: string;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex gap-3 items-center justify-between">
      <label htmlFor={name}>
        <b>{label}:</b>
      </label>
      <input
        type="text"
        name={name}
        defaultValue={value}
        className="bg-amber-200 p-1"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
