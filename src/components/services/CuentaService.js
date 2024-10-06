import axios from 'axios'

const API_URL = 'http://localhost:8080/api/clientes'

class ClienteService {
  async crearCliente(cliente, tipo) {
    try {
      const response = await axios.post(`${API_URL}/${tipo}`, cliente)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data : 'Error de conexión'
    }
  }

  async obtenerClientes(tipo) {
    try {
      const response = await axios.get(`${API_URL}/${tipo}`)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }
}

export default new ClienteService()
