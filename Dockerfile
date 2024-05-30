FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm i

EXPOSE 8000

CMD [ "pnpm", "start" ]