interface Props {
  city: string;
  setCity: (v: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ city, setCity, onSearch }: Props) {
  return (
    <div className="flex gap-2 w-full max-w-xl">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search any city..."
        className="flex-1 px-4 py-3 rounded-xl bg-glass backdrop-blur outline-none"
      />
      <button
        onClick={onSearch}
        className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600"
      >
        Search
      </button>
    </div>
  );
}
