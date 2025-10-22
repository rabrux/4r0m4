build:
	docker build -t local/4r0m4 .

publish:
	docker push local/4r0m4

up:
	docker-compose up -d

down:
	docker-compose down
