import axios from "../../axios";



class DashBoardService {
    fetchData = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('admin/dashBoardSummery')
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

export default new DashBoardService();