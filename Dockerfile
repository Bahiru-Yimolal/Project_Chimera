# Use an official Python base image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy your project files (except what's in .dockerignore)
COPY . /app

# Install Python dependencies via uv (Poetry-like)
RUN pip install --upgrade pip
RUN pip install uv

# Install project dependencies defined in pyproject.toml
RUN uv sync

# Default command
CMD ["pytest", "-v", "tests/"]