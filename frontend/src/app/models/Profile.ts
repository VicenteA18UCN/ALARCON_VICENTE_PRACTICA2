import Interest from './Interest';
import Tool from './Tool';
export default interface Profile {
    fullname: string;
    description:string;
    age: number;
    location: string;
    occupation: string;
    email: string;
    phone: string;
    facebook: string;
    github: string;
    image: string;
    interests: Interest[];
    tools: Tool[];
}