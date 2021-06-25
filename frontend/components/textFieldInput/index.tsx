export default function TextFieldInput({
  label = "",
  dataKey = "",
  placeholder = "",
  handler = (e: any, key: string) => {},
  type = "text",
}) {
  return (
    <div className="TextFieldInput">
      <label htmlFor={label}>{label}</label>
      <input
        onChange={(e) => handler(e, dataKey)}
        name={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
