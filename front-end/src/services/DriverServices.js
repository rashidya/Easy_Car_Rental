import axios from "../axios";

class DriverService{


    fetchDriver = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('driver',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('driver', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };


    deleteDriver = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('driver', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };






}
export default new DriverService();