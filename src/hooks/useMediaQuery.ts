import { useState, useEffect } from 'react';

/**
 * Hook customizado para detectar se a viewport atende a uma media query
 * Útil para lógica responsiva além de CSS
 *
 * @param query - Consulta de mídia CSS (ex: "(max-width: 768px)")
 * @returns boolean - True se a media query é atendida
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Define o valor inicial
    setMatches(media.matches);

    // Listener para mudanças
    const listener = () => setMatches(media.matches);

    // Adiciona listener (com suporte a navegadores antigos)
    if (media.addEventListener) {
      media.addEventListener('change', listener);
    } else {
      media.addListener(listener);
    }

    // Cleanup
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}

/**
 * Hook para detectar se está em dispositivo móvel
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)');
}

/**
 * Hook para detectar se está em modo escuro
 */
export function useDarkMode(): boolean {
  return useMediaQuery('(prefers-color-scheme: dark)');
}
