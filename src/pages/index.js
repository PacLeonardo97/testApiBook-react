import React, { useState } from "react";
import axios from "axios";
import { ContainerBooks, FormContainer } from './styles'

const responseGetAllBooks = r => {
  const response = {
    data: r.data?.items.map(
      ({
        volumeInfo: { authors, publishedDate, description, pageCount, title, imageLinks = {} },
      }) => ({
        publishedDate,
        description,
        pageCount,
        authors,
        title,
        smallThumbnail: imageLinks && imageLinks.smallThumbnail,
      })
    ),
  };
  return response;
};

const App = () => {
  const [value, setValue] = useState("");
  const [printValue, setPrintValue] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${value}`
      );
      console.log('carai',responseGetAllBooks(response))
      setPrintValue(responseGetAllBooks(response))
    } catch (error) {
      console.log('erro', error)
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
     	<div className="containerInput">
        <input  type="text" value={value} onChange={handleChange} />
        <label htmlFor="inputBook" className="material-form-field-label"/>
     
      <br />
      <button type="submit">Procurar</button>
      </div>
      {printValue && (
        <>
          {printValue?.data?.map(({description, smallThumbnail, title, authors, pageCount, publishedDate})=>
            <ContainerBooks>
              {title && <h2 key={smallThumbnail} className="title">Título: {title}</h2>}
              {smallThumbnail && <img src={smallThumbnail} alt={title}/>}
              {description && <p className="description"><span>Descrição:</span> {description}</p>}
              {authors && <p><span>Autores:</span> {authors && authors.join(', ')}</p>}
              {publishedDate && <p><span>Data de publicação:</span> {publishedDate}</p>}
              {pageCount && <p><span>Páginas:</span> {pageCount}</p>}
            </ContainerBooks>
          )}
        </>
      )}
    </FormContainer>
  );
}

export default App;
