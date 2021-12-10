export interface Pedido{
    _id?: string
    nombreEmpleado: string
    nombreCliente: string
    direccionCliente: string
    carroCliente: string
    telefonoCliente: string
    nombreServicio:string
    nombreComplemento:string
    precioTotal:string
    instrucciones:string
    fecha:Date
    estado:string
}