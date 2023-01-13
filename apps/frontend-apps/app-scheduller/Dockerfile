FROM node:14

ADD . /app

WORKDIR /app

RUN ls /app -al

RUN yarn && yarn build @app/frontend-apps/app-scheduler

COPY apps/frontend-apps/app-scheduler/package.json dist/apps/frontend-apps/app-scheduler
COPY apps/frontend-apps/app-scheduler/tsconfig.build.json dist/apps/frontend-apps/app-scheduler
COPY apps/frontend-apps/app-scheduler/tsconfig.json dist/apps/frontend-apps/app-scheduler

EXPOSE 4000

RUN yarn --cwd dist/apps/frontend-apps/app-scheduler
#RUN yarn --cwd dist/apps/libs/modules
#RUN yarn --cwd dist/apps/libs/utils
#RUN yarn --cwd dist/apps/libs/core

RUN ls dist/apps/frontend-apps/app-scheduler -al

RUN ls /app -al

RUN yarn

CMD yarn --cwd apps start:app-scheduler:prd