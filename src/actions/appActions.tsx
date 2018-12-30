import axios from 'axios';

export const SEND_SERVER = 'SEND_SERVER'

export default function sendServer (data: any) {
    const request = axios.post('http://localhost:9000/', { data })
    return {
        type: SEND_SERVER,
        payload: request
    }
}