// Base del backend (NestJS). En producción define NEXT_PUBLIC_API_URL con el
// dominio real del API, p. ej. https://api.pascare.tech/api
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export function apiUrl(path) {
  return `${API_URL}${path}`;
}
