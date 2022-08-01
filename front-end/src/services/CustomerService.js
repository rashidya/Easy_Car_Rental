import axios from "../axios";

class CustomerService{


    fetchCustomer = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer',{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    fetchCustomers = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    putCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('customer', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };


    deleteCustomer = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('vehicle', {params: params})
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
export default new CustomerService();