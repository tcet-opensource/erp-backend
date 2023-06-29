FROM node:18.15.0

WORKDIR /usr/src/app

ENV TOKEN_SECRET='WSi76e8C4pHuV/0O9ms4K2iYHATZIHEJKLpToGgQaQ2Ktya5xE2+tQCpU5XPzkgObDmSJpy7f0pz87sW8lB79XjOJfAUgRJfaA/i1+bSY/X/Q8pBLqFRggJbyhHk6LDKCRAyjZvcPfMNuXeXV42VSBamSLUUZ6tCWXnIxc0mM3ANFdol3Lrr2XdOvryT/kxm0RumJY02PTAjC19dOXv98tNoLUashIMNTvjcbgRK4oAtjDWGLBsaF51G9HhSE4+JRiqZc/iKD3Cwuo+rijW/gj6luGaUAOnUIWAB3u7qq+H0O3Ka6HDJRiZ+iS+GO4O0mEAAcekqIDsw6wYeGgSNWw=='
ENV DB_URL='mongodb+srv://harsh:Arunannu@backend.zzlwrht.mongodb.net/?retryWrites=true&w=majority'

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3500
CMD ["npm", "run", "start"]



