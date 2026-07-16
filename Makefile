DOCKER ?= docker
TAG ?= v0.4
WEB_IMAGE ?= crpi-a4e25wq5oddt3z3b.cn-shanghai.personal.cr.aliyuncs.com/educlaw/inno-agent-website

.PHONY: docker-build docker-push


docker-build:
	$(DOCKER) build --no-cache --platform linux/amd64 -t $(WEB_IMAGE):$(TAG) -f Dockerfile .

docker-push:
	$(DOCKER) push $(WEB_IMAGE):$(TAG)
