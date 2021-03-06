import React from "react";
import { Link } from "react-router-dom";

const Editor = props => {
  return (
    <form className="editor_form">
      <label htmlFor="date" className="editor_date">
        Fecha
        <input
          type="date"
          id="date"
          placeholder="21/04/2018"
          data-field="date"
          onChange={props.getDate}
        />
      </label>
      <label htmlFor="state" className="editor_state">
        Estado
      </label>
      <label htmlFor="happy-button">
        <input
          id="happy-button"
          data-field="mood"
          type="radio"
          value=":)"
          name="face"
          onClick={props.getMood}
        />{" "}
        :)
      </label>
      <label htmlFor="sad-button">
        <input
          id="sad-button"
          data-field="mood"
          type="radio"
          value=":("
          name="face"
          onClick={props.getMood}
        />{" "}
        :(
      </label>
      <label className="editor_message">
        Mensaje{" "}
        <input
          type="text"
          data-field="message"
          placeholder="¿Por qué es un buen día?"
          onChange={props.getMessage}
        />
      </label>
      <Link to="/">
        <button
          className="editor_button-save"
          type="submit"
          onClick={props.submitData}
        >
          GUARDAR
        </button>
      </Link>
      <Link to="/">
        <button className="editor_button-reset">Cancelar</button>
      </Link>
    </form>
  );
};

export default Editor;
