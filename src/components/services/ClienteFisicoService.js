import axios from 'axios'

const API_URL = 'http://localhost:8080/api/clientes/fisicos'

class ClienteService {
  async crearCliente(clienteFisico) {
    try {
      const response = await axios.post(API_URL, {
        nombrePila: clienteFisico.nombrePila,
        apellido: clienteFisico.apellido,
        cedula: clienteFisico.cedula,
        fechaNacimiento: clienteFisico.fechaNacimiento,
        numeroTelefono: clienteFisico.numeroTelefono,
        correoElectronico: clienteFisico.correoElectronico,
        cantidadCuentas: clienteFisico.cantidadCuentas,
        categoriaCliente: clienteFisico.categoriaCliente
      })
      return response.data
    } catch (error) {
      throw error.response ? error.response.data : error
    }
  }

  async obtenerClientes() {
    try {
      const response = await axios.get(API_URL)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }
}

export default new ClienteService()
