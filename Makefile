# --------------------------
# Makefile for Project Chimera
# --------------------------

# Default Python environment inside Docker
DOCKER_IMAGE = chimera:latest

# Build the Docker image
build:
	docker build -t $(DOCKER_IMAGE) .

# Install dependencies (setup environment)
setup: build
	@echo "Environment ready (Docker image built)"

# Run tests (failing tests included)
test: build
	docker run --rm -v $(PWD):/app $(DOCKER_IMAGE) pytest tests/

# Spec alignment check (optional)
spec-check:
	python scripts/spec_check.py