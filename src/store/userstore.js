import { reactive, ref } from 'vue';
import axios from "axios";

const userState = reactive({
    username: '',
    jwt: '',
    roles: '',
    userid: '',
    creationDate: ''
});

const isLogged = ref(false);
const loading = ref(false);
const initialLoadData = ref(false);

const fetchUserByRefreshToken = async () => {
    if(!isLogged.value){
        const userLogged = localStorage.getItem("userLogged");
        if(userLogged){
            initialLoadData.value = true;
            try{
                const { data } = await axios.post('/api/auth/refresh',{},{withCredentials: true})

                const logged_user = {
                    username: data.email,
                    jwt: data.jwt,
                    roles: data.roles,
                    userid: data.userID,
                    creationDate: data.creationDate
                };

                Object.assign(userState,logged_user)
            }
            catch(err){
                
            }
            finally{
                initialLoadData.value = false;
                isLogged.value = true;
            }
        }
    }
}


const login = async (loginValues) => {
    loading.value = true;
    try{
        const response = await axios.post('/api/auth/login',{username: loginValues.email, password: loginValues.password},{headers:{'Content-Type':'application/json'}, withCredentials: true})
    
        const logged_user = {
            username: response.data.email,
            jwt: response.data.jwt,
            roles: response.data.roles,
            userid: response.data.userID,
            creationDate: response.data.creationDate
        };
        
        if(logged_user){
            Object.assign(userState,logged_user)
        }
        localStorage.setItem("userLogged",true);
        isLogged.value = true;
    }
    catch(err){
        if(err.response.status === 401){
            return "Błedne dane uwierzytelniające"
        }
    }
    finally{
        loading.value = false;
    }
}

const logout = () => {
    loading.value = true;
    axios.get('/api/auth/logout',{withCredentials: true})
    .then(response => {
        localStorage.clear();
        const clearUser = {
            username: '',
            jwt: '',
            roles: '',
            userid: '',
            creationDate: ''
        };
        Object.assign(userState,clearUser);
        isLogged.value = false;
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        loading.value = false;
    })
}

const setJWT = (newJWT) => {
    userState.jwt = newJWT
}

export default {
    userState,
    isLogged,
    loading,
    initialLoadData,
    login,
    logout,
    fetchUserByRefreshToken,
    setJWT
}