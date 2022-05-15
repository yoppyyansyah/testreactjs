import axios from 'axios';

const urlAido = 'https://dekontaminasi.com/api/id/covid19/';
const urlLocal = 'http://localhost:5000/aido/';


const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${urlAido}${path}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then((res) => {
                resolve(res.data)
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

const Post = (path, data) => {
    console.log(data)
    const promise = new Promise((resolve, reject) => {
        axios.post(`${urlLocal}${path}`, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                resolve(res.data)
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

//hospitals
const getHospital = () => Get(`hospitals`);
const postOrder = (data) => Post(`order`, data);

const API = {
    getHospital,
    Get,
    postOrder
}

export default API;
