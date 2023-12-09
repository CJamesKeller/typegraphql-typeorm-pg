FROM node:18.13.0

WORKDIR /src

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
COPY . .
RUN npm run build
EXPOSE 3000
# USER node
# The above would be best practice here, but running into permission issues
#   when trying to add `schema.graphql` file...
CMD ["npm", "start"]
