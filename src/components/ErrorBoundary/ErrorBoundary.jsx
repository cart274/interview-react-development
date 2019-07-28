import React from 'react'
import style from "./ErrorBoundary.module.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
          <section className={style.errorBoundary}>
              <h5>Hubo un error en la aplicación</h5>
              <a href={window.location.href}>Recargar</a>
          </section>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;