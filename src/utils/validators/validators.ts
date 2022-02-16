type VaidatorType = (value: string) => string | undefined;

export const required: VaidatorType = (value) => !value ? 'The field is required' : undefined;
export const email: VaidatorType = (value) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) 
                                   ? 'Invalid email address' : undefined;

// min length                                
type MinMaxType = (minMax: number) => VaidatorType;   
const minLength: MinMaxType = (minMax) => (value) => value && value.length < minMax 
                                   ? `Field has to be at least ${minMax} characters` : undefined;
export const minLength8 = minLength(8);
export const minLength2 = minLength(2); 

// max length
const maxLength: MinMaxType = (minMax) => (value) => value && value.length > minMax 
                                   ? `Field can't be longer than ${minMax} characters` : undefined;
export const maxLength30 = maxLength(30);
export const maxLength15 = maxLength(15);
