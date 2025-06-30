# Makefile
PLAYWRIGHT_IMAGE := mcr.microsoft.com/playwright:v1.53.1-noble
WORKDIR          := /home/pwuser/workspace

.PHONY: e2e
local-e2e:
	docker run --rm -it \
	  --ipc=host \
	  -v "$(PWD)":$(WORKDIR) \
	  -w $(WORKDIR) \
	  $(PLAYWRIGHT_IMAGE) \
	  bash -c "npm ci && npx playwright test"
