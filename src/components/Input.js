export default function Input({ onChange, name, value, type = "text", placeholder = "" }) {
    return (
        <textarea
            onChange={(e) => onChange(e)}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            className="focus:ring-indigo-500 focus:border-indigo-500 h-24 block w-full pr-12 sm:text-sm p-2 border-2 rounded text-gray-500 dark:text-gray-400 mt-2 text-sm"
        />
    )
}