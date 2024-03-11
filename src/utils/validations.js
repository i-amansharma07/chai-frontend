export default function getValidation(type){
    if(type === 'email'){
    return {
        required: "Email is required",
        validate: (value) => {
          if (!value.includes("@")) {
            return "Email must contain @";
          }
          return true;
        },
      }
    }else if(type === 'pass'){
        return {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Enter atleast 8 chars",
            },
          }
    }else if(type === 'otp'){
        return {
            required: "Otp is required",
            validate : (value) => {
              return value.length === 5 || "otp must have 5 digits"
            }
          }
    }
}