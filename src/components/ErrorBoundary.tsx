import React from 'react';
import { motion } from 'framer-motion';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          className="error-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            style={{ fontSize: '4rem', marginBottom: '1rem' }}
          >
            ⚠️
          </motion.div>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Что-то пошло не так
          </h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            При загрузке приложения произошла ошибка. Попробуйте обновить страницу.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={this.handleReset}
            style={{
              padding: '12px 32px',
              fontSize: '1rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              background: 'white',
              color: '#667eea',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            Попробовать снова
          </motion.button>
          {this.state.error && (
            <details style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '600px' }}>
              <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                Детали ошибки
              </summary>
              <pre style={{ 
                background: 'rgba(0,0,0,0.3)', 
                padding: '1rem', 
                borderRadius: '8px',
                overflow: 'auto',
                fontSize: '0.85rem'
              }}>
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
