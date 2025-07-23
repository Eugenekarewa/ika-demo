import {useState} from 'react';
export function useSession(){
    const [user,setUser] = useState(()=>localStorage.getItem('user'));
    const login =(username:string)=>{
        localStorage.setItem('user',username);
        setUser(username);
    };
    const logout =()=>{
        localStorage.removeItem('user');
        setUser(null);
    };
    return {user,login,logout}
}
