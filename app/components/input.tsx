type InputProps = {
  title: string;
  description?: string;
};

const Input = ({ title, description }: InputProps) => {
  return (
    <div class="flex flex-col items-start gap-2">
      <label for="name" class="text-sm">
        {title}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        class="px-3 py-1 border rounded-md h-9 text-base border-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
      />
      {description && <p class="text-slate-600 text-sm">{description}</p>}
    </div>
  );
};

export default Input;
