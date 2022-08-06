import axios from "../axios";

class SignUpService{
    postSignUpCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {


            axios.post('signup/REGISTERED_USER', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    postSignUpDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {


            axios.post('signup/DRIVER', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }


    addRegisterUserImage = async (data,id) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('signup/addRegisterUserImage?id='+id,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


}
export default new SignUpService();