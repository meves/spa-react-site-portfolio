export const required = value => !value ? 'The field is required' : undefined;
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) 
                                   ? 'Invalid email address' : undefined;
const minLength = min => value => value && value.length < min 
                                   ? 'Password has to be at least 8 characters' : undefined;
export const minLength8 = minLength(8); 
