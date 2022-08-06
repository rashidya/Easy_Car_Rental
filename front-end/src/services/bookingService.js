import axios from "../axios";

class BookingService{


    generateBookingId = async (data) => {
        const promise = new Promise((resolve, reject) => {


            axios.get('booking/generateBookingId')    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }


    postBooking = async (data) => {
        const promise = new Promise((resolve, reject) => {


            axios.post('booking', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }


    fetchBookings = async (params) => {
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
export default new BookingService();