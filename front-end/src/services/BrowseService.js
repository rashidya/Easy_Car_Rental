import axios from "../axios";



class BrowseService {
    fetchAvailableVehicles = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('browse' ,{params:params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }




    fetchAllVehicles = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle')
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

export default new BrowseService();