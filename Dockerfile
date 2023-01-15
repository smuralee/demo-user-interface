FROM node:lts-slim as builder

RUN useradd -u 101 alpha

RUN mkdir -p /home/alpha/app/node_modules && chown -R alpha:alpha /home/alpha/app
RUN mkdir -p /home/alpha/.npm && chown -R alpha:alpha /home/alpha/.npm

WORKDIR /home/alpha/app

USER alpha

COPY --chown=alpha:alpha . ./

RUN npm install && \
    npm run build-prod

FROM public.ecr.aws/nginx/nginx:alpine as deployer

COPY --from=builder /home/alpha/app/dist/demo-ui-with-angular /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
