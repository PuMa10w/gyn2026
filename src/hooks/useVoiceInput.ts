import { useState, useRef, useEffect, useCallback } from 'react';

interface VoiceState {
  listening: boolean;
  transcript: string;
  error: string | null;
}

export function useVoiceInput() {
  const [state, setState] = useState<VoiceState>({ listening: false, transcript: '', error: null });
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startListening = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setState(s => ({ ...s, error: 'Voice recognition not supported' }));
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'ru-RU';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setState({ listening: true, transcript: '', error: null });
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map(r => r[0].transcript)
        .join('');
      setState(s => ({ ...s, transcript }));
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setState(s => ({ ...s, error: event.error, listening: false }));
    };

    recognition.onend = () => {
      setState(s => ({ ...s, listening: false }));
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  return {
    listening: state.listening,
    transcript: state.transcript,
    error: state.error,
    startListening,
    stopListening,
  };
}