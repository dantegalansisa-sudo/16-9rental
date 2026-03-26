# Guía de Deployment en Vercel 🚀

## Rental 16:9 | Cine Rentals

### 📦 Pre-requisitos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub conectado

---

## 🔧 Configuración Automática

El proyecto ya está configurado para Vercel con:

✅ **vercel.json** - Configuración de deployment
✅ **vite.config.ts** - Optimizaciones de build
✅ **package.json** - Scripts de build correctos

---

## 🚀 Deploy en Vercel (3 pasos)

### 1️⃣ Importar Proyecto

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Selecciona "Import Git Repository"
3. Elige tu repo: `dantegalansisa-sudo/16-9rental`

### 2️⃣ Configurar Build

Vercel detectará automáticamente:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 3️⃣ Deploy

Click en **"Deploy"** y espera 1-2 minutos.

---

## 🌐 URL del Sitio

Después del deploy, tendrás:

```
https://16-9rental.vercel.app
```

O un dominio personalizado que puedes configurar.

---

## ⚙️ Configuración Avanzada

### Variables de Entorno (si las necesitas)

En Vercel Dashboard → Settings → Environment Variables:

```bash
VITE_API_URL=tu-api-url
VITE_WHATSAPP_NUMBER=18294207487
```

### Dominio Personalizado

1. Ve a Settings → Domains
2. Agrega tu dominio (ej: `rental169.com`)
3. Configura los DNS según las instrucciones

---

## 🔄 Auto-Deploy

Cada vez que hagas push a `master`, Vercel automáticamente:

1. ✅ Detecta el cambio
2. ✅ Ejecuta el build
3. ✅ Despliega la nueva versión
4. ✅ Te notifica el resultado

---

## 🐛 Troubleshooting

### Error: "Build failed"

**Solución 1:** Verifica que el build funcione localmente:
```bash
npm run build
```

**Solución 2:** Limpia node_modules:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Error: "Routes not working"

✅ Ya está resuelto con `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Error: "Images not loading"

Verifica que las imágenes estén en `public/images/`

---

## 📊 Optimizaciones Incluidas

✅ **Code Splitting** - Chunks separados para React y Framer Motion
✅ **Cache Headers** - Assets cacheados por 1 año
✅ **SPA Routing** - Todas las rutas redirigen a index.html
✅ **Tree Shaking** - Código no usado eliminado automáticamente

---

## 🔗 Enlaces Útiles

- [Vercel Docs](https://vercel.com/docs)
- [Vite + Vercel](https://vercel.com/docs/frameworks/vite)
- [Custom Domains](https://vercel.com/docs/custom-domains)

---

## 🎉 ¡Listo!

Tu sitio estará en línea en: `https://16-9rental.vercel.app`

**Tiempo de build:** ~1-2 minutos
**Tiempo de deploy:** Instantáneo
**SSL/HTTPS:** Automático
**CDN:** Global (CloudFront)

---

*Creado con ❤️ por NEXIX Tech Studio*
