function Input({ label, type, name }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm text-[#5A5A5A]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="w-full rounded-lg border border-[#DBDBDB] outline-none px-2 py-1.5"
      />
    </div>
  );
}

export default Input;
