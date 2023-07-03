import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router";
import { ID} from 'appwrite';
import Loading from "../components/Loading";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getUserOnLoad()
    }, [])

    const getUserOnLoad = async () => {

        if (sessionStorage.getItem("sessionId")) {
            try{
                let accountDetails = await account.get();
                setUser(accountDetails)
            }catch(error){
                console.log("No session present")            
            }
        }
        setLoading(false)
    }

    const handleUserLogin = async (e, credentials) => {
        e.preventDefault()

        try{
            let session = await account.createEmailSession(credentials.email, credentials.password)
            sessionStorage["sessionId"] = session.$id
            let accountDetails = await account.get();
            setUser(accountDetails)
            navigate('/')
        }catch(error){
            alert(error)
            console.log("Error logging user: ",error)
        }
    }

    const handleLogout = async () => {
        await account.deleteSession('current');
        sessionStorage.clear()
        setUser(null)
    }

    const handleRegister = async (e, credentials) => {
        e.preventDefault()
        console.log('Handle Register triggered!', credentials)

        if(credentials.password1 !== credentials.password2){
            alert('Passwords did not match!')
            return 
        }

        try{
            
            let response = await account.create(ID.unique(), credentials.email, credentials.password1, credentials.name);
            console.log('User registered!', response)

            let session = await account.createEmailSession(credentials.email, credentials.password1)
            sessionStorage["sessionId"] = session.$id            
            let accountDetails = await account.get();
            setUser(accountDetails)
            navigate('/')
        }catch(error){
            console.log("Error trying to register user")
            console.error(error)
        }
    }

    const contextData = {
        user,
        handleUserLogin,
        handleLogout,
        handleRegister
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <Loading /> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> {return useContext(AuthContext)}
export default AuthContext;