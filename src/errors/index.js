class ResourceNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ResourceNotFoundError';
  }
}
class ExternalServiceError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ExternalServiceError';
  }
}

module.exports = {
  ResourceNotFoundError,
  ExternalServiceError
};
