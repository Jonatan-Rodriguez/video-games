import { ContainerForm } from "./form.styled";
import axios from "axios";
import { useState } from "react";

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        image: '',
        description: '',
        platforms: '',
        released: '',
        rating: '',
        genre: ''
    });

    const handleSubmit = async(event) =>{
        event.preventDefault();

        try {
            await axios.post('http://localhost:3001/videogames', formData);
            console.log('Datos enviados correctamente');
        } catch (error) {
            alert('¡Hubo un error al enviar los datos!');
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <ContainerForm>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" required name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="image">Link a la imagen</label>
                <input type="text" required name="image" value={formData.image} onChange={handleChange} />

                <label htmlFor="description">Descripcion</label>
                <input type="text" required name="description" value={formData.description} onChange={handleChange} />

                <label htmlFor="platforms">Plataformas</label>
                <input type="text" required name="platforms" value={formData.platforms} onChange={handleChange} />

                <label htmlFor="released">Fecha de lanzamiento</label>
                <input type="text" required name="released" value={formData.released} onChange={handleChange} />

                <label htmlFor="rating">Rating</label>
                <input type="text" required name="rating" value={formData.rating} onChange={handleChange} />

                <label htmlFor="genre">Genero</label>
                <input type="text" required name="genre" value={formData.genre} onChange={handleChange} />

                <input type="submit" value="Crear" />
            </form>
        </ContainerForm>
    )
}

export default Form;