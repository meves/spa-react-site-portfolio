export const required = value => !value ? 'The field is required' : undefined;
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) 
                                   ? 'Invalid email address' : undefined;
<<<<<<< HEAD

// min length                                   
const minLength = min => value => value && value.length < min 
                                   ? `Field has to be at least ${min} characters` : undefined;
export const minLength8 = minLength(8);
export const minLength2 = minLength(2); 

// max length
const maxLength = max => value => value && value.length > max 
                                   ? `Field can't be longer than ${max} characters` : undefined;
export const maxLength30 = maxLength(30);
export const maxLength15 = maxLength(15);
=======
const minLength = min => value => value && value.length < min 
                                   ? 'Password has to be at least 8 characters' : undefined;
export const minLength8 = minLength(8); 
>>>>>>> ea1314901a69ba3dccd0bb20300f86d8ef72a6b4
