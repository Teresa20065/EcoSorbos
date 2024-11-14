import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import aus from "../assets/aus.png";

const SinglePageFAQ = () => {
    return (
        <div>

<Accordion defaultIndex={[0]} allowMultiple>
    <AccordionItem>
        <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    INFORMACIÓN DEL PRODUCTO
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            ¿Sabías que nuestros popotes biodegradables y comestibles son una alternativa innovadora y ecológica? 
            Cada popote está hecho con ingredientes naturales y sostenibles, diseñados para descomponerse sin dejar residuos tóxicos. 
            Además de cuidar el medio ambiente, ¡también son comestibles! Perfectos para todo tipo de bebidas, desde tus jugos favoritos hasta cócteles.
            TIP: ¡Disfrútalos fríos o en tus bebidas calientes para una experiencia única y eco-friendly!
        </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
        <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    CÓMO USAR
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            Usa nuestros popotes como lo harías con cualquier popote tradicional. Disfrútalos en tu bebida favorita, 
            y al final del día, puedes incluso comértelos o desecharlos sabiendo que son 100% biodegradables.
        </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
        <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    LOS INGREDIENTES
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            Agua (Aqua), Almidón de Maíz, Saborizantes Naturales, Goma Xanthan, Ácido Cítrico, Colorantes Naturales.
        </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
        <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    VALORES DE LA MARCA
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            <img src={aus} alt="Logo de nuestra marca ecológica" />
        </AccordionPanel>
    </AccordionItem>
</Accordion>

        </div>
    )
}

export default SinglePageFAQ