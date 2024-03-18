const InputTextField = ({
  title,
  required,
  type,
  placeholder,
  validation,
  errors,
}) => {
  return (
    <div className="flex flex-col">
      {title && (
        <div>
          <div className="flex gap-x-1 text-black text-base font-semibold items-center">
            {required && <span className="text-red-500">*</span>}
            {title}
          </div>
        </div>
      )}
      <input
        className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
        placeholder={placeholder}
        type={type}
        {...validation}
      />
      {errors && (
        <span className="text-sm text-red-500">{errors?.message}</span>
      )}
    </div>
  );
};

const ImageInputField = ({ title, required, handleChange, validation, errors, preview }) => {

  return (
    <div className="flex flex-col">
      {title && (
        <div>
          <div className="flex gap-x-1 text-black text-base font-semibold items-center">
            {required && <span className="text-red-500">*</span>}
            {title}
          </div>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onClick={()=>console.log('geegee')}
        onChange={()=>console.log('yooooo')}
        {...validation}
      />
      {errors && (
        <span className="text-sm text-red-500">{errors?.message}</span>
      )}
      {preview && (
        <div>
          <h2>Preview:</h2>
          <img
            src={URL.createObjectURL(preview)}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export { InputTextField, ImageInputField };
