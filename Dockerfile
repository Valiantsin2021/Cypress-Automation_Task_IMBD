FROM cypress/included:12.13.0
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV PORT 3000
EXPOSE $PORT
RUN npx cypress verify
ENTRYPOINT ["npm", "run", "test"]