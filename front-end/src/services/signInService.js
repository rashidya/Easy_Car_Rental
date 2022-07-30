import axios from "../axios";

class SignInService{
    fetchUser = async (params) => {
        const promise = new Promise((resolve, reject) => {


            axios.get('logIn',{params:params})    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }




}
export default new SignInService();