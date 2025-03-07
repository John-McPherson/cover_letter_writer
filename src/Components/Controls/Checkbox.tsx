const Checkbox = ({
  onChange,
  name,
  label,
  value,
}: {
  onChange: () => void;
  name: string;
  label: string;
  value: boolean;
}) => {
  return (
    <div className="flex gap-3 items-center justify-between">
      <label htmlFor={name}>
        <b>{label}:</b>
      </label>
      <input
        type="checkbox"
        name={name}
        checked={value}
        className="bg-amber-200 p-1"
        onChange={() => onChange()}
      />
    </div>
  );
};

export default Checkbox;
