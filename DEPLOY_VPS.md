# Despliegue en el VPS — pascare-frontend

- **Puerto host:** `3060` → contenedor `3000`
- **Dominios:** `pascare.tech` y `www.pascare.tech` (DNS ya configurado, Proxied)
- Requiere que el backend ya esté publicado en `https://api.pascare.tech/api`.

## 1. Certificado Origin de pascare.tech (una sola vez, para toda la zona)

El cert `origin.crt` actual NO cubre `pascare.tech` (solo lucyscan/kotosh).
En el panel de Cloudflare de la zona **pascare.tech**:

1. SSL/TLS → Origin Server → **Create Certificate**.
2. Hostnames: `pascare.tech`, `*.pascare.tech`. Descarga cert y key.
3. Cópialos al VPS como `~/nginx/certs/pascare.crt` y `~/nginx/certs/pascare.key`.
4. SSL/TLS → Overview → modo **Full (strict)**.

Este cert sirve tanto para `pascare.tech` como para `api.pascare.tech`.

## 2. Código y build

```bash
cd ~ && git clone https://github.com/Afkaqui/pascare_frontend.git pascare-frontend && cd pascare-frontend
cp .env.example .env && nano .env
#   NEXT_PUBLIC_API_URL=https://api.pascare.tech/api
docker compose up -d --build
curl -I http://localhost:3060
```

> `NEXT_PUBLIC_API_URL` se hornea en el build. Si lo cambias, hay que
> reconstruir la imagen (`docker compose up -d --build`).

## 3. Subdominio en nginx

```bash
sudo kaqui-sites add pascare pascare.tech 3060 custom       # cert_name: pascare
sudo kaqui-sites add pascare-www www.pascare.tech 3060 custom
curl -I https://pascare.tech
```

## Actualizar (deploys futuros)

```bash
cd ~/pascare-frontend && git pull && docker compose up -d --build
```
