import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "PREGUNTAS FRECUENTES",
    rowContentTextSize: "10px",
    rows: [
        {
            title: "¿CUÁNTO TIEMPO TARDARÁ MI PEDIDO EN LLEGAR?",
            content: `Te ofrecemos la opción de utilizar USPS o UPS al momento de pagar. 

            USPS: Prioridad (2-4 días hábiles dependiendo de la ubicación) y Prioridad Express (1-3 días hábiles dependiendo de la ubicación).
            
            UPS:
            Ground (4-8 días hábiles dependiendo de la ubicación) 3-Day Select (3 días hábiles) 2nd Day Air (2 días hábiles) Next Day Air Saver (1 día hábil) Next Day Air (1 día hábil) Next Day Air Early AM (1 día hábil).
            
            Ten en cuenta que esto no aplica a pedidos realizados durante el fin de semana, así como en períodos de ventas masivas y temporadas altas. Los pedidos pueden retrasarse hasta 48 horas durante estos períodos.
            
            Los tiempos de entrega pueden variar durante los períodos de vacaciones públicas debido a la alta demanda en los servicios postales. Por favor, espera retrasos en los tiempos de entrega estimados y en la respuesta del servicio al cliente de los proveedores de entrega. Gracias por tu comprensión.`,
        },

        {
            title: "¿CUÁNTO CUESTA EL ENVÍO?",
            content:
                "El costo de envío se calcula al momento de pagar, en función de tu dirección de entrega y el método de envío preferido. Ofrecemos envío gratuito en todos los pedidos superiores a $50.",
        },

        {
            title: "¿PUEDO RECIBIR MI PEDIDO POR ENVÍO EXPRESS?",
            content: `Sí, ofrecemos una opción de Prioridad Express a través de USPS al momento de pagar. Ten en cuenta que seleccionar esta opción de envío express no garantiza la entrega al día siguiente.`,
        },

        {
            title: "¿REALIZAN ENVÍOS INTERNACIONALES?",
            content: `Actualmente, solo ofrecemos envíos de compras en línea dentro de los Estados Unidos. No realizamos envíos fuera de los Estados Unidos debido a los impuestos y tarifas adicionales impuestos por la aduana. Tenemos otros sitios de EcoSorbos que envían a Australia, Nueva Zelanda, Asia, Reino Unido, Europa y Canadá.`,
        },

        {
            title: "¿QUÉ SUCEDE SI MI PAQUETE SE PIERDE?",
            content: `Lamentablemente, no podemos cambiar ninguna información de pedido una vez que ha sido procesado. Asegúrate de ingresar correctamente los códigos postales y si estás en un edificio de oficinas, agrega el nombre de tu empresa para evitar que tu paquete sea devuelto.`,
        },

        {
            title: "¿QUÉ SUCEDE SI INGRESO LA INFORMACIÓN DE ENTREGA INCORRECTA?",
            content: `Si tu paquete ha estado 'estancado en tránsito' por más tiempo del esperado, por favor háznoslo saber para que podamos iniciar una 'investigación de paquete perdido' con el servicio postal.`,
        },
    ],
};

const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    position: "relative",
};

const config = {
    animate: true,
    expandIcon: "+",
    collapseIcon: "-",
    transitionDuration: "1s",
};

export default function CartPageFaq() {
    return (
        <div className="faqParent fof text-4xl relative">
            <Faq
                data={data}
                styles={styles}
                config={config}
                className="relative"
            />
        </div>
    );
}
