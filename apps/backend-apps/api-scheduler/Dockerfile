FROM node:14

ADD . /app

WORKDIR /app

RUN ls /app -al

RUN yarn && yarn build @app/backend-apps/api-scheduler

COPY apps/backend-apps/api-scheduler/package.json dist/apps/backend-apps/api-scheduler
COPY apps/backend-apps/api-scheduler/tsconfig.build.json dist/apps/backend-apps/api-scheduler
COPY apps/backend-apps/api-scheduler/tsconfig.json dist/apps/backend-apps/api-scheduler

EXPOSE 4000

RUN yarn --cwd dist/apps/backend-apps/api-scheduler
RUN yarn --cwd dist/apps/libs/modules
RUN yarn --cwd dist/apps/libs/utils
RUN yarn --cwd dist/apps/libs/core

RUN ls dist/apps/backend-apps/api-scheduler -al

RUN ls /app -al

RUN yarn

CMD yarn --cwd apps start:api-scheduler:prd