import { useState, useEffect } from 'react';

/**
 * TypewriterRole - Efecto de máquina de escribir realista con cursor parpadeante
 * para los roles y especialidades clave del ingeniero.
 */
export default function TypewriterRole({ words = [], defaultRole = 'Senior Front-End Engineer' }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    if (!words || words.length === 0) {
      return;
    }

    const currentWord = words[currentWordIndex % words.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(60 + Math.random() * 20);

        if (currentText === currentWord) {
          // Pausa al terminar la palabra
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        // Borrando
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypingSpeed(35);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  const displayedText = currentText || (!words || words.length === 0 ? defaultRole : words[0].substring(0, 1));

  return (
    <span className="typewriter-container">
      <span className="typewriter-text">{displayedText}</span>
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
