const EmailInput = () => {
  return (
    <div>
      <div className="flex overflow-hidden gap-5 justify-between pl-5 rounded-md border border-solid bg-stone-50 border-neutral-200 max-md:max-w-full">
        <div className="flex-1">
          <label htmlFor="emailInput" className="sr-only">
            Your Email
          </label>
          <input
            type="email"
            id="emailInput"
            className="w-full h-full py-5 bg-transparent text-neutral-400 focus:outline-none"
            placeholder="Your Email"
            required
            aria-label="Your Email"
          />
        </div>
        <button
          type="submit"
          className="overflow-hidden px-7 py-5 text-center text-white whitespace-nowrap bg-red-500 rounded-none border border-solid border-neutral-200 max-md:px-5 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default EmailInput;
