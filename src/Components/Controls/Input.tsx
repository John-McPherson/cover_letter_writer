const Input = ({
  onChange,
  name,
  label,
  value,
  type = "text",
}: {
  onChange: (value: string) => void;
  name: string;
  label: string;
  value?: string;
  type?: string;
}) => {
  return (
    <div className="flex gap-3 items-center justify-between">
      <label htmlFor={name}>
        <b>{label}:</b>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={value}
        className="bg-amber-200 p-1"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
