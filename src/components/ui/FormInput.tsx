/** @format */

export const FormInput = ({
  label,
  type,
  name,
  id,
  onChange,
}: {
  label: string;
  type: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        className='px-2 py-2 border border-gray-300 rounded-lg'
        onChange={onChange}
      />
    </div>
  );
};
