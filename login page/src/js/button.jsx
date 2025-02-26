function Button({ textContent }) {
  return (
    <button
      type="submit"
      className="w-full rounded-lg font-bold text-sm text-white bg-primary px-6 py-2"
    >
      {textContent}
    </button>
  );
}

export default Button;
