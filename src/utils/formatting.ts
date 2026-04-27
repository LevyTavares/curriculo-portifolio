/**
 * Formata uma data para formato localizado
 * @param date - Date object
 * @param locale - Locale string (default: 'pt-BR')
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale: string = 'pt-BR'): string {
  return new Date(date).toLocaleDateString(locale);
}

/**
 * Formata uma data com hora
 * @param date - Date object
 * @param locale - Locale string (default: 'pt-BR')
 * @returns Formatted datetime string
 */
export function formatDateTime(date: Date, locale: string = 'pt-BR'): string {
  return new Date(date).toLocaleString(locale);
}

/**
 * Valida um email
 * @param email - Email string
 * @returns True if valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida um telefone brasileiro
 * @param phone - Phone string
 * @returns True if valid, false otherwise
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+55)?(\d{2})?9?(\d{4})-?(\d{4})$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

/**
 * Trunca um texto até um comprimento máximo
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

/**
 * Capitaliza a primeira letra de uma string
 * @param text - Text to capitalize
 * @returns Capitalized text
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Converte uma string para slug (URL-friendly)
 * @param text - Text to convert
 * @returns URL-friendly slug
 */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Formata uma moeda em Real brasileiro
 * @param value - Numeric value
 * @returns Formatted currency string
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata um número
 * @param value - Numeric value
 * @param locale - Locale string (default: 'pt-BR')
 * @returns Formatted number string
 */
export function formatNumber(value: number, locale: string = 'pt-BR'): string {
  return new Intl.NumberFormat(locale).format(value);
}
