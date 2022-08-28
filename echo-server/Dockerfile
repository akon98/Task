FROM python:3.8.10
WORKDIR /echo-server
COPY requirements.txt /echo-server
RUN pip3 install --upgrade pip -r requirements.txt
COPY . /echo-server
EXPOSE 5000