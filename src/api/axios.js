import axios from 'axios'
import config from '../config/index'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.por

class HttpRequest {

}

export default new HttpRequest(baseUrl)
