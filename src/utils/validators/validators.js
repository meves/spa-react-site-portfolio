export const required = value => !value ? 'The field is required' : undefined;
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) 
                                   ? 'Invalid email address' : undefined;

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
