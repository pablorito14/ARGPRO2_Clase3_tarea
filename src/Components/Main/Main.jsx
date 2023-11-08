import { Producto } from '../Producto/Producto';
import './Main.css';

const Main = () => {
  const producto = {
    id:3,
    nombre: 'SMART LED NANO CELL TV LG 50 PULGADAS 4K UHD',
    descripcion: 'Televisor smart LED de 50". Resolucion UHD nano cell 4K (3840x2160). Procesador Inteligente a5 generacion 5. Salida de audio 20 W (10 por canal). Conexiones: Wifi. Bluetooth 5.0. 4 HDMI 2.0. 2 USB 2.0. LAN. Sintonizador TDA. Soporte VESA 200x200 mm. Sistema operativo webOS. Modo de imagen: 9 modos (Vivid, Standard, Eco, Cinema, Sports, Game, Filmmaker, (ISF)Expert(Bright Room), (ISF)Expert(Dark Room)). Medidas con base (alt-anch-prof) 78.1x123.3x25.5 cm. Peso con base 16.7 kg. Incluye: Cable de alimentacion, base y control remoto Magic.',
    precio: 389999,
    sku: 'E8OTSZ1LL',
    stock: 12,
    img: './tv-lg.webp'
  }  
  

  return(
    <div className="main d-flex align-items-center">
      <div className='container py-3'>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Producto producto={producto}/> 
          </div>
        </div>
      </div>

    </div>
  )
}


export { Main }